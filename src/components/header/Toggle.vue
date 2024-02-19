<template>
    <button class="text-primary" @click="toggleDark()">
        <i
            :class="
                isDark ? 'fa-regular fa-sun mr-1' : 'fa-regular fa-moon mr-1'
            "
        ></i>
        {{ isDark ? "Light" : "Dark" }}
    </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);


</script>

<style lang="scss" scoped></style>
