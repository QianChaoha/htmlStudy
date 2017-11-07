/**
 * Created by Administrator on 2017/11/7.
 */
//找到所有class为coll-content的标签
var collContent=$('.coll-content');
var coll=$('.coll');
for (var i=0;i<collContent.length;i++){
    collContent[i].onclick=function () {
        // console.log(collContent[i].attr('data-collapsed'));
        console.log(coll[i].attributes['data-collapsed'].value);
    }
}