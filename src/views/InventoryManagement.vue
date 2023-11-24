<template>
    <v-container>
      <!-- Add New Products -->
      <v-card>
        <v-card-title>Add New Products</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="addProduct">
            <v-text-field v-model="newProduct.name" label="Product Name"></v-text-field>
            <v-text-field v-model="newProduct.description" label="Description"></v-text-field>
            <v-text-field v-model="newProduct.price" label="Price"></v-text-field>
            <v-file-input v-model="newProduct.image" label="Product Image"></v-file-input>
            <v-btn type="submit" color="primary">Add Product</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
  
      <!-- Update Stock Levels -->
      <v-card>
        <v-card-title>Update Stock Levels</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item-group v-if="products.length > 0">
              <v-list-item v-for="product in products" :key="product.id">
                <v-list-item-content>
                  <v-list-item-title>{{ product.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ product.description }}</v-list-item-subtitle>
                  <v-text-field v-model="product.stockLevel" label="Stock Level" type="number"></v-text-field>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn @click="updateStockLevel(product)" color="primary">Update Stock</v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
            <v-list-item v-else>
              <v-list-item-content>No products available</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          description: '',
          price: '',
          image: null,
        },
        products: [
          // List of existing products, each product should have an id, name, description, price, image, stockLevel, etc.
          { id: 1, name: 'Product 1', description: 'Description 1', price: 20.99, image: null, stockLevel: 100 },
          { id: 2, name: 'Product 2', description: 'Description 2', price: 15.99, image: null, stockLevel: 50 },
          // Add more products as needed
        ],
      };
    },
    methods: {
      addProduct() {
        // Add logic to add a new product
        console.log('Add Product:', this.newProduct);
        // Reset form after adding product
        this.newProduct = {
          name: '',
          description: '',
          price: '',
          image: null,
        };
      },
      updateStockLevel(product) {
        // Add logic to update the stock level for the selected product
        console.log('Update Stock Level:', product);
        // You can update the stock level in the products array or make an API call
      },
    },
  };
  </script>
  