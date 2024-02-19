<template>
    <form
        :onSubmit="handleSubmit"
        class="w-full flex justify-center items-center sm:w-[30%]"
    >
        <div
            :class="
                error
                    ? 'flex items-center mt-6 sm:mt-0 bg-secondary w-full rounded-lg shadow border border-red-400'
                    : 'flex items-center mt-6 sm:mt-0 bg-secondary w-full rounded-lg shadow'
            "
        >
            <button type="submit" class="h-full px-4 text-gray-300">
                <i
                    :class="
                        error
                            ? 'fa-solid fa-magnifying-glass text-red-400'
                            : 'fa-solid fa-magnifying-glass'
                    "
                ></i>
            </button>
            <input
                type="text"
                class="p-4 w-full text-primary bg-secondary outline-none rounded-lg"
                :placeholder="
                    error
                        ? 'Please check your spelling '
                        : 'Search for a country...'
                "
                name="search-input"
                v-model="searchValue"
            />
        </div>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { countriesData, filteredData } from "../../store/store";

const searchValue = ref("");
const error = ref();

function handleSubmit(e) {
    e.preventDefault();

    for (let i = 0; i < countriesData.value.length; i++) {
        console.log(countriesData.value.length);

        if (
            countriesData.value[i].name.common.toLowerCase() ===
            searchValue.value.toLowerCase().trim()
        ) {
            filteredData.value = [countriesData.value[i]];
            error.value = false;
            searchValue.value = "";
            return;
        }
    }

    error.value = true;
    searchValue.value = "";
}
</script>

<style lang="scss" scoped></style>
