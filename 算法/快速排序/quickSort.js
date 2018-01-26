
var testData = [3,2,5,7,4,6,32,2];
function quickSort2(data,setData,start=0,end=data.length-1){
	data = clone(data)
	var firstData = data[start],
		mid = Math.floor((start + end) / 2),
		i=start,
		j = end,
		biggerData = data[++i],
		smallerData = data[j];
		for(;i < j;){
			biggerData = data[i];
			smallerData = data[j];
			if(smallerData < firstData){
				if(biggerData > firstData){
					data[i] = smallerData;
					data[j] = biggerData;
					setData(clone(data), i ,j)
				}else{
					i ++;
				}
			}else{
				j --;
			}
		}
		
		if(data[start] > data[j]){
			var temp = data[start];
			data[start] = data[j];
			data[j] = temp;
			setData(clone(data), start ,j)
		}
			
		if(start >= end-1){
			return;
		}
		console.log(start,end,j)
		quickSort(data,setData,start,j-1);
		quickSort(data,setData,j+1,end);
		
		return data;
}

function clone(e){
	var array = []
	for(var i = 0; i < e.length; i ++){
		array.push(e[i])
	}
	return array;
}




/**
 * 快速排序
 * @authors Your Name (you@example.org)
 * @date    2017-06-19 09:51:08
 * @version $Id$
 */
function quickSort(nums,setData,left=0,right=nums.length-1){
	console.log(left,right)
	if(left > right){
		return;
	}
	 temp = nums[left];
	 i = left;
	 j = right;

	while(i != j){
		while(nums[j] >= temp && i < j){j--}
		while(nums[i] <= temp && i < j){i++}
		if(i < j){
			var t = nums[j];
			nums[j] = nums[i];
			nums[i] = t;
			setData(clone(nums), i ,j)
		}
	}
	nums[left] = nums[i];
	nums[i] = temp;
	setData(clone(nums), left ,i)
	quickSort(nums,setData,left,i-1);
	quickSort(nums,setData,i+1,right);
	return nums;
}    
