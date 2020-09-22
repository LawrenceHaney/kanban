import { STATES } from 'mongoose'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import { api } from "./AxiosService"

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    tasks: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, board) {
      state.activeBoard = board
    },
    setLists(state, lists) {
      state.lists = lists
    },
    setTasks(state, tasks) {
      state.tasks = tasks
    },
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    async setActiveBoard({ commit, dispatch }, boardId) {
      try {
        let res = await api.get('boards/' + boardId)
        commit("setActiveBoard", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async editBoard({ commit, dispatch }, board) {
      try {
        let res = await api.put("boards/" + board.id, board)
        commit("setActiveBoard", board)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteBoard({ commit, dispatch }, boardId) {
      try {
        await api.delete("boards/" + boardId)
        commit("setActiveBoard", {})
        router.push({ name: "boards" })
      } catch (error) {
        console.error(error);
      }
    },
    //#endregion


    //#region -- LISTS --
    async getLists({ commit, dispatch }, boardId) {
      let res = await api.get('boards/' + boardId + '/lists')
      commit("setLists", res.data)
    },
    async addList({ commit, dispatch, state }, list) {
      list.boardId = state.activeBoard.id
      await api.post('lists/', list)
        .then(serverList => {
          dispatch('getLists', list.boardId)
        })
    },


    //#endregion

        //#region -- TASK --
        async getTasks({ commit, dispatch }, listId) {
          let res = await api.get('lists/' + listId + '/tasks')
          commit("setTasks", res.data)
        },
        async addTask({ commit, dispatch, state }, task) {
          await api.post('tasks/', task)
            .then(serverTask => {
              dispatch('getTasks', task.listId)
            })
        }
    
    
        //#endregion
  }
})
