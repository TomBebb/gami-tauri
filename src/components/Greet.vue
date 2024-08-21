<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";
import {NxButton, NInput} from "naive-ui"
const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
  <form class="row">
    <NInput id="greet-input" v-model:value="name" placeholder="Enter a name..." />
    <NxButton type="primary" @click="greet">Greet</NxButton>
  </form>

  <p>{{ greetMsg }}</p>
</template>
