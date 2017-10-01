(function (){
	function Banner(imgs,opts){
		this.imgs = imgs;
		this.opts = $.extend({},Banner.DEFAULT,opts);
		this.run();
	}
	Banner.DEFAULT = {
		time: 300,		  //一张图片切换的总时间
		residence: 1000 //一张图片切换之后停留的时间
	}
	Banner.prototype.run = function(){
		var img_first_left = 0;
		var img_second_left = 100;
		var x = 1//每滑动 1px 所需要的毫秒数;
		var freq = 100/x; //一张图片轮播需要运行多少次
		var interval = this.opts.time / freq;
		var next = (function(){
			console.log(x)
			img_first_left-=x;
			img_second_left-=x;
			this.imgs[0].style.left = img_first_left+"%";
			this.imgs[1].style.left = img_second_left+"%";
			if(img_second_left == 0){
				change();//改变图片位置
				clearInterval(point);
				setTimeout((function(){this.run()}).bind(this),this.opts.residence);
			}
		}).bind(this) //纠正this指向
		var point = setInterval(next,interval);

		change = (function(){
			temp = this.imgs[0];
			this.imgs[0] = this.imgs[1];
			this.imgs[1] = this.imgs[2];
			this.imgs[2] = temp;
		}).bind(this)
	}

	// 暴露接口banner
	$.extend({
		banner: function(imgs,opts){
			new Banner(imgs,opts);
		}
	})

})()

