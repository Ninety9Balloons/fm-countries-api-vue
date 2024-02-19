<template>
    <div class="w-full sm:w-auto my-7 sm:my-0 relative justify-self-end">
        <button
            @click="handleClick"
            class="p-4 r-5 rounded-lg shadow w-[50%] sm:w-full focus:none outline:none flex items-center justify-between bg-secondary"
        >
            <p class="text-primary">{{ regionText }}</p>
            <i class="fa-solid fa-chevron-down ml-6"></i>
        </button>
        <ul
            v-show="open"
            class="bg-white dark:bg-secondary shadow w-[50%] sm:w-full mt-2 rounded-lg p-4 absolute"
        >
            <ListItems @change-region="changeRegion" />
        </ul>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ListItems from "./ListItems.vue";
import { countriesData, filteredData, regionText } from "../../store/store";

const selectedRegion = [];
const open = ref(false);

console.log(selectedRegion.length);

if (selectedRegion.length === 0) {
    regionText.value = "Filter by Region";
}

function handleClick() {
    open.value = !open.value;
}

function changeRegion(n) {
    regionText.value = n;
    selectedRegion.length = 0;

    filteredData.value = countriesData.value;
    for (let i = 0; i < countriesData.value.length; i++) {
        if (countriesData.value[i].continents == regionText.value) {
            selectedRegion.push(countriesData.value[i]);
            filteredData.value = selectedRegion;
        }
    }

    open.value = !open.value;
}
</script>

<style lang="scss" scoped></style>
