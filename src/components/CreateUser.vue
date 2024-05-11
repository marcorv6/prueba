<template>
  <div class="form-container">
    <button class="action-button" @click="goBack">Go back</button>
    <h2>Add New User</h2>
    <form @submit.prevent="addUser">
      <div class="form-group">
        <label for="name">Name:*</label>
        <input type="text" id="name" v-model="newUser.name" required placeholder="Enter name">
      </div>
      <div class="form-group">
        <label for="username">Username:*</label>
        <input type="text" id="username" v-model="newUser.username" required placeholder="Enter username">
      </div>
      <div class="form-group">
        <label for="email">Email:*</label>
        <input type="email" id="email" v-model="newUser.email" required placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="newUser.phone" placeholder="Enter phone number">
      </div>
      <div class="form-group">
        <label for="website">Website:</label>
        <input type="text" id="website" v-model="newUser.website" placeholder="Enter website">
      </div>
      <div class="form-group">
        <label for="companyName">Company Name:</label>
        <input type="text" id="companyName" v-model="newUser.company.name" placeholder="Enter company name">
      </div>
      <div class="form-group">
        <label for="bs">Company Business:</label>
        <input type="text" id="bs" v-model="newUser.company.bs" placeholder="Enter company business">
      </div>
      <div class="form-group">
        <label for="catchPhrase">Company Catchphrase:</label>
        <input type="text" id="catchPhrase" v-model="newUser.company.catchPhrase" placeholder="Enter company catchphrase">
      </div>
      <div class="form-group">
        <label for="street">Street:</label>
        <input type="text" id="street" v-model="newUser.address.street" placeholder="Enter street">
      </div>
      <div class="form-group">
        <label for="suite">Suite:</label>
        <input type="text" id="suite" v-model="newUser.address.suite" placeholder="Enter suite">
      </div>
      <div class="form-group">
        <label for="city">City:</label>
        <input type="text" id="city" v-model="newUser.address.city" placeholder="Enter city">
      </div>
      <div class="form-group">
        <label for="zipcode">Zipcode:</label>
        <input type="text" id="zipcode" v-model="newUser.address.zipcode" placeholder="Enter zipcode">
      </div>
      <button type="submit">Add User</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { methods } from '@/store/store';
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
}

const userInitialState = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  company: {
    name: '',
    bs: '',
    catchPhrase: ''
  },
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: ''
  }
};

const newUser = ref({ ...userInitialState });

const addUser = () => {
  if (!newUser.value.name || !newUser.value.username || !newUser.value.email) {
    alert('Please fill in all required fields: Name, Username, Email');
    return;
  }
  methods.createUser(newUser.value);
  alert('User added successfully');
  newUser.value = { ...userInitialState };
  router.push('/');
}
</script>

<style scoped>
.form-container {
  width: 50%;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
