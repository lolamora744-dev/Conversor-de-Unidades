<template>
  <v-row justify="center">
    <v-col cols="12" md="6">
      <v-card class="pa-4">
        <v-card-title>Litros a Galones</v-card-title>

        <v-card-text>
          <v-text-field
            v-model="litros"
            label="Ingresa los litros"
            type="number"
          ></v-text-field>

          <v-btn color="indigo" @click="convertir">Convertir</v-btn>

          <p v-if="resultado" class="mt-4 text-h6">
            {{ litros }} litros son {{ resultado }} galones
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const litros = ref('')
const resultado = ref(null)

function convertir() {
  if (litros.value === '' || isNaN(litros.value)) {
    resultado.value = null
    return
  }
  resultado.value = (litros.value * 0.264172).toFixed(2)
}
</script>
