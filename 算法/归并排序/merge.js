
/**
 * lstart左边起始位置 
 * end数组末端 
 * 归并排序 基础函数
 */
 	var time = 0;
 	var $arr = [];
 	var $copyarr;
 	var divDom = [];//div 的dom

	var queue = [];
	var obj = {func:null,ag1:null}
function merge(arr,start,mid,end){
	var func = [mergeDom,[copyarr,start,mid,end,divDom]]
 	queue.push(func)
 	var arrDom = divDom
	//复制一个数组
	var arrcopy = [];

	var i = start, j = mid + 1;
	var arrcopyDom = []
	for (var k = start; k <= end; k ++) {
		arrcopyDom[k] = arrDom[k]
	}
	for (var k = start; k <= end; k ++) {
		arrcopy[k] = arr[k]
	}

	for (var k = start; k <= end; k ++) {
		if (i > mid) {
				arr[k] = arrcopy[j]
							queue.push([changeDOM_Poistion,[arrDom[k],arrcopyDom[j]]])
							j++
		}
		else if (j > end) {
				arr[k] = arrcopy[i]
				queue.push([changeDOM_Poistion,[arrDom[k],arrcopyDom[i]]])
				i++
		}
		else if (arrcopy[i] > arrcopy[j]) 
			{
				arr[k] = arrcopy[j]
				queue.push([changeDOM_Poistion,[arrDom[k],arrcopyDom[j]]])
				j++
		}
		else {
				arr[k] = arrcopy[i]
				queue.push([changeDOM_Poistion,[arrDom[k],arrcopyDom[i]]])
				i++
		}
	}
}

/*
 * 分治法实现归并排序 
 */
 function sort(arr) {
 	merge_sort(arr,0,arr.length-1);
 }
 function merge_sort(arr,start,end) {
 	if (start >= end) return
 	var mid = start + Math.floor((end-start)/2)
 	merge_sort(arr,start,mid);
 	merge_sort(arr,mid+1,end);
 	merge(arr,start,mid,end)
 }







function mergeDom(){
	var arr = arguments[0][0];
	var start = arguments[0][1];
	var mid = arguments[0][2];
	var end = arguments[0][3];
	var arrDom = arguments[0][4];

	//复制一个数组
	var arrcopy = [];
	var arrcopyDom = []
	var i = start, j = mid + 1;

	for (var k = start; k <= end; k ++) {
		arrcopy[k] = arr[k]
	}
	for (var k = start; k <= end; k ++) {
		arrcopyDom[k] = arrDom[k]
	}
	for (var k = start; k <= end; k ++) {
		time ++;
		var tempDom = arrDom[k];

		if (i > mid) {
			arr[k] = arrcopy[j];

		}
		else if (j > end) {
			arr[k] = arrcopy[i]; 

		}
		else if (arrcopy[i] > arrcopy[j]) {
			arr[k] = arrcopy[j]; 

		}
		else {
			arr[k] = arrcopy[i]; 

		}
		
	}
}

/*
 * 分治法实现归并排序 
 */
 function sortDom(arr,arrDom) {
 	merge_sortDom(arr,0,arr.length-1,arrDom);
 }
 function merge_sortDom(arr,start,end,arrDom) {
 	if (start >= end) return
 		var mid = start + Math.floor((end-start)/2)
	 	merge_sortDom(arr,start,mid,arrDom);
	 	merge_sortDom(arr,mid+1,end,arrDom);
	 	mergeDom(arr,start,mid,end,arrDom)
 }


 function init_num(num=10){
	 for (var i = 0; i < num; i++) {
	 	$arr.push(Math.floor(Math.random() * 100));
	 }
	 return $arr;
}

var $ = function (selector) {
	var func = selector[0] == '.' ? 'getElementsByClassName' : selector[0] == '#' ? 'getElementById' : 'getElementsByTagName';
	return document[func](selector.split(selector[0])[1]);
}

function createElement(tag){
	var element = document.createElement(tag);
	return element;
}

function init_dom_class(arrDom) {
	arrDom[0].style.left = 50+'px';
	for(var i = 1 ; i < arr.length; i ++) {
		arrDom[i-1].setAttribute('class','d'+arr[i]);
		var left = parseInt(arrDom[i-1].style.left);
		arrDom[i].style.left = left + 75 +'px'
	}
	arrDom[arr.length-1].setAttribute('class','');
}



function log(msg){
	console.dir(msg);
}
function clone(array){
	var copyarray = [];
	for(var i = 0 ; i < array.length; i++) {
		copyarray.push(array[i]);
	}
	return copyarray;
}

function step2(){
	var alength = []
	var time = 10;
	for(var i = 0; i < queue.length; i++){
		alength.push(i)
		setTimeout(function () {
			var func = queue[alength.shift()];
			log(func)
			func[0]([func[1],func[2],func[3],func[4],func[5]]);
		},time*i)
	}
}
/**交换两个dom的位置
 */
function changeDOM_Poistion(){
	var arr = arguments[0][0];

	var d1 = arr[0];
	var d2 = arr[1];
	d1.setAttribute('class','shune d'+d1.innerHTML);
	d2.setAttribute('class','shune d'+d1.innerHTML);
	var t = d1.style.left;
	d1.style.left = d2.style.left;
	d2.style.left = t;
}
