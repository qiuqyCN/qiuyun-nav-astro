<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next';
import { useColorMode } from '@vueuse/core';
import { onMounted } from 'vue';
import { Button } from '@/components/ui/button';

const mode = useColorMode();

const toggleTheme = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
};

onMounted(() => {
  const getThemePreference = () => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return 'light';
  };
  
  const isDark = getThemePreference() === 'dark';
  document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  
  if (typeof localStorage !== 'undefined') {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
});
</script>

<template>
  <Button variant="ghost" size="icon" class="h-9 w-9" @click="toggleTheme">
    <Sun class="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Moon class="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span class="sr-only">切换主题</span>
  </Button>
</template>
