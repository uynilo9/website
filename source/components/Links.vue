<script setup lang="ts">
import * as vue from 'vue';
import { link_list, skill_list } from '@assets/datas';
const show_skills: vue.Ref<boolean> = vue.ref(false);
function toggle_skills(object: string): void {
    if(object === 'github')
        show_skills.value = !show_skills.value;
};
</script>

<template>
    <nav
        class="links mt-12 flex gap-5"
    >
        <a
            v-for="link in link_list"
            @mouseover="toggle_skills(link.class)"
            @mouseout="toggle_skills(link.class)"
            :href="link.url"
            :class="link.class"
            target="_blank"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                class="w-7 h-7"
            >
                <path
                    :d="link.d"
                    class=" fill-base"
                ></path>
            </svg>
        </a>
    </nav>
    <nav
        :class="show_skills ? 'show opacity-100' : ''"
        class="skills opacity-0 absolute mt-4 flex gap-2"
    >
        <a
            v-for="skill in skill_list"
        >
            <svg
                :class="skill.class"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                class="w-7 h-7"
            >
                <path
                    :d="skill.d"
                    :style="'fill: ' + skill.fill"
                    class=" fill-base transition-all"
                ></path>
            </svg>
        </a>
    </nav>
</template>

<style scoped lang="scss">
nav.links {
    a {
        svg path {
            transition: fill 0.25s ease;
        }
        &.vscode:hover svg path {
            @apply fill-vscode;
        }
        &.youtube:hover svg path {
            @apply fill-youtube;
        }
        &.twitter:hover svg path {
            @apply fill-twitter;
        }
        &.spotify:hover svg path {
            @apply fill-spotify;
        }
    }
}
nav.skills {
    transform: translateY(0.5rem);
    transition: opacity 0.25s ease, transform 0.5s ease;
    &.show {
        transform: translateY(0);
    }
    a svg path {
        transition: fill 0.25s ease;
    }
}
</style>