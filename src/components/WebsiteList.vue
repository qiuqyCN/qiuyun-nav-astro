<script setup lang="ts">
import { computed, ref } from 'vue';
import { categories, type Website } from '@/configs/websites';

interface Props {
  categoryIndex: number;
}

const props = defineProps<Props>();

const filteredWebsites = computed(() => {
  const category = categories[props.categoryIndex];
  return category?.websites || [];
});

const defaultLogo = '/default-logo.svg';
const imageStates = ref<Record<string, 'loading' | 'loaded' | 'error'>>({});

const getFaviconUrl = (url: string) => {
  try {
    const urlObj = new URL(url);
    return `${urlObj.origin}/favicon.ico`;
  } catch {
    return defaultLogo;
  }
};

const getImageUrl = (website: Website) => {
  return website.logo || getFaviconUrl(website.url);
};
</script>

<template>
  <div class="flex-1 min-w-0">
    <div v-if="filteredWebsites.length === 0" class="flex flex-col items-center justify-center h-full text-center py-20">
      <div class="text-7xl mb-6 opacity-50">📭</div>
      <div class="text-xl font-semibold text-muted-foreground">该分类下暂无网址</div>
      <div class="text-sm text-muted-foreground mt-2">请选择其他分类查看</div>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <a
        v-for="website in filteredWebsites"
        :key="website.url"
        :href="website.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-start gap-4 bg-card border border-border rounded-xl p-4 hover:shadow-lg hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
      >
        <div class="shrink-0 w-14 h-14 rounded-lg bg-linear-to-br from-primary/20 to-primary/5 relative overflow-hidden">
          <div
            v-if="imageStates[website.url] === 'loading'"
            class="absolute inset-0 animate-pulse bg-muted"
          />
          <img
            v-if="imageStates[website.url] !== 'error'"
            :src="getImageUrl(website)"
            :alt="website.name"
            loading="lazy"
            @load="imageStates[website.url] = 'loaded'"
            @error="imageStates[website.url] = 'error'"
            :class="[
              'w-full h-full object-contain group-hover:scale-110 transition-all duration-300',
              imageStates[website.url] ? 'opacity-100' : 'opacity-0'
            ]"
          />
          <img
            v-if="imageStates[website.url] === 'error'"
            :src="defaultLogo"
            :alt="website.name"
            class="w-full h-full object-contain group-hover:scale-110 transition-all duration-300 opacity-100"
          />
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="font-semibold text-sm mb-1.5 truncate group-hover:text-primary transition-colors">{{ website.name }}</h3>
          <p 
            class="text-xs text-muted-foreground line-clamp-2 leading-relaxed"
            :title="website.description"
          >
            {{ website.description }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  display: box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
}
</style>
