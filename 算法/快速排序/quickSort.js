/**
 * 快速排序
 * @authors Your Name (you@example.org)
 * @date    2017-06-19 09:51:08
 * @version $Id$
 */
//[6,10,7,8,9]
var arr = [6,8,10,11,5,3,7]
console.log(arr)
quickSort(arr,0,arr.length-1);
console.log(arr);
function quickSort(nums,left,right){
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
				console.log(i+" i  :   j:"+j)
		}
	}
	nums[left] = nums[i];
	nums[i] = temp;

	quickSort(nums,left,i-1);
	quickSort(nums,i+1,right);
}    
