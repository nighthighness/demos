<template>
  <div class="vxdemo">
    <h1>This is an vxdemo page</h1>
    <div>
      <span>$store.getters</span><br> 
      <span>{{$store.getters._getUser}}</span>

      <h4>  mapGetters</h4>
      <span>{{_getUser[0].uname}} -- {{_getUser[0].upwd}}</span>
    </div>
  </div>
</template>

<script>
import store from './../store'
import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      
    }
  },
  computed:{  // 通过computed 属性 获取 , 得到返回
    ...mapGetters(['_getUser']),
    
  }
}
</script>
