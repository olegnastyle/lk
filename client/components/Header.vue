<template>
    <header class="flex justify-between p-8">
        <NuxtLink to="/">
            <Logo />
        </NuxtLink>
        <ul class="flex gap-[50px] text-white text-2xl font-semibold">
            <li><NuxtLink class="block hover:text-primary-100 hover:scale-105 transition-all" to="/">Жанры</NuxtLink></li>
            <li><NuxtLink class="block hover:text-primary-100 hover:scale-105 transition-all" to="/news">Новинки</NuxtLink></li>
            <li><NuxtLink class="block hover:text-primary-100 hover:scale-105 transition-all" to="/populate">Популярные</NuxtLink></li>
        </ul>
        <ul class="flex gap-4 text-white">
            <li class="hover:text-primary-100 hover:scale-105 transition-all"><button>
                <svg class="size-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path></svg>
            </button></li>
            <li class="hover:text-primary-100 hover:scale-105 transition-all"><NuxtLink to="/">
                <svg class="size-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V18H18V10ZM20 18.6667L20.4 19.2C20.5657 19.4209 20.5209 19.7343 20.3 19.9C20.2135 19.9649 20.1082 20 20 20H4C3.72386 20 3.5 19.7761 3.5 19.5C3.5 19.3918 3.53509 19.2865 3.6 19.2L4 18.6667V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"></path></svg>
            </NuxtLink></li>
            <li class="hover:text-primary-100 hover:scale-105 transition-all"><NuxtLink to="/">
                <svg class="size-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
            </NuxtLink></li>
            <li class="hover:text-primary-100 hover:scale-105 transition-all">
                <FullScreenButton />
            </li>
        </ul>
    </header>
</template>

<script setup>
import Logo from '~/components/ui/Logo';
import FullScreenButton from '~/components/ui/FullScreenButton';
</script>