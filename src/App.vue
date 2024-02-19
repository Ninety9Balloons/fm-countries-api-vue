<template>
    <!-- Header -->
    <Header />

    <!-- Main Container -->
    <div
        class="w-screen sm:w-full sm:min-w-screen h-full bg-primary sm:flex sm:justify-between sm:items-center sm:my-0 p-4 sm:px-16 sm:py-6"
    >
        <!-- Container for all countries -->
        <div v-show="!countrySelected" class="w-full">
            <!-- Search and Filter container -->
            <div class="sm:flex sm:justify-between sm:w-full sm:mb-10">
                <!-- Search -->
                <Search />
                <!-- Filter -->
                <Filter />
            </div>
            <CountriesList />
        </div>

        <!-- Container for selected country -->
        <div class="w-full" v-show="countrySelected">
            <Country />
        </div>
    </div>
</template>

<script setup>
import Header from "./components/header/Header.vue";
import CountriesList from "./components/countriesList/CountriesList.vue";
import Search from "./components/search/Search.vue";
import Filter from "./components/filter/Filter.vue";
import Country from "./components/country/Country.vue";
import { countrySelected } from "./store/store";
</script>

<style scoped></style>
