<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <el-select v-model="world" placeholder="Select" @change="check">
        <el-option-group
          v-for="group in worldOptions"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          />
        </el-option-group> </el-select
    ></el-col>

    <el-col :span="4">
      <el-select
        v-model="listKey"
        placeholder="请选择一个列表"
        @change="getCheckList"
      >
        <el-option
          v-for="item in checkLists"
          :key="item.label"
          :label="item.label"
          :value="item.label"
        />
      </el-select>
    </el-col>
    <el-col :span="4">
      <el-button type="primary" @click="createList">新建收藏列表</el-button>
    </el-col>

    <el-col :span="12">
      <el-radio-group v-model="beforeDay" @change="check">
        <el-radio-button :label="0">今天</el-radio-button>
        <el-radio-button :label="1">昨天</el-radio-button>
        <el-radio-button :label="3">三天内</el-radio-button>
        <el-radio-button :label="7">七天内</el-radio-button>
        <el-radio-button :label="30">一个月内</el-radio-button>
      </el-radio-group>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="20">
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="Please enter a keyword"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item"
        />
      </el-select>
    </el-col>
    <el-col :span="4">
      <el-button type="primary" @click="check">查询</el-button>
    </el-col>
  </el-row>

  <el-table
    :data="checkResult"
    border
    style="width: 100%"
    :default-sort="{ prop: 'totalPrice', order: 'descending' }"
  >
    <el-table-column prop="name" label="名称" width="180" sortable />
    <el-table-column prop="newPrice" label="最近成交价" />
    <el-table-column prop="total" label="交易量" sortable />
    <el-table-column prop="totalPrice" label="总价" sortable />
    <el-table-column prop="average" label="均价" />
    <el-table-column prop="maxPrice" label="最高价" />
    <el-table-column prop="minPrice" label="最低价" />
  </el-table>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import ItemData from '@/baseData/Item.json';
import { World, checkList } from '@/baseData/Const.js';
import type {
  ListItem,
  OptionsGroup,
  checkListItem,
} from '@/baseData/Const.js';
import { getSaleHistory } from '@/services/universalis';
import { passSeconds } from '@/uitils/monent';
import { ElMessage, ElMessageBox } from 'element-plus';

interface TableItem {
  name?: string;
  number?: number;
  total?: number;
  totalPrice: number;
  average?: number;
  newPrice?: number;
  maxPrice?: number;
  minPrice?: number;
}

let value = ref<ListItem[]>([]);
let world = ref('宇宙和音');
const worldOptions = ref<OptionsGroup[]>(World);

const list = ref<ListItem[]>([]);
const options = ref<ListItem[]>([]);
const loading = ref(false);
const beforeDay = ref<number>(3);

const listKey = ref<string>('');
const checkLists = ref<checkListItem[]>([]);

onMounted(() => {
  world.value = window.localStorage.getItem('world') || '宇宙和音';
  checkLists.value =
    JSON.parse(window.localStorage.getItem('checkLists') || '0') || checkList;

  list.value = Object.entries(ItemData).map((item) => {
    return { value: `${item[0]}`, label: `${item[1]}` };
  });

  const focuList = JSON.parse(window.localStorage.getItem('focuList') || '[]');
  focuList.length > 0 ? (value.value = focuList) : null;
});

const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      options.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase());
      });
    }, 200);
  } else {
    options.value = [];
  }
};

let checkResult = ref<TableItem[]>([]);

const check = () => {
  window.localStorage.setItem('focuList', JSON.stringify(value.value));
  window.localStorage.setItem('world', world.value);

  checkResult.value = [];

  value.value.forEach((itemId) => {
    getSaleHistory(
      world.value,
      itemId.value,
      passSeconds(beforeDay.value)
    ).then((res) => {
      const name = list.value.find((e) => e.value === itemId.value);
      const saleList = res.data.entries || [];
      const total = saleList?.reduce((a, b) => a + b.quantity, 0) || 0;
      const totalPrice =
        saleList?.reduce((a, b) => a + b.pricePerUnit * b.quantity, 0) || 0;
      const average = total === 0 ? 0 : Number((totalPrice / total).toFixed(2));
      const maxPrice =
        saleList?.reduce(
          (a, b) => Math.max(a, b.pricePerUnit),
          saleList[0].pricePerUnit
        ) || 0;
      const minPrice =
        saleList?.reduce(
          (a, b) => Math.min(a, b.pricePerUnit),
          saleList[0].pricePerUnit
        ) || 0;
      checkResult.value.push({
        name: name?.label,
        total,
        average,
        totalPrice,
        newPrice: saleList[0] ? saleList[0].pricePerUnit : 0,
        maxPrice,
        minPrice,
      });
    });
  });

  checkResult.value.sort((a, b) => a.totalPrice - b.totalPrice);
};

const getCheckList = (e: string) => {
  const data = checkLists.value.find((ele) => ele.label === e) || { data: [] };
  value.value = data?.data;
  check();
};

const createList = () => {
  ElMessageBox.prompt('请输入新的列表名', '创建新列表', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
  }).then(({ value }) => {
    addList(value);
    ElMessage({
      type: 'success',
      message: `创建新列表成功`,
    });
  });
};

const addList = (label: string) => {
  const index = checkLists.value.findIndex((e) => e.label === label);
  const newData = { label, data: value.value };

  !~index
    ? checkLists.value.push(newData)
    : checkLists.value.splice(index, 1, newData);
  window.localStorage.setItem('checkLists', JSON.stringify(checkLists.value));
};
</script>
<style>
.el-select {
  width: 100%;
}
</style>
