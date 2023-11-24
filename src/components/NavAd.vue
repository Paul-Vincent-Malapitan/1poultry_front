<template>

    <v-app-bar scroll-behavior="inverted" app color="primary">
      <v-toolbar-title>Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="setPage('user')">User Management</v-btn>
      <v-btn text @click="setPage('branch')">Branch Management</v-btn>
      <v-btn text @click="setPage('inventory')">Inventory</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <!-- Display the selected page component here -->
        <component :is="currentPage"></component>
      </v-container>
    </v-main>

</template>

<script>
import UserManagement from '@/views/UserManagement.vue';
import BranchManagement from '@/views/BranchManagement.vue';
import InventoryManagement from '@/views/InventoryManagement.vue';

export default {
  data() {
    return {
      currentPage: null,
    };
  },
  methods: {
    setPage(page) {
      // Set the current page based on the button clicked
      switch (page) {
        case 'user':
          this.currentPage = UserManagement;
          break;
        case 'branch':
          this.currentPage = BranchManagement;
          break;
        case 'inventory':
          this.currentPage = InventoryManagement;
          break;
        default:
          this.currentPage = null;
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
