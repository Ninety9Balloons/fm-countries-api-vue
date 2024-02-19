<template>
    <li
        className="px-4 py-2 m-2 cursor-pointer bg-secondary text-primary rounded shadow-sm hover:shadow-lg hover:scale-110 transition-all"
        @click="handleClick"
    >
        {{ fullName }}
    </li>
</template>

<script setup>
import { countriesData, selectedCountry } from "../../store/store";

const props = defineProps(["country"]);

let fullName;
let countryValue;

// Loop through data to find a match for the item's abbreviation name. If there's a match, return the country's full name
for (let i = 0; i < countriesData.value.length; i++) {
    if (props.country === countriesData.value[i].cca3) {
        fullName = countriesData.value[i].name.common;
        countryValue = countriesData.value[i];
    }
}

function handleClick() {
    selectedCountry.value = countryValue;
}
</script>

<style lang="scss" scoped></style>
