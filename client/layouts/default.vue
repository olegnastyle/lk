<template>
    <Header />
    <main>
        <Navbar />
        <section>
            <slot />
        </section>
        <ContextMenu /> 
    </main>
    <Footer />
</template>

<script setup>
import ContextMenu from '~/components/ui/ContextMenu.vue';
</script>