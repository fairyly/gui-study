/**
 * Created with Cocos2d-x3.0 jsb.
 * company: 郑州优德
 * author:caokui
 * date: 16-01-10 上午9:28
 * summary:数据通道
 */
define([
    'jquery'
],function (
    jQuery
) {
    function InfoChannel(){};//构造器
    /*
     * @url:请求地址
     * @modelParam:参数
     * @callback：回调
     * @flag：true 异步(默认)
     * */
    InfoChannel.prototype.getDataByAjax=function(url,modelParam,callbackData,flag){//初始化数据
        jQuery.ajax({
            type: "post",
            async: flag,
            url: url,
            data:modelParam,
            cache:false,
            dataType: "json",
            success:function(data){
                callbackData?callbackData(data):callbackData;
            },
            error: function (data) {
                callbackData?callbackData(data):callbackData;
            }
        });
    };

    return new InfoChannel();
})


