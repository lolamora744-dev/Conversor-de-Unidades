<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-card class="pa-4">
        <v-card-title>Kilogramos a Libras</v-card-title>

        <v-card-text>
          <v-text-field
            v-model="kg"
            label="Ingresa el peso en kg"
            type="number"
          ></v-text-field>

          <v-btn color="indigo" @click="convertir">Convertir</v-btn>

          <p v-if="resultado" class="mt-4 text-h6">
            {{ kg }} kg son {{ resultado }} libras
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const kg = ref('')
const resultado = ref(null)

function convertir() {
  if (kg.value === '' || isNaN(kg.value)) {
    resultado.value = null
    return
  }
  resultado.value = (kg.value * 2.20462).toFixed(2)
}
</script>
