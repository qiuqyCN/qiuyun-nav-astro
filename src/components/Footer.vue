<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowUp, Mail, Github, Youtube, Tv, BookOpen } from 'lucide-vue-next';
import { siteConfig } from '@/configs/site-config';

const showBackToTop = ref(false);
const showWechatQR = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <footer class="bg-card border-t border-border">
    <div class="max-w-7xl mx-auto px-6 md:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="space-y-5">
          <div class="flex items-center gap-3">
            <img :src="siteConfig.logo" :alt="siteConfig.name" class="w-11 h-11 rounded-xl" />
            <div>
              <h3 class="text-xl font-bold">{{ siteConfig.name }}</h3>
              <p class="text-sm text-muted-foreground">{{ siteConfig.description }}</p>
            </div>
          </div>
          <div v-if="siteConfig.icpUrl" class="text-sm text-muted-foreground">
            <a :href="siteConfig.icpUrl" target="_blank" rel="noopener noreferrer" class="hover:text-foreground transition-colors">
              {{ siteConfig.icp }}
            </a>
          </div>
        </div>

        <div class="space-y-5">
          <h4 class="font-semibold text-base">联系方式</h4>
          <div class="flex flex-wrap gap-3">
            <a
              :href="`mailto:${siteConfig.contact.email}`"
              class="flex items-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80 transition-all duration-200 font-medium text-sm"
            >
              <Mail class="h-4 w-4" />
              <span>邮箱</span>
            </a>

            <div class="relative">
              <button
                @mouseenter="showWechatQR = true"
                @mouseleave="showWechatQR = false"
                class="flex items-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80 transition-all duration-200 font-medium text-sm"
              >
                <span class="text-lg">💬</span>
                <span>微信</span>
              </button>

              <div
                v-if="showWechatQR"
                class="absolute bottom-full left-1/2 -translate-x-1/2 w-48 mb-2 bg-background border border-border rounded-2xl shadow-2xl z-50"
              >
                <img :src="siteConfig.contact.wechat.qrCode" alt="微信二维码" />
                <p class="text-center text-sm py-2 text-muted-foreground">扫码添加微信</p>
              </div>
            </div>

            <a
              :href="siteConfig.contact.github"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80 transition-all duration-200 font-medium text-sm"
            >
              <Github class="h-4 w-4" />
              <span>Github</span>
            </a>

            <a
              :href="siteConfig.contact.douyin"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80 transition-all duration-200 font-medium text-sm"
            >
              <span class="text-lg">📱</span>
              <span>抖音</span>
            </a>

            <a
              :href="siteConfig.contact.bilibili"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80 transition-all duration-200 font-medium text-sm"
            >
              <Tv class="h-4 w-4" />
              <span>B站</span>
            </a>

            <a
              :href="siteConfig.contact.xiaohongshu"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80 transition-all duration-200 font-medium text-sm"
            >
              <BookOpen class="h-4 w-4" />
              <span>小红书</span>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10 pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {{ new Date().getFullYear() }} {{ siteConfig.name }}. All rights reserved.</p>
      </div>
    </div>

    <button
      v-if="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-xl hover:bg-primary/90 transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center"
    >
      <ArrowUp class="h-5 w-5" />
    </button>
  </footer>
</template>
