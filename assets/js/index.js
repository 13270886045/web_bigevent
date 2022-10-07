
let layer=layui.layer
$(function(){
   
    getUserInfo()
})
const getUserInfo=()=>{
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        headers:{
            Authorization: localStorage.getItem('big_news_token') || ''
        },
        success(res){
            // if(res.code!==0) return layer.msg(res.message)
            // renderAvatar(res)
            console.log(res);
        }
    })
}

// const renderAvatar=(res)=>{
//     if(res.user_pic) {
//         $('.text-avatar').hide()
//         $('.layui-nav-img').attr('src',res.user_pic).show
//     }else{
//         $('.layui-nav-img').hide()
//         const name=res.data.nickname || res.data.username
//         const char = name[0]
//         $('.text-avatar').html(char)
//     }
//     $('.text').html(`欢迎&nbsp;&nbsp;${res.data.username}`)
// }