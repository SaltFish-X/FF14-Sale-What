<template>
  <el-tabs v-model="activeName" type="border-card">
    <el-tab-pane label="出售记录查询" name="first">
      <SelectItem />
    </el-tab-pane>
    <el-tab-pane label="在售比价查询" name="second">
      <BuyItem />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import SelectItem from '@/components/SelectItem.vue';
import BuyItem from '../components/BuyItem.vue';
import { ref } from 'vue';

const activeName = ref('first');
</script>
<style></style>
