//图片预加载
(function () {
	function Preload(imgs, options) {
		this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
		this.opts = $.extend({}, Preload.DEFAULTS, options)
	
		switch(this.opts.type){
			case 1: {
				this._unoredered();
			}
			break;
			case 2: {
				this._ordered();
			}
			break;
		}

	}
	Preload.DEFAULTS = {
		each: null,//每一张图片加载完毕后执行的方法
		all: null,//所有图片加载完毕后执行的方法
		type: 1 //预加载的类型 1无序 2 有序
	}


	Preload.prototype._unoredered = function () {
		var imgs = this.imgs,
			opts = this.opts;
			var count = 0;
				console.log(this)
		$.each(imgs, function (i, src) {
			if (typeof src != 'string') return;

    		var imgObj = new Image();
    		$(imgObj).on('load error', function() {
    			if(count >= len -1) {
    /*				$('.loading').hide();
    				document.title = '1' +'/' + len*/
    				opts.all && opts.all()
    			}
    			/*$('.progress').html(Math.round((count + 1) / len * 100) + '%');*/
    			opts.each && opts.each(count);

    			count ++;
    		})
    		imgObj.src = src
    	})
	}

	Preload.prototype._ordered = function () {
		var len = this.imgs.length,
    		count = 0,index = 0;

    	function load() {
    		var imgObj = new Image();
    		$(imgObj).on('load error', function () {
    			if(len > count){
    				 load()
    				 count ++;
    			}
    		})
    		imgObj.src = imgs[count]
    	}
    	load()

	}



	$.extend({
		preload: function (imgs, opts) {
			new Preload(imgs,opts);
		}
	});

})(jQuery)