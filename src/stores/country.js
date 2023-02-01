import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {
  state: () => {
    return {
      flag:"",
      name:"",
      capital:"",
      area:"",
      borders:[],
    };
  },
});
