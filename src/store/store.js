import { ref } from "vue";

// Store for all data
export const countriesData = ref();
export const isLoading = ref(true);

// Store for filtered data
export const filteredData = ref();

async function getData() {
    try {
        isLoading.value = true;
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        countriesData.value = data;
        filteredData.value = data;
    } catch (error) {
        console.error("error", error);
    } finally {
        isLoading.value = false;
    }
}

getData();

export const countrySelected = ref(false);

export const selectedCountry = ref([]);

export const regionText = ref("Filter by Region");
