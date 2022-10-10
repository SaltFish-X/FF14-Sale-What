<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <el-cascader
        v-model="world"
        :value="world"
        :options="worldOptions"
        :show-all-levels="false"
        expandTrigger="hover"
        @change="check"
        placeholder="请选择服务器"
      />
    </el-col>

    <el-col :span="4">
      <el-select
        v-model="listKey"
        placeholder="请选择预设列表"
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
      <el-button-group class="ml-4">
        <el-button type="primary" @click="createList">新建</el-button>
        <el-button type="primary" @click="updateList" :disabled="listKey === ''"
          >保存</el-button
        >
        <el-button type="primary" @click="deleteList" :disabled="listKey === ''"
          >删除</el-button
        >
      </el-button-group>
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
      <el-button @click="value = []">清空</el-button>
    </el-col>
  </el-row>

  <el-table
    :data="checkResult"
    border
    style="width: 100%"
    :default-sort="{ prop: 'totalPrice', order: 'descending' }"
  >
    <el-table-column type="expand">
      <template #default="props">
        <h2 class="table-detail-title">在售详情，仅显示前20条</h2>
        <el-table :data="props.row.shortList" class="table-detail" border>
          <el-table-column type="index" />
          <el-table-column prop="name" label="名称" />
          <el-table-column prop="pricePerUnit" label="价格" />
          <el-table-column prop="quantity" label="数量" />
          <el-table-column prop="retainerName" label="雇员名" />
          <el-table-column prop="worldName" label="服务器" />
          <!-- <el-table-column prop="lastReviewTime" label="上架时间" /> -->
          <el-table-column prop="worldUploadTimes" label="服务器更新时间" />
        </el-table>
        <h5 class="table-detail-title">在售详情，当前为最后一条</h5>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="名称" />
    <el-table-column prop="minPrice" label="最低价" width="80" />
    <el-table-column prop="quantity" label="数量" width="80" />
    <el-table-column prop="allPrice" label="总价" />
    <el-table-column prop="retainerName" label="雇员名" />
    <el-table-column prop="worldName" label="服务器" />
    <!-- <el-table-column prop="lastReviewTime" label="上架时间" /> -->
    <el-table-column prop="worldUploadTimes" label="服务器更新时间" />
  </el-table>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { WorldAll, checkListBuy } from '@/baseData/Const.js';
import type { ListItem, checkListItem } from '@/baseData/Const.js';
import type { CurrentlyShownView, ListingView } from '@/interface';
import { getSalecurrent, getSalecurrentOne } from '@/services/universalis';
import { ElMessage, ElMessageBox } from 'element-plus';
import { formatUnixTime } from '@/uitils/monent';
import { searchItemByEnglish, searchItemByChina } from '@/services/xivapi';

interface TableItem {
  name?: string;
  minPrice?: number;
  allPrice?: number;
  worldUploadTimes: string; // 服务器更新时间
  lastReviewTime?: string; // 上架时间
  worldName?: string;
  quantity?: number;
  retainerName?: string;
  shortList?: TableItem[];
}

let value = ref<ListItem[]>([]);
let world = ref<string[]>([]);
const worldOptions = ref(WorldAll);

const options = ref<ListItem[]>([]);
const loading = ref(false);
const beforeDay = ref<number>(1);

const listKey = ref<string>('');
const checkLists = ref<checkListItem[]>([]);

onMounted(() => {
  world.value =
    window.localStorage.getItem('world-buy')?.split(',') ||
    '中国,陆行鸟,陆行鸟'.split(',');
  checkLists.value =
    JSON.parse(window.localStorage.getItem('checkLists-buy') || '0') ||
    checkListBuy;

  const focuList = JSON.parse(
    window.localStorage.getItem('focuList-buy') || '[]'
  );
  focuList.length > 0 ? (value.value = focuList) : null;
});

