<template>
    <button @click="toggleFullScreen">
        <svg v-if="!isFullScreen" class="size-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5858 5H14V3H21V10H19V6.41421L14.7071 10.7071L13.2929 9.29289L17.5858 5ZM3 14H5V17.5858L9.29289 13.2929L10.7071 14.7071L6.41421 19H10V21H3V14Z"></path></svg>
        <svg v-else class="size-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 11.0001H13V3.50008L16.0429 6.54297L19.2929 3.29297L20.7071 4.70718L17.4571 7.95718L20.5 11.0001ZM3.50008 13H11.0001V20.5L7.95718 17.4571L4.70718 20.7071L3.29297 19.2929L6.54297 16.0429L3.50008 13Z"></path></svg>
    </button>
</template>

<script setup>
// Состояние полноэкранного режима
const isFullScreen = ref(false);

// Функция для переключения полноэкранного режима
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    // Включаем полноэкранный режим
    document.documentElement.requestFullscreen().then(() => {
      isFullScreen.value = true;
    });
  } else {
    // Выходим из полноэкранного режима
    document.exitFullscreen().then(() => {
      isFullScreen.value = false;
    });
  }
};

// Отслеживание изменений состояния полноэкранного режима
const handleFullScreenChange = () => {
  isFullScreen.value = !!document.fullscreenElement;
};

onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullScreenChange);
});

onBeforeUnmount(() => {
  document.removeEventListener('fullscreenchange', handleFullScreenChange);
});
</script>