//获取用户相关信息
const initInfo =() =>{
    $.ajax({
        url:'/my/userinfo',
        success(res){
            if(res.code !== 0) return layer.msg('请求用户信息失败')
            console.log(res);
        }
    })
}
 initInfo()