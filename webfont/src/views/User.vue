<template>
  <div>
    <h4>this is userPage</h4>
    uname:<input type="text" v-model="userInfo.uname"><br>
    upwd:<input type="password" v-model="userInfo.upwd" @keyup.13="setUser"><br>
    <button @click="setUser" >click me</button>
  </div>
</template>

<script>
// 使用xz 后台，使用 封装的 axios 实例
import { axiosPost, axiosGet } from '../utils/request'
import { mapMutations } from 'vuex' // 引入辅助函数
export default {
  data(){
    return {
      userInfo:{
        uname:'',
        upwd:''
      }
    }
  },
  methods:{
    // 解构 语法糖 可使用 store user.js 中的 _setUser 函数
    ...mapMutations(['_setUser']),
    setUser(){
      axiosPost({
        url:'/user/login',
        data:this.userInfo
      }).then(res=>{
        if(res.data.code == 200){
          // this.$store.commit('_setUser',res.data.msg) // 通过commit 方法 提交 给 vuex 
          this._setUser(res.data.msg) // mapMutations 映射 保存用户信息
          this.$router.push({path:'/vxdemo'})
        }else{
          alert('用户名或密码错误')
        }
      })
    }
  }
}
</script>