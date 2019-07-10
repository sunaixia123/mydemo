<template>
    <div class="container text-center mt-5">
       <img width="100" src="../assets/logo.png" alt="">
       <h3 class="text-primary">注册</h3>
       <form>
       <div class="form-group">
           <!-- <label for="input1">账号</label> -->
           <input type="username" class="form-control" id="input1" v-model="username" placeholder="请输入您的账号或邮箱">
        </div>
        <div class="form-group">
           <!-- <label for="input2">密码</label> -->
           <input type="password" class="form-control" id="input2" v-model="password" placeholder="请输入您的密码">
        </div>
        <div class="form-group">
           <!-- <label for="input3">请确认密码</label> -->
           <input type="password" class="form-control" id="input3" v-model="repassword" placeholder="请确认您的密码">
        </div>
        <button type="submit" class="btn btn-primary btn-block" @click.prevent="onSubmit">立即注册</button>
        </form>
    </div>
</template>

<script>
// 借助axios来请求数据
import axios from 'axios'
    export default {
      name:'Register',
      data(){
        return{
          username:'',
          password:'',
          repassword:'' 
        } 
      },
      methods:{
        onSubmit(){
                            // 非空验证
                    if(this.username==''){
                      alert('当前账号不能为空')
                    }else if(this.password==''){
                      alert('当前密码不能为空')
                    }else if(this.repassword==''){
                      alert('当前重复密码不能为空')
                    }else if(this.password!==this.repassword){
                      alert('两次输入不一致') 
                    }else{
                      //访问一次数据库，判断当前注册的用户名是否重复 
                      axios.get('./jsx-user.json')
                        .then(res=>{
                          // console.log(res.data)
                          // 注意：如果没有数据，res.data为null
                          console.log(typeof res.data)  
                          // 因为res.data为对象object形式，所以先转化为数组array
                          const result = []
                          for(let key in res.data){
                            result.push(res.data[key])  
                          } 
                          // console.log(result)
                          const trueUser = result.filter((item)=>{
                            return item.username===this.username 
                          })
                          if(trueUser.length>0){
                            alert('当前用户名已存在') 
                          }else{
                            // 发送的数据为对象形式
                            const formData={
                              username:this.username,
                              password:this.password 
                            }
                            axios.post('./jsx-user.json',formData)
                            .then(res=>{
                              alert('当前数据注册成功') 
                              console.log(res.data)
                              //自动跳转到登录页面
                              this.$router.push('/login')
                            })  
                          }
                        })

                      



                    } 
                 } 
             }
  }
</script>

<style scoped>
  .form-control{width:50%;display: inline;}
  .btn-block{width: 50%;display:inline-block;}
</style>