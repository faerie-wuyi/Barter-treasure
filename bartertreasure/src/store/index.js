import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
//state：进行组件共享数据的集中存储 {}

export default new Vuex.Store({
  state:{
    userName: window.sessionStorage.getItem('userName'),
    userID: window.sessionStorage.getItem('userID')

  },
  getters:{

  },
  mutations:{
    login(state,data){
      state.userID = data[0]
      state.userName = data[1]
      window.sessionStorage.setItem('userID', data[0])
      //console.log(data);
      window.sessionStorage.setItem('userName', data[1])
    },
    loginOut(state){
      state.userID = null
      state.userName = null
      window.sessionStorage.removeItem('userID')
      window.sessionStorage.removeItem('userName')
    }
  },
  actions:{

  },
  modules:{

  }
})



