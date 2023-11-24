<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="navigateTo('user')">User Management</v-btn>
      <v-btn text @click="navigateTo('branch')">Branch Management</v-btn>
      <v-btn text @click="navigateTo('inventory')">Inventory</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- Content will be displayed here based on the selected page -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
