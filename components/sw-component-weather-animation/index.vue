<template><div id="weather-animation"></div></template>

<script>
import lottie from "lottie-web";
import clearDayAnimation from "../../assets/animations/clear-day.json";
import clearNightAnimation from "../../assets/animations/clear-night.json";
import cloudsAnimation from "../../assets/animations/clouds.json";
import cloudyDayAnimation from "../../assets/animations/cloudy-day.json";
import cloudyNightAnimation from "../../assets/animations/cloudy-night.json";
import rainAnimation from "../../assets/animations/rain.json";
import thunderAnimation from "../../assets/animations/thunder.json";
import axios from "axios";

export default {
  methods: {
    loadLottieAnimation(animationData, animationContainer) {
      const animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    },
  },
  mounted() {
    const weatherContainer = document.getElementById("weather-animation");

    const getWeatherInformation = async () => {
      const apiKey = "3d86f8a804374244b18165640231711";
      const apiUrl = "https://api.weatherapi.com/v1/current.json";
      const location = "costa rica"; // Update with your desired location

      try {
        const response = await axios.get(apiUrl, {
          params: {
            key: apiKey,
            q: location,
            aqi: "no",
          },
        });

        const isNight = response.data.current.is_day === "no";

        let animationData;
        switch (response.data.current.condition.text) {
          case "Clear":
            animationData = isNight ? clearNightAnimation : clearDayAnimation;
            break;
          case "Cloudy":
            animationData = cloudsAnimation;
            break;
          case "Partly cloudy":
            animationData = isNight ? cloudyNightAnimation : cloudyDayAnimation;
            break;
          case "Overcast":
          case "Mist":
          case "Fog":
            // You can set a specific animation for overcast conditions
            animationData = cloudsAnimation;
            break;
          case "Rain":
          case "Patchy rain possible":
          case "Patchy light drizzle":
          case "Light rain":
          case "Moderate rain at times":
          case "Moderate rain":
          case "Heavy rain at times":
          case "Light drizzle":
          case "Showers":
            animationData = rainAnimation;
            break;
          case "Thunderstorm":
            animationData = thunderAnimation;
            break;
          default:
            // Handle other conditions or set a default animation
            break;
        }

        if (animationData) {
          this.loadLottieAnimation(animationData, weatherContainer);
        }
      } catch (error) {
        console.error("Error fetching weather information:", error);
      }
    };
    getWeatherInformation();
  },
};
</script>

<style>
#weather-animation {
  width: 64px;
}
</style>
