define([
    'jquery',
    'doT',
    'infoChannel',
    'text!tpl/choiceResults.tpl'
], function (
    $,
    doT,
    InfoChannel,
    choiceResultsTpl
) {
      var windowUrl=window.location.href;
      var tabPanelCurrent=windowUrl.split("#")[1];
      var presentation=$("[role=presentation]");
      var tabpanel=$("[role=tabpanel]");
       var dataJson=new Object();
       var  currentData=new Object();
    if(tabPanelCurrent==undefined){//判断显示模块
        tabPanelCurrent=$("[role=presentation]").first().attr("data-type")
    }
         showTab(tabPanelCurrent);
         presentation .on("click",function(e){//点击触发显示模块
         e.preventDefault();
             tabPanelCurrent=$(this).attr("data-type")
         showTab(tabPanelCurrent);
    });
    var choiceResultsTpl = doT.template(choiceResultsTpl);
    function showTab(tabPanelCurrent){
        presentation.removeClass("active");
        tabpanel.removeClass("active");
        $("[data-type="+tabPanelCurrent+"]").addClass("active");
        $("#"+tabPanelCurrent).addClass("active");
        var data={};
        if(tabPanelCurrent==="rimlessPic"){
            InfoChannel.getDataByAjax("data/data.json",data, metaContent);
        }
    }

    function metaContent(data){
        dataJson.tabPanelCurrent=data;
        currentData.price=parseFloat(dataJson.tabPanelCurrent.Canvas[0].Prices[0].Money)/100+parseFloat(dataJson.tabPanelCurrent.InnerLine[0].Prices[0].Money)/100;
        currentData.size=dataJson.tabPanelCurrent.Canvas[0].Prices[0].Width/10+"X"+dataJson.tabPanelCurrent.Canvas[0].Prices[0].Height/10
        $('#list-unstyled').html(choiceResultsTpl(currentData));
        console.log(currentData);
    }
});