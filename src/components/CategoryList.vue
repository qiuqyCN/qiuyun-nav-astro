<script setup lang="ts">
import { ref, watch } from 'vue';
import { categories, type Category } from '@/configs/websites';

interface Props {
  modelValue?: number;
}

interface Emits {
  (e: 'update:modelValue', value: number): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const activeCategory = ref(props.modelValue ?? 0);

watch(() => props.modelValue, (newVal) => {
  if (newVal !== undefined && newVal !== activeCategory.value) {
    activeCategory.value = newVal;
  }
});

const selectCategory = (index: number) => {
  activeCategory.value = index;
  emit('update:modelValue', index);
};
</script>

<template>
  <aside class="w-full lg:w-60 xl:w-64 shrink-0">
    <div class="sticky top-24">
      <div class="bg-card border border-border rounded-2xl p-4 shadow-sm">
        <h2 class="text-base font-bold mb-4 flex items-center gap-2">
          <span class="text-xl">📂</span>
          分类导航
        </h2>
        <nav class="space-y-1.5">
          <button
            v-for="(category, index) in categories"
            :key="index"
            @click="selectCategory(index)"
            :class="[
              'w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition-all duration-200',
              activeCategory === index
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'hover:bg-accent hover:text-accent-foreground'
            ]"
          >
            <span class="text-lg">{{ category.icon }}</span>
            <div class="font-medium text-sm">{{ category.name }}</div>
          </button>
        </nav>
      </div>
    </div>
  </aside>
</template>
