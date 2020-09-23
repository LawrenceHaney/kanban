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
    tasks: {},
    comments: {},
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
    setTasks(state, payload) {
      Vue.set(state.tasks, payload.listId, payload.tasks)
    },
    setComments(state, payload) {
      Vue.set(state.comments, payload.taskId, payload.comments)
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
    async deleteBoard({ commit, dispatch, state }, boardId) {
      try {
        await api.delete("boards/" + boardId)
        commit("setActiveBoard", {})
        commit("setBoards", state.boards.filter(b => b.id != boardId))
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
    async deleteList({ commit, dispatch, state }, listId) {
      try {
        await api.delete("lists/" + listId)
        commit("setLists", state.lists.filter(l => l.id != listId))
      } catch (error) {
        console.error(error);
      }
    },
    async editList({ commit, dispatch, state }, list) {
      try {
        let res = await api.put("lists/" + list.id, list)
        let newLists = state.lists
        let index = newLists.findIndex(l => l.id == list.id)
        newLists[index].title = list.title
        console.log(newLists)
        commit("setLists", newLists)
      } catch (error) {
        console.error(error);
      }
    },


    //#endregion

    //#region -- TASK --
    async getTasks({ commit, dispatch }, listId) {
      let res = await api.get('lists/' + listId + '/tasks')
      commit("setTasks", { tasks: res.data, listId })
    },
    async addTask({ commit, dispatch, state }, task) {
      await api.post('tasks/', task)
        .then(serverTask => {
          dispatch('getTasks', task.listId)
        })
    },
    async deleteTask({ commit, dispatch, state }, task) {
      try {
        await api.delete("tasks/" + task.id)
          .then(serverTask => {
            dispatch('getTasks', task.listId)
          })
      } catch (error) {
        console.error(error);
      }
    },
    async editTask({ commit, dispatch, state }, task) {
      try {
        let res = await api.put("tasks/" + task.id, task)
          .then(serverTask => {
            dispatch('getTasks', task.listId)
          })
      } catch (error) {
        console.error(error);
      }
    },
    async moveTask({ commit, dispatch, state }, task) {
      try {
        let listId = task.listId
        task.listId = task.newId
        let res = await api.put("tasks/" + task.id, task)
          .then(serverTask => {
            dispatch('getTasks', listId)
            dispatch('getTasks', task.listId)
          })
      } catch (error) {
        console.error(error);
      }
    },


    //#endregion
    //#region -- Comments --
    async getComments({ commit, dispatch }, taskId) {
      let res = await api.get('tasks/' + taskId + '/comments')
      commit("setComments", { comments: res.data, taskId })
    },
    async addComment({ commit, dispatch, state }, comment) {
      await api.post('comments/', comment)
        .then(serverComment => {
          dispatch('getComments', comment.taskId)
        })
    },
    async deleteComment({ commit, dispatch, state }, comment) {
      try {
        await api.delete("comments/" + comment.id)
          .then(serverComment => {
            dispatch('getComments', comment.taskId)
          })
      } catch (error) {
        console.error(error);
      }
    },
    async editComment({ commit, dispatch, state }, comment) {
      try {
        let res = await api.put("comments/" + comment.id, comment)
          .then(serverComment => {
            dispatch('getComments', comment.taskId)
          })
      } catch (error) {
        console.error(error);
      }
    },

    //#endregion
  }
})
