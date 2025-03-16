<template>
    <div
      v-if="isVisible"
      :style="{ top: position.y + 'px', left: position.x + 'px' }"
      class="fixed z-50 p-1 bg-primary-300 text-primary-100 shadow-lg rounded-md overflow-hidden border border-primary-400"
    >
      <div class="flex flex-col">
        <button
          @click="handleAddToFolder"
          class="px-4 py-2 text-gray-700 hover:bg-primary-200 text-left w-full rounded"
        >
          Добавить в папку
        </button>
        <button
          @click="handleAddToFavorites"
          class="px-4 py-2 text-gray-700 hover:bg-primary-200 text-left w-full rounded"
        >
          Добавить в избранное
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Состояние видимости контекстного меню
  const isVisible = ref(false);
  
  // Позиция контекстного меню
  const position = ref({ x: 0, y: 0 });
  
  // Обработчик открытия контекстного меню
  const openMenu = (event) => {
    event.preventDefault(); // Отключаем стандартное контекстное меню браузера
    position.value = { x: event.clientX, y: event.clientY };
    isVisible.value = true;
  };
  
  // Обработчик закрытия контекстного меню
  const closeMenu = () => {
    isVisible.value = false;
  };
  
  // Обработчики действий
  const handleAddToFolder = () => {
    console.log('Добавить в папку');
    closeMenu();
  };
  
  const handleAddToFavorites = () => {
    console.log('Добавить в избранное');
    closeMenu();
  };
  
  // Добавляем обработчики событий
  onMounted(() => {
    window.addEventListener('contextmenu', openMenu);
    window.addEventListener('click', closeMenu);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('contextmenu', openMenu);
    window.removeEventListener('click', closeMenu);
  });
  </script>