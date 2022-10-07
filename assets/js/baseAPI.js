$.ajaxPrefilter(function(config){
   
        // 将key=value形式的数据，转成json格式的字符串
        const format2Json = (source) => {
          let target = {}
          source.split('&').forEach((el) => {
            let kv = el.split('=')
            target[kv[0]] = kv[1]
          })
          return JSON.stringify(target)
        }

        // 统一设置基准地址
  config.url = 'http://big-event-vue-api-t.itheima.net' + config.url

  // 统一设置请求头 Content-Type 值
  config.contentType = 'application/json'

  // 统一设置请求的参数 - post 请求
  config.data = format2Json(config.data)

  //统一设置请求头（有条件添加）
  //请求路径中有/my这样字符串的需要添加
  //indexOf startsWith endWith includes 包含，包括的意思

  if(config.url.includes('/my')){
    config.headers={
        Authorization: localStorage.setItem('big_news_token') || ''
    }
  }
   
})

