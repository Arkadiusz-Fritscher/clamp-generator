<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheDashboard from "./components/TheDashboard.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <TheHeader />
    <TheDashboard class="flex-grow" />
  </div>
</template>

<style>
@import "./assets/css/trailwind.css";
@import "./assets/css/base.css";
@import "./assets/css/dashboardCards.css";
@import "./assets/css/inputs.css";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@400;500;600&display=swap");
</style>
