<template>
  <v-app>
    <v-app-bar color="indigo-darken-2">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Conversor de Unidades</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav>
        <v-list-subheader>UNIDADES</v-list-subheader>
        <v-divider></v-divider>

        <template v-for="(item, i) in menuItems" :key="item.path">
          <v-list-item
            :to="item.path"
            :title="item.label"
            @click="drawer = false"
          ></v-list-item>
          <v-divider v-if="i < menuItems.length - 1"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(true)

const menuItems = [
  { path: '/km-a-millas', label: 'Kilómetros a Millas' },
  { path: '/celsius-a-fahrenheit', label: 'Celsius a Fahrenheit' },
  { path: '/kg-a-libras', label: 'Kilogramos a Libras' },
  { path: '/litros-a-galones', label: 'Litros a Galones' },
  { path: '/metros-a-pies', label: 'Metros a Pies' },
]
</script>
