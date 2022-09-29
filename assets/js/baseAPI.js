$.ajaxPrefilter(function(config){
    config.url='http://big-event-vue-api-t.itheima.net' + config.url
    config.contentType = 'application/json'
})