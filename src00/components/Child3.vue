<template>
    <div class="child3">
       <h1>{{msg}}</h1>
       <!-- 路由导航区 -->
       <nav>
         <router-link to="/child3/grand4">二级菜单1</router-link> 
         <router-link to="/child3/grand5">二级菜单2</router-link> 
       </nav>
       <!-- 路由展示区 -->
       <router-view></router-view>
    </div>
</template>

<script>
    export default {
      name:'Child3',
      data(){
        return{
          msg:'Child3页面'  
        }  
      }  
    }
</script>

<style scoped>

</style>