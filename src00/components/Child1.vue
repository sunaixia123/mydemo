<template>
    <div class="child1">
       <h1>{{msg}}</h1>
       <p>这是一个没有子路由的页面</p>
    </div>
</template>

<script>
    export default {
      name:'Child1',
      data(){
        return{
          msg:'Child1页面'  
        }  
      }  
    }
</script>

<style scoped>

</style>