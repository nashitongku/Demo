/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-29 22:35:42
 * @version $Id$
 */

function Father(){

}


Father.prototype = {
	a: 'ia m a'
}

function Child(){

}

Child.prototype = new Father;
var c = new Child;
console.log(c.a)



var a = {valueOf:function(){console.log('iam a');return 100;}}


var b = {valueOf:function(){console.log('iam b');return 50;}}

a > b