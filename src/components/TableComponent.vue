<template>
  <button class="action-button" @click="createUser">Create user</button>
  <div class="table-container">
    <table class="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Detail</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody v-if="users.length > 0">
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="action-button" @click="viewDetails(user)">View Details</button>
          </td>
          <td colspan="3">
            <button class="delete-button" @click="deleteUser(user.id)">Delete</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5" class="no-data">No data available</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script setup>
import { ref, onMounted} from 'vue';
import { getters, methods, setState } from '../store/store.js';
import { useRouter } from 'vue-router';

const router = useRouter();

// Sample users data
const users = ref([]);


const createUser = () => {
  router.push('/CreateUser');
}

// Method to delete the last user
const deleteUser = (id) => {
  methods.deleteUser(id);
  users.value = getters.users;
  alert('User deleted successfully');
}

// Method to view user details
const viewDetails = (user) => {
  setState('currentUser', user );
  router.push('/DetailedView');
}

// Fetch users data on component mount
onMounted(async () => {
  await methods.fetchUsers();
  users.value = getters.users;
});
</script>

<style scoped>
.table-container {
  width: 80%;
  margin: 20px auto;
}
.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th, .user-table td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

.user-table th {
  background-color: #f2f2f2;
}

.no-data {
  text-align: center;
  font-style: italic;
  color: #999999;
}
</style>