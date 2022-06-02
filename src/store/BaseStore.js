import { defineStore } from "pinia";

const useBaseStore = defineStore("BaseStore", {
  state: () => ({
    showSideMenu: false,
  }),
  getters: {},
  actions: {
    setSideMenu(value) {
      this.showSideMenu = value;
    },
  },
});

export default useBaseStore;
