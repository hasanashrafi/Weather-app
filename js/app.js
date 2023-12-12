const BASE_URL = "https://api.openweathermap.org/data/2.5/"
const API_KEY = "3622d22286024a6a008e0983c93e34ba"

const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");




const getCurrentWeatherByName = async (city) => {
    const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const json = await response.json();
    return json
}



const searchHandler = async () => {
    const cityName = searchInput.value
    if (!cityName) {
        alert("Please Enter City Name")
    }

    const currentData = await getCurrentWeatherByName(cityName)
    console.log(currentData);
}






searchButton.addEventListener("click", searchHandler);