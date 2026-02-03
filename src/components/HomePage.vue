<script setup lang="ts">
import { ref } from 'vue';
import CategoryList from './CategoryList.vue';
import WebsiteList from './WebsiteList.vue';

const activeCategory = ref(0);
</script>

<template>
  <div class="min-h-[calc(100vh-8rem)]">
    <div class="max-w-7xl mx-auto px-6 md:px-8 py-8">
      <div class="flex flex-col lg:flex-row gap-6">
        <CategoryList v-model="activeCategory" />
        <WebsiteList :category-index="activeCategory" />
      </div>
    </div>
  </div>
</template>
