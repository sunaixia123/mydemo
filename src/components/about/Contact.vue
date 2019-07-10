<template>
<div class="card text-center ">
  <div class="card-header bg-warning">
    联系我们
  </div>
  <div class="card-body">
    <h5 class="card-title text-info">欢迎来到我的pizza小店.</h5>
    <p class="card-text">如果您有任何意见或建议，请联系我们.</p>
    <!-- 路由导航区 -->
       <nav>
         <router-link to="/ads" class="btn btn-primary">地址信息</router-link> 
         <router-link to="/pes" class="btn btn-primary">法人代表</router-link>   
         <router-link to="/tel" class="btn btn-primary">电话联系</router-link>  
       </nav>
       <!-- 路由展示区 -->
       <router-view></router-view>
  </div>
  <div class="card-footer text-muted bg-warning">
    15 days ago
  </div>
</div>
</template>

<script>
    export default {
       name:'Contact' 
    }
</script>

<style  scoped>

</style>