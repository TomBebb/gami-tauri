<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";
const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
  <form class="flex gap-8" @submit="greet">
    <input class="input input-accent" id="greet-input" v-model="name" placeholder="Enter a name..." />
    <button type="submit" class="btn btn-primary">Greet</button>
  </form>

  <p>{{ greetMsg }}</p>
</template>
