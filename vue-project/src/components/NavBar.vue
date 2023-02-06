<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <!-- Här lägger ni en navbar och istället för href så använder ni RouterLink -->
  <ul>
    <li>
      <RouterLink to="/">Hem</RouterLink>
    </li>
    <li>
      <RouterLink to="/about">About</RouterLink>
    </li>
  </ul>
  <RouterView />
</template>
