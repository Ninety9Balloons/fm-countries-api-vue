<template>
    <li
        v-for="country in filteredData"
        :key="country.cca3"
        :value="country"
        @click="handleClick(country)"
        class="flex flex-col w-[80%] rounded bg-secondary shadow mb-10 sm:w-[25%] sm:max-w-[300px] sm:min-w-[300px] sm:h-[400px] hover:shadow-lg hover:scale-110 transition-all cursor-pointer"
    >
        <img
            :src="country.flags.svg"
            class="rounded-t w-full sm:h-[50%] object-cover"
            :alt="country.name.common + ' flag'"
        />
        <div class="p-6 pb-10">
            <h2 class="text-2xl text-primary font-bold mb-3">
                {{ country.name.common }}
            </h2>
            <p class="mb-2">
                <span class="font-bold text-primary">Population: </span>
                <span class="text-primary">
                    {{
                        country.population.toLocaleString("en", {
                            useGrouping: true,
                        })
                    }}
                </span>
            </p>
            <p class="mb-2">
                <span class="font-bold text-primary">Region: </span>
                <span class="text-primary"> {{ country.region }}</span>
            </p>
            <p class="mb-2">
                <span class="font-bold text-primary">Capital: </span>
                <span v-for="value in country.capital" class="text-primary">
                    {{ value }}</span
                >
            </p>
        </div>
    </li>
</template>

<script setup>
import {
    filteredData,
    countrySelected,
    selectedCountry,
} from "../../store/store";

function handleClick(country) {
    countrySelected.value = true;

    selectedCountry.value = country;
}
</script>

<style lang="scss" scoped></style>
