/**
 * Created by Administrator on 2017/11/7.
 */
// 百度地图API功能
var map = new BMap.Map("allmap");
var point = new BMap.Point(121.5100, 31.2870);
map.centerAndZoom(point, 18);
map.addEventListener("tilesloaded", function () {
    //地图加载完毕
    $.ajax({
        type:"POST",
        url:"http://main.telecomsh.cn/ywglapp/house/GetHouseHeadPageInfo.json",/*url写异域的请求地址*/
        dataType:"jsonp",/*加上datatype*/
        data:{
            topLeftY: "31.264933",
            scale: "100",
            topLeftX: "121.497985",
            botRightX: "121.504695",
            botRightY: "31.256884",
            accessToken: "08B42909CE752311E33E0FB7EDC2FB1116C5585166C0A7829FD87B7BA936ED4D"
        },
        // jsonpCallback:"cb",/*设置一个回调函数，名字随便取，和下面的函数里的名字相同就行*/
        crossDomain: true
        // success:function(data){
        //     console.log(1)
        //     //alert("数据: \n" + data + "\n状态: " + status);
        // },
        // error:function(xhr,status,error){
        //     alert("数据: \n" + error + "\n状态: " + status);
        // }
    }).done(function() {
        // 请求完成时的处理函数
        alert(1);
    });;

});