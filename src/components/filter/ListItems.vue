<template>
    <li
        v-for="region in regions"
        :value="region"
        class="mb-1 w-full text-primary hover:font-bold cursor-pointer"
        @click="$emit('changeRegion', region)"
    >
        <p>{{ region }}</p>
    </li>
</template>

<script setup>
const regions = [
    "Africa",
    "Antarctica",
    "Europe",
    "Oceania",
    "North America",
    "South America",
];
</script>

<style lang="scss" scoped></style>
