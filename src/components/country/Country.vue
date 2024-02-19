<template>
    <div v-if="countrySelected" class="p-6 w-full min-h-screen">
        <!-- Back button -->

        <button
            @click="handleClick"
            class="shadow px-5 py-1 bg-secondary text-primary mt-4 mb-10 rounded-xs hover:shadow-lg hover:scale-110 transition-all"
        >
            <i class="fa-solid fa-arrow-left"></i> Back
        </button>

        <!-- Item container -->

        <div class="flex flex-col sm:flex-row w-full sm:items-center">
            <!-- Image -->

            <div class="flex-1 mr-10 object-cover">
                <img
                    id="flag-image"
                    :src="selectedCountry.flags.svg"
                    :alt="selectedCountry.name.common"
                    class="w-full my-4 shadow object-cover"
                />
            </div>

            <div class="flex-1 sm:p-10">
                <!-- Info container -->

                <div
                    class="w-full flex-wrap flex flex-col text-primary sm:flex-row items-start sm:items-center justify-between"
                >
                    <div>
                        <!-- selectedCountry name -->

                        <h2 class="text-2xl sm:text-3xl font-bold my-4">
                            {{ selectedCountry.name.common }}
                        </h2>

                        <!-- Native name -->

                        <p
                            class="font-bold my-2"
                            v-if="selectedCountry.name.nativeName"
                        >
                            Native Name:
                            <span class="font-normal">
                                {{
                                    Object.values(
                                        selectedCountry.name.nativeName
                                    )[0].common
                                }}
                            </span>
                        </p>

                        <!-- Population -->

                        <p class="font-bold my-2">
                            Population:
                            <span class="font-normal">
                                {{
                                    selectedCountry.population.toLocaleString(
                                        "en",
                                        {
                                            useGrouping: true,
                                        }
                                    )
                                }}
                            </span>
                        </p>

                        <!-- Region -->

                        <p class="font-bold my-2">
                            Region:
                            <span class="font-normal">
                                {{ selectedCountry.region }}
                            </span>
                        </p>

                        <!-- Sub Region -->

                        <p
                            class="font-bold my-2"
                            v-if="selectedCountry.subregion"
                        >
                            Sub Region:
                            <span class="font-normal">
                                {{ selectedCountry.subregion }}
                            </span>
                        </p>

                        <!-- Capital -->

                        <p
                            class="font-bold my-2"
                            v-if="selectedCountry.capital"
                        >
                            Capital:
                            <span class="font-normal">
                                {{ selectedCountry.capital[0] }}
                            </span>
                        </p>
                    </div>

                    <div>
                        <!-- Domain -->

                        <p class="font-bold my-2 mt-6">
                            Top Level Domain:
                            <span class="font-normal">
                                {{ selectedCountry.tld[0] }}
                            </span>
                        </p>

                        <!-- Currency -->

                        <p
                            class="font-bold my-2"
                            v-if="selectedCountry.currencies"
                        >
                            Currencies:
                            <span class="font-normal">
                                {{
                                    Object.values(selectedCountry.currencies)[0]
                                        .name
                                }}
                            </span>
                        </p>

                        <!-- Languages -->

                        <p
                            class="font-bold my-2"
                            v-if="selectedCountry.languages"
                        >
                            Languages:
                            <span class="font-normal">
                                {{
                                    Object.values(
                                        selectedCountry.languages
                                    ).join(", ")
                                }}
                            </span>
                        </p>
                    </div>
                </div>

                <!-- Border countries -->

                <div v-show="selectedCountry.borders">
                    <h2 class="font-bold my-2 mt-6 text-primary">
                        Border Countries:
                    </h2>
                    <ul class="flex flex-wrap">
                        <BorderCountries
                            v-for="country in selectedCountry.borders"
                            :key="country"
                            :country="country"
                        />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    selectedCountry,
    countrySelected,
    countriesData,
    filteredData,
    regionText,
} from "../../store/store";
import BorderCountries from "./BorderCountries.vue";

function handleClick() {
    filteredData.value = countriesData.value;
    countrySelected.value = false;
    regionText.value = "Filter by Region";
}
</script>

<style lang="scss" scoped></style>
