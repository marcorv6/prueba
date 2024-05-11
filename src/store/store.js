import { reactive, readonly } from "vue"
import http from "../composables/http-common.js";

export const state = reactive({
  users: [],
  currentUser: null,
});

export const setState = (key, value) => {
  state[key] = value;
};

export const getters = readonly(state);

export const methods = {
  async fetchUsers() {
    try {
      const response = await http.get("/users");
      setState("users", response.data);
    } catch (error) { 
      console.error(error);
    }
  },
  async deleteUser(id) {
    // Si tuvieramos una API real aquí iría el código para eliminar un usuario dentro de un try/catch
    // http.delete(`/users/${id}`).then(() => {
    //   methods.fetchUsers();
    // });
    setState("users", state.users.filter((user) => user.id !== id));
  },
  async createUser(data) {
    // Si tuvieramos una API real aquí iría el código para crear un usuario dentro de un try/catch
    // http.post("/users", data).then(() => {
    //   methods.fetchUsers();
    // });
    setState("users", [...state.users, data]);
  },
};