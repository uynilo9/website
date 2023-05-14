<script setup lang="ts">
import * as vue from 'vue';
import { link_list, skill_list } from '@assets/datas';
const show_skills: vue.Ref<boolean> = vue.ref(false);
</script>

<template>
    <nav
        class="links mt-12 flex gap-5"
    >
        <a
            v-for="link in link_list"
            @mouseover="link.class === 'github' ? show_skills = !show_skills : ''"
            @mouseout="link.class === 'github' ? show_skills = !show_skills : ''"
            :href="link.url"
            :class="link.class"
            class="group"
            target="_blank"
        >
            <svg
                :class="
                    link.class === 'vscode' ? 'group-hover:fill-vscode'
                    : link.class === 'youtube' ? 'group-hover:fill-youtube'
                    : link.class === 'twitter' ? 'group-hover:fill-twitter'
                    : link.class === 'spotify' ? 'group-hover:fill-spotify' : ''
                "
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                class="w-7 h-7 fill-base transition fill duration-300 ease"
            >
                <path
                    :d="link.d"
                ></path>
            </svg>
        </a>
    </nav>
    <nav
        :class="show_skills ? 'show opacity-100 -translate-y-0' : ' translate-y-2'"
        class="skills opacity-0 absolute mt-4 flex gap-2 transition opacity transform duration-500 ease"
    >
        <a
            v-for="skill in skill_list"
        >
            <svg
                :style="'fill: ' + skill.fill"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                class="w-7 h-7"
            >
                <path
                    :d="skill.d"
                ></path>
            </svg>
        </a>
    </nav>
</template>