<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
import { Search, X, ExternalLink } from 'lucide-vue-next';
import { categories, type Website } from '@/configs/websites';

const searchQuery = ref('');
const showResults = ref(false);
const selectedIndex = ref(0);
const searchInput = ref<HTMLInputElement | null>(null);

const allWebsites = computed(() => {
  const websites: (Website & { categoryName: string })[] = [];
  categories.forEach(category => {
    if (category.websites) {
      category.websites.forEach(website => {
        websites.push({
          ...website,
          categoryName: category.name
        });
      });
    }
  });
  return websites;
});

const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return [];
  
  const query = searchQuery.value.toLowerCase();
  
  const calculateMatchScore = (website: Website & { categoryName: string }): number => {
    const nameLower = website.name.toLowerCase();
    const descLower = website.description.toLowerCase();
    
    let score = 0;
    
    if (nameLower === query) {
      score += 100;
    } else if (nameLower.startsWith(query)) {
      score += 80;
    } else if (nameLower.includes(query)) {
      score += 60;
    }
    
    if (descLower.includes(query)) {
      score += 30;
    }
    
    return score;
  };
  
  return allWebsites.value
    .map(website => ({
      website,
      score: calculateMatchScore(website)
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(item => item.website);
});

const performSearch = () => {
  if (!searchQuery.value.trim()) return;
  
  if (searchResults.value.length > 0 && selectedIndex.value >= 0) {
    const selectedWebsite = searchResults.value[selectedIndex.value];
    window.open(selectedWebsite.url, '_blank');
  } else {
    const url = `/search/${encodeURIComponent(searchQuery.value)}`;
    window.location.href = url;
  }
  showResults.value = false;
};

const selectResult = (website: Website) => {
  window.open(website.url, '_blank');
  showResults.value = false;
  searchQuery.value = '';
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    performSearch();
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectedIndex.value = Math.min(selectedIndex.value + 1, searchResults.value.length - 1);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    selectedIndex.value = Math.max(selectedIndex.value - 1, 0);
  } else if (e.key === 'Escape') {
    showResults.value = false;
  }
};

const clearSearch = () => {
  searchQuery.value = '';
  showResults.value = false;
  selectedIndex.value = 0;
};

const handleInputFocus = () => {
  if (searchQuery.value.trim()) {
    showResults.value = true;
  }
};

const handleClickOutside = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (!target.closest('.search-container')) {
    showResults.value = false;
  }
};

watch(searchQuery, (newValue) => {
  if (newValue.trim()) {
    showResults.value = true;
    selectedIndex.value = 0;
  } else {
    showResults.value = false;
  }
});

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="search-container relative w-64 md:w-80">
    <div class="relative flex-1">
      <input
        ref="searchInput"
        v-model="searchQuery"
        type="text"
        placeholder="搜索网站..."
        @keydown="handleKeyDown"
        @focus="handleInputFocus"
        class="search-input h-10 w-full px-4 pr-20 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
      />
      
      <div class="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
        <button
          v-if="searchQuery"
          @click="clearSearch"
          class="p-1.5 rounded-lg hover:bg-accent transition-all duration-200"
        >
          <X class="h-4 w-4 text-muted-foreground" />
        </button>
        <button
          @click="performSearch"
          class="p-1.5 rounded-lg hover:bg-accent transition-all duration-200"
        >
          <Search class="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>

    <div
      v-if="showResults && searchResults.length > 0"
      class="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-lg overflow-hidden z-50"
    >
      <div
        v-for="(result, index) in searchResults"
        :key="result.url"
        @click="selectResult(result)"
        @mouseenter="selectedIndex = index"
        :class="[
          'px-4 py-3 cursor-pointer transition-all duration-200 border-b border-border last:border-b-0',
          index === selectedIndex ? 'bg-accent' : 'hover:bg-accent/50'
        ]"
      >
        <div class="flex items-start justify-between gap-2">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <h4 class="font-medium text-foreground truncate">{{ result.name }}</h4>
              <span class="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{{ result.categoryName }}</span>
            </div>
            <p class="text-sm text-muted-foreground truncate mt-1">{{ result.description }}</p>
          </div>
          <ExternalLink class="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
        </div>
      </div>
    </div>

    <div
      v-if="showResults && searchQuery.trim() && searchResults.length === 0"
      class="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-lg p-4 z-50"
    >
      <p class="text-center text-muted-foreground">未找到相关网站</p>
    </div>
  </div>
</template>
