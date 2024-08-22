<script setup lang="ts">
import Button from 'primevue/button'
import DataView from 'primevue/dataview'
const games: { name: string; desc: string }[] = [
  {
    name: 'Scribblenauts',
    desc: 'Type what you can spell!',
  },
  {
    name: 'Scribblenauts Un',
    desc: 'Type what you can spell!',
  },
]
</script>
<template>
  <div class="font-bold">Library</div>

  <DataView :value="games">
    <template #list="slotProps">
      <div class="grid w-full">
        <template v-for="(item, index) in slotProps.items" :key="index">
          <div class="col-11">
            {{ item.name }}
          </div>
          <div class="col-1 flex flex-row">
            <Button class="w-full" icon="pi pi-play">Play</Button>
          </div>
        </template>
      </div>
    </template>
  </DataView>
</template>
