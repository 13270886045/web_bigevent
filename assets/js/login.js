$(function(){
    //点击去注册账号的连接
    $('#link_reg').on('click',function(){
        $('.login-box').hide()
        $('.reg-box').show()
    })
})



$(function(){
    //点击去登录的连接
    $('#link_login').on('click',function(){
        $('.login-box').show()
        $('.reg-box').hide()
    })


//获取form对象
let form =layui.form
let layer=layui.layer
form.verify({
    //自定义匹配规则
    pass: [
        /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
      ] ,

      //检验两次密码是否一致
    repass: function (value){

        //通过形参获取确认密码输入的值
        //获取输入密码中的值
        //进行判断，如果不一致，则return一个错误提示
       let pwd= $('.reg-box [name=password]').val()
        if (pwd !==value){
            return '两次密码不一致！'
        }
    }

})


$('#form_Reg').on('submit',function(e){
    e.preventDefault()
    $.ajax({
        method:'POST',
        url:'http://big-event-api-t.itheima.net/api/reguser',
        data:{username: $('#form_Reg [name=username]').val(),
             password: $('#form_Reg [name=password]').val()
            },
        success(res){
            if (res.status !==0){
                return layer.msg(res.message)
            }
            $('#link_login').click()
            layer.msg('注册成功')
        }
    })
    // $.post('http://big-event-vue-api-t.itheima.net/api/reg'),
    // { username: $('#form_Reg [name=username]').val(),
    //   password: $('#form_Reg [name=password]').val(),
    //   repassword: $('#form_Reg [name=repassword]').val(),
    //     },
    // function(res){
    //     if(res.status !==0){
    //         return console.log('失败');
    //     }
    //     console.log('注册成功');
    // }
})

//注册表单添加提交事件
// $('#formReg').on('submit',function(e){
//     e.preventDefault()
//     $.ajax({
//         method:'POST',
//         url:'/api/reg',
//         // contentType:'application/json',
//         data: JSON.stringify({
//             username:$('#formReg[name=username]').val(),
//             password:$('#formReg[name=password]').val(),
//             repassword:$('#formReg[name=repassword]').val()
//         }),
        
//         success(res){
//             if(res.code!==0)   return layer.msg(res.message, {icon: 5}); 

//             $('#link_login').click()
//             layer.msg('注册成功', {icon: 5}); 
//         }
//     })
// })



    // $('#form_login').submit(function(e){
    //     e.preventDefault()
    //     $.ajax({
    //         method:'post',
    //         url:'/api/login',
    //         // contentType:'application/json',
    //         data: JSON.stringify({
    //             username:$('#form_login[name=username]').val(),
                
    //             password:$('#form_login[name=password]').val(),       
    //         }),
            
    //         success(res){
    //             if(res.code!==0)   return layer.msg(res.message, {icon: 5}); 
    //            localStorage.setItem('big_news_token',res.token) 
    //            location.href = '/index.html'
    //         }
    //     })
    // })



    $('#form_login').submit (function(e){
        e.preventDefault()
        $.ajax({
            url:'/api/login',
            method:'POST',
        //     data:{username: $('#form_login [name=username]').val(),
        //     password: $('#form_login [name=password]').val()
        //    },
        data:$(this).serialize(),
            success(res){
                if (res.status !==0){
                    return layer.msg(res.message)
                    
                }
                layer.msg('登录成功')
                //将登录成功的token值带到localstorage
                localStorage.setItem('token',res.token)
                // location.href='/index.html'
            }
    })

})


})


