<script setup lang="ts">
import Profile from '@components/Profile.vue';
import Links from '@components/Links.vue';
</script>

<template>
    <div
        class="m-auto py-16 px-8 flex max-w-4xl min-h-screen place-content-center flex-col"
    >
        <main>
            <Profile />
        </main>
        <footer>
            <Links />
        </footer>
    </div>
</template>