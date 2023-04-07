import Axios from "axios";

const state = {};

const mutations = {};

const getters = {};

const actions = {
  async registerUser(context, payload) {
    return new Promise((resolve, reject) => {
      Axios.post("http://localhost:3000/employee", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
