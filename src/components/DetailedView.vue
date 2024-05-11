<template>
  <button @click="goBack">Go back</button>
  <div class="user-details">
    <h2>User Details</h2>
    <div class="detail">
      <strong>Name:</strong> {{ user.name }}
    </div>
    <div class="detail">
      <strong>Username:</strong> {{ user.username }}
    </div>
    <div class="detail">
      <strong>Email:</strong> {{ user.email }}
    </div>
    <div class="detail">
      <strong>Phone:</strong> {{ user.phone }}
    </div>
    <div class="detail">
      <strong>Website:</strong> {{ user.website }}
    </div>
    <div class="detail">
      <strong>Company:</strong> {{ user.company.name }}
    </div>
    <div class="detail">
      <strong>Business:</strong> {{ user.company.bs }}
    </div>
    <div class="detail">
      <strong>Catchphrase:</strong> {{ user.company.catchPhrase }}
    </div>
    <div class="detail">
      <strong>Address:</strong> {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}, {{ user.address.zipcode }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getters } from '../store/store.js';
const router = useRouter();

const goBack = () => {
  router.go(-1);
}

const user = ref(getters.currentUser);
</script>

<style scoped>
.user-details {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.detail {
  margin-bottom: 10px;
}
</style>
