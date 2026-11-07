<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-card class="pa-4">
        <v-card-title>Kilómetros a Millas</v-card-title>

        <v-card-text>
          <v-text-field
            v-model="km"
            label="Ingresa los kilómetros"
            type="number"
          ></v-text-field>

          <v-btn color="indigo" @click="convertir">Convertir</v-btn>

          <p v-if="resultado" class="mt-4 text-h6">
            {{ km }} km son {{ resultado }} millas
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const km = ref('')
const resultado = ref(null)

function convertir() {
  if (km.value === '' || isNaN(km.value)) {
    resultado.value = null
    return
  }
  resultado.value = (km.value * 0.621371).toFixed(2)
}
</script>
