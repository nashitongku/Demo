/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-29 12:17:29
 * @version $Id$
 */

 /*1、img1<br>\
<br>\
导演:xxx<br>\
编剧:xxx<br>\
<br>\
<br>\*/
var data = []
var dataStr = '1、img1<br><br>导演:黄吴丰<br>编剧:我是图片1<br><br><br>\
2、img2<br><br>导演:黄吴丰<br>编剧:我是图片2<br><br><br>\
3、img3<br><br>导演:黄吴丰<br>编剧:我是图片3<br><br><br>\
4、img4<br><br>导演:黄吴丰<br>编剧:我是图片4<br><br><br>\
5、img5<br><br>导演:黄吴丰<br>编剧:我是图片5<br><br><br>\
6、img6<br><br>导演:黄吴丰<br>编剧:我是图片6<br><br><br>\
7、img7<br><br>导演:黄吴丰<br>编剧:我是图片7<br><br><br>\
8、img8<br><br>导演:黄吴丰<br>编剧:我是图片8<br><br><br>\
9、img9<br><br>导演:黄吴丰<br>编剧:我是图片9<br><br><br>\
10、img10<br><br>导演:黄吴丰<br>编剧:我是图片10<br><br><br>\
11、img11<br><br>导演:黄吴丰<br>编剧:我是图片11<br><br><br>\
12、img12<br><br>导演:黄吴丰<br>编剧:我是图片12<br><br><br>\
13、img13<br><br>导演:黄吴丰<br>编剧:我是图片13<br><br><br>\
14、img14<br><br>导演:黄吴丰<br>编剧:我是图片14\
'
 var d = dataStr.split('<br><br><br>');

 for(var i = 0;i<d.length;i++){
 	var c = d[i].split('<br><br>');
 	data.push({
 		img:'image\\'+c[0].replace('、',' ')+'.jpg',
 		caption: c[0].split('、')[1],
 		desc: c[1]
 	});
 }
/*for(i=1;i < 15;i++){
    console.log(i+"、img"+i+"<br>\
<br>\
导演:黄吴丰<br>\
编剧:我是图片"+i+"<br>\
<br>\
<br>")}*/

