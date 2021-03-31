import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersist from "vuex-persist"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    text: [],
    pass: [],
    iSshow: false,
    list: [],
    lists: [],
    listdata: [],
  },
  mutations: {
    pas(state, pass) {
      state.pass = pass;
    },
    tet(state, text) {
      state.text = text;
    },
    iSshow(state, trues) {
      state.iSshow = trues;
    },
    list(state, res) {
      state.list = res.data;
      state.lists = res.data;
    },
    tool(state, tool) {
      state.list = state.lists.filter((res) => {
        if (res.name.includes(tool)) {
          return res;
        }
      });
    },
    app(state, em) {
      var i = 0;
      state.listdata.forEach((item, index) => {
        if (item.name == em.name) {
          i++;
        }
      });
      if (i > 0) {
        alert("已在书架");
      } else {
        alert("成功加入书架");
        let obj = {
          name:em.name,
          id:1,
        }
        state.listdata.push(obj);
      }
    },
    oncl(state,index){
      state.listdata[index].id = 2;
    },
    onCt(state,index){
      state.listdata[index].id = 1;
    },
    remove(state,index){
      state.listdata.splice(index,1);
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    new vuexPersist({
      storage: window.localStorage,
    }).plugin,
  ],
})