const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true;
    // [en,ch]
    Promise.all([searchItemByEnglish(query), searchItemByChina(query)]).then(
      (res) => {
        loading.value = false;

        const enData = res[0].data.Results.map((e) => {
          return { label: e.Name, value: e.ID };
        });

        const chData = res[1].data.Results.map((e) => {
          return { label: e.Name, value: e.ID };
        });

        enData.forEach((el) => {
          const index = chData.findIndex((chEl) => chEl.value === el.value);
          !~index ? chData.push(el) : 0;
        });

        options.value = chData;
      }
    );
  } else {
    options.value = [];
  }
};

let checkResult = ref<TableItem[]>([]);

const check = () => {
  window.localStorage.setItem('focuList-buy', JSON.stringify(value.value));
  window.localStorage.setItem('world-buy', world.value.join(','));

  checkResult.value = [];
  const itemIds = value.value.map((e) => e.value).join(',');
  if (value.value.length > 1) {
    getSalecurrent(world.value[2], itemIds).then((res) => {
      if (res.data.items) {
        Object.entries(res.data.items).forEach(([e, view], index) => {
          saleCurrentFormat(view, value.value[index].label);
        });
      }
    });
  } else {
    getSalecurrentOne(world.value[2], itemIds).then((res) => {
      saleCurrentFormat(res.data || [], value.value[0].label);
    });
  }
};

const getWorldUploadTimes = (worldList?: Object, worldId?: number) =>
  // @ts-ignore
  formatUnixTime(worldList[worldId] / 1000);

const saleCurrentFormat = (data: CurrentlyShownView, name: string) => {
  const list = data.listings || [];
  const shortList = list.slice(0, 20).map((e) => {
    return {
      ...e,
      name,
      taxPrice: Math.ceil(e.pricePerUnit * 1.05),
      lastReviewTime: formatUnixTime(e.lastReviewTime),
      worldUploadTimes: getWorldUploadTimes(data.worldUploadTimes, e.worldID),
    };
  });
  const lastReviewTime = formatUnixTime(list[0].lastReviewTime);
  const worldUploadTimes = getWorldUploadTimes(
    data.worldUploadTimes,
    list[0].worldID
  );
  const minPrice = list[0].pricePerUnit;
  // const taxPrice = Math.ceil(minPrice * 1.05);
  const worldName = list[0].worldName;
  const quantity = list.reduce((a, b) =>
    minPrice === b.pricePerUnit && a.worldName === b.worldName
      ? { ...a, quantity: a.quantity + b.quantity }
      : a
  ).quantity;
  const allPrice = quantity * minPrice;
  // list[0].quantity;
  const retainerName = list[0].retainerName;
  checkResult.value.push({
    name,
    lastReviewTime,
    minPrice,
    allPrice,
    worldName,
    quantity,
    retainerName,
    shortList,
    worldUploadTimes,
  });
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
      message: `创建成功`,
    });
  });
};

const addList = (label: string) => {
  const index = checkLists.value.findIndex((e) => e.label === label);
  const newData = { label, data: value.value };

  !~index
    ? checkLists.value.push(newData)
    : checkLists.value.splice(index, 1, newData);
  window.localStorage.setItem(
    'checkLists-buy',
    JSON.stringify(checkLists.value)
  );
};

const updateList = () => {
  addList(listKey.value);
  window.localStorage.setItem(
    'checkLists-buy',
    JSON.stringify(checkLists.value)
  );

  ElMessage({
    type: 'success',
    message: `保存成功`,
  });
};

const deleteList = () => {
  const index = checkLists.value.findIndex((e) => e.label === listKey.value);
  checkLists.value.splice(index, 1);
  window.localStorage.setItem(
    'checkLists-buy',
    JSON.stringify(checkLists.value)
  );
  listKey.value = '';

  ElMessage({
    type: 'success',
    message: `删除成功`,
  });
};
</script>
<style>
.el-select {
  width: 100%;
}

.table-detail-title {
  text-align: center;
  margin: 4px;
  color: red;
}
</style>
