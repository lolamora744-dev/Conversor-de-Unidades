<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-card class="pa-4">
        <v-card-title>Metros a Pies</v-card-title>

        <v-card-text>
          <v-text-field
            v-model="metros"
            label="Ingresa los metros"
            type="number"
          ></v-text-field>

          <v-btn color="indigo" @click="convertir">Convertir</v-btn>

          <p v-if="resultado" class="mt-4 text-h6">
            {{ metros }} m son {{ resultado }} pies
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const metros = ref('')
const resultado = ref(null)

function convertir() {
  if (metros.value === '' || isNaN(metros.value)) {
    resultado.value = null
    return
  }
  resultado.value = (metros.value * 3.28084).toFixed(2)
}
</script>
