<script setup lang="ts">
import { invoke } from '@tauri-apps/api/tauri'
import { ref } from 'vue'
const name = ref('')
const greetMsg = ref('')

async function greet() {
  console.debug('greet', name.value)
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke('greet', { name: name.value })
}
</script>

<template>
  <div class="flex gap-8">
    <input
      class="input input-accent"
      id="greet-input"
      v-model="name"
      placeholder="Enter a name..."
    />
    <button @click="greet" class="btn btn-primary">Greet</button>
  </div>

  <p>{{ greetMsg }}</p>
</template>
