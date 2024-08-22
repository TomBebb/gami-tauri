<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col">
    <div class="navbar bg-base-300 rounded-box">
      <div class="flex-1 px-2 lg:flex-none">
        <a class="text-lg font-bold" href="/"> Gami </a>
      </div>
      <div class="flex flex-1 justify-end px-2">
        <div class="flex items-stretch gap-2">
          <RouterLink class="btn btn-primary rounded-btn" to="/">
            Library
          </RouterLink>
          <RouterLink class="btn btn-secondary rounded-btn" to="/settings">
            Settings
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center gap-2">
      <h1>Welcome to Tauri!</h1>

      <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

      <RouterView />
      <Greet />
    </div>
  </div>
</template>
