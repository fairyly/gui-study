window.clientPath="http://"+window.location.hostname;
require.config({
    baseUrl: window.clientPath+'/order/js/',
    paths: {
        jquery:'lib/jquery.min',
        doT:'lib/doT.min',
        text: 'lib/text',
        infoChannel:'lib/infoChannel'
    },
    shim: {
        "jquery":{
            exports: "jquery"
        },
        "text":{
            exports: "text"
        },
        "doT":{
            exports: "doT"
        }
    }
});
