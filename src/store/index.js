import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos;
    }
  },
  actions: {
    async getTodos({ commit }) {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=5`
      );
      console.log(res);
      commit("setTodos", res.data);
    }
  },
  getters: {
    allTodos: state => state.todos
  }
});
