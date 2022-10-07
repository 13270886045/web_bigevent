$(function(){
    const layer =layui.layer
    loadcatelist()
    function loadcatelist(){
        $.ajax({
            method:'get',
            url:'http://big-event-api-t.itheima.net/my/article/cates',
            success(res){
                if (res.code !==0) return layer.msg('获取分类失败')
                const html = template('tpl-cate',res)
                $('tbody').append(html)
                console.log('成功');
            }
        })
    }

    $('btnadd').on('click',function(){
        layer.open({
            type:1,
            title:'添加分类',
            area: ['500px','260px'],
            content:$('#addDialog').html()    
        })
    })
})