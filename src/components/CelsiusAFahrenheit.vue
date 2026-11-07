<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-card class="pa-4">
        <v-card-title>Celsius a Fahrenheit</v-card-title>

        <v-card-text>
          <v-text-field
            v-model="celsius"
            label="Grados Celsius"
            type="number"
          ></v-text-field>

          <v-btn color="indigo" @click="convertir">Convertir</v-btn>

          <p v-if="resultado" class="mt-4 text-h6">
            {{ celsius }} °C equivalen a {{ resultado }} °F
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const celsius = ref('')
const resultado = ref(null)

function convertir() {
  if (celsius.value === '' || isNaN(celsius.value)) {
    resultado.value = null
    return
  }
  resultado.value = (celsius.value * 9 / 5 + 32).toFixed(2)
}
</script>
