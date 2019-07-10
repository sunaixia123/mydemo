<template>
    <div class="container">
      <div class="row">
      <div class="col-4">
         <!-- 路由导航区 -->
        <nav>
         <router-link to="/activity" class="list-group-item list-group-item-success mt-3 text-center">热门活动</router-link>
         <router-link to="/contact" class="list-group-item list-group-item-danger mt-3 text-center">联系我们</router-link>     
         <router-link to="/history" class="list-group-item list-group-item-warning mt-3 text-center">历史订单</router-link>  
         <router-link to="/delivery" class="list-group-item list-group-item-info mt-3 text-center">快递信息</router-link>  
       </nav>
      </div>
      <div class="col-8">
        <!-- 路由展示区 -->
       <router-view></router-view>
      </div>
      </div>
       
       
    </div>
</template>

<script>
    export default {
      name:'About'  
    }
</script>

<style scoped>

</style>