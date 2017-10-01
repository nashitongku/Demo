/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-07-06 10:57:18
 * @version $Id$
 */

 function extendsShallow(parent,child){
 	child = child || {};

 	for(i in parent){
 		if(parent.hasOwnProperty(i)){
 			child[i] = parent[i];
 		}
 	}

 	return child;
 }

 function extendsDeep(parent,child){
 	var	i,
 		astr = '[object Array]',
 		toStr = Object.prototype.toString;
 	child = child || {};
 	for(i in parent){
 		if(parent.hasOwnProperty(i)){
 			if(typeof parent[i] === 'object'){
 				child[i] = toStr.call(parent[i]) === astr ? [] : {};
 				console.log(toStr.call(parent[i]) === astr)
 				extendsDeep(parent[i],child[i]);
 			}else{
 				child[i] = parent[i];
 			}

 		}
 	}
 	return child;
 }
var dad = {array1:[1,2,3,4],obj: {name:'n->n'}};
var kid = extendsDeep(dad);
