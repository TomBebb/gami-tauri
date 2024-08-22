<script setup lang="ts">
import { invoke } from '@tauri-apps/api/tauri'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
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
  <div class="flex flex-column gap-8">
    <Button @click="greet" icon="pi pi-user" label="Greet" />
    <InputText v-model="name" placeholder="Enter a name..." />
  </div>

  <p>{{ greetMsg }}</p>
</template>
