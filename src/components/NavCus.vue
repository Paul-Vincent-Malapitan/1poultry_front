<template>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="toggleDrawer">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on">mdi-menu</v-icon>
          </template>
          <span>Menu</span>
        </v-tooltip>
      </v-app-bar-nav-icon>
  
      <v-toolbar-title>My App</v-toolbar-title>
  
      <v-spacer></v-spacer>
  
      <v-app-bar-nav-icon @click="toggleNotifications">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on">mdi-bell</v-icon>
          </template>
          <span>Notifications</span>
        </v-tooltip>
      </v-app-bar-nav-icon>
  
      <v-app-bar-nav-icon @click="toggleSupport">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on">mdi-headset</v-icon>
          </template>
          <span>Customer Support</span>
        </v-tooltip>
      </v-app-bar-nav-icon>
  
      <v-app-bar-nav-icon @click="toggleAccount">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on">mdi-account</v-icon>
          </template>
          <span>Account</span>
        </v-tooltip>
      </v-app-bar-nav-icon>
  
      <v-app-bar-nav-icon @click="toggleCart">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on">mdi-cart</v-icon>
          </template>
          <span>Shopping Cart</span>
        </v-tooltip>
      </v-app-bar-nav-icon>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    // ... (rest of the component remains the same)
  };
  </script>
  