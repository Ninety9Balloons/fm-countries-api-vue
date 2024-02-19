<template>
    <div
        class="flex justify-between w-full bg-secondary py-10 sm:py-6 px-6 sm:px-10 shadow-md"
    >
        <h1
            class="font-bold text-primary text-xl md:text-3xl cursor-pointer"
            @click="handleClick"
        >
            Where in the world?
        </h1>

        <!-- Toggle -->
        <Toggle />
    </div>
</template>

<script setup>
import Toggle from "./Toggle.vue";
import {
    filteredData,
    countriesData,
    countrySelected,
    regionText,
} from "../../store/store";

function handleClick() {
    filteredData.value = countriesData.value;
    countrySelected.value = false;
    regionText.value = "Filter by Region";
}
</script>

<style lang="scss" scoped></style>
