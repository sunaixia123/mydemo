<template>
    <div class="row"> 
      <div class="card mr-2" style="width: 15rem;" v-for="(product,index) in products" :key="index">
        <img class="card-img-top" :src="'../../../static/imgs/'+product.src" alt="Card image cap">
        <div class="card-body text-center" >
            <h5 class="card-title">{{product.text}}*{{product.num}}</h5>
            <p class="card-text text-success">已完成支付</p>
            <span class="btn btn-primary" @click="toDetails">查看详情</span>
        </div>
        </div> 
    </div>
</template>

<script>
    export default {
       name:'History',
       data(){
         return{
           products:[
               {src:'1.jpg',text:'榴莲多多披萨',num:'3'},
               {src:'2.jpg',text:'北京潮鸭披萨',num:'1'},
               {src:'3.jpg',text:'海鲜至尊披萨',num:'5'}
              //  {src:'../../../static/imgs/1.jpg',text:'榴莲多多披萨',num:'3'},
              //  {src:'../../../static/imgs/2.jpg',text:'北京潮鸭披萨',num:'1'},
              //  {src:'../../../static/imgs/3.jpg',text:'海鲜至尊披萨',num:'5'}
           ]  
         }  
       },
       methods:{
         toDetails(){
           this.$router.push('/details')  
         }  
       } 
    }
</script>

<style  scoped>

</style>