/**
 * 
 * @authors 黄吴丰
 * @date    2017-08-27 10:25:58
 * @version $Id$
 * 设计模式之中介者模式
 */

// 玩家
function Player(name){
	this.name = name;
	this.points = 0; //分数
}
Player.prototype.play = function () {
	this.points += 1;
	mediator.played();
}


//计分板
var scoreboard = {
	element: document.getElementById('result'),

	update: function (score) {
		var i, msg = '';
		for ( i in score) {
			if (score.hasOwnProperty(i)) {
				msg += '<p><strong>' + i + ':<\/strong>';
				msg += score[i].points;
				msg += '<\/p>'
			}
		}
		this.element.innerHTML = msg;
	}
}

//中介
var mediator = {
	players: {},
	setup: function () {
		var players = this.players;
		players.home = new Player('home');
		players.guest = new Player('guest');
	},
	played: function () {
		console.dir(this.players)
		scoreboard.update(this.players);
	},
	keypress: function (e) {
		e = e || window.event;
		console.dir(e)
		if (e.which === 49){
			mediator.players.home.play();
			return;
		}
		if (e.which === 48) {
			mediator.players.guest.play();
			return;
		}
	}
}

mediator.setup();
window.onkeypress = mediator.keypress;
var time = document.getElementById('time');
var _TIME_ = 30;
var handle = setInterval(function () {
	_TIME_ -= 1;
	time.innerHTML = _TIME_;
},1000);	 

setTimeout(function () {
	window.onkeypress = null;
	alert('gameover');
	clearInterval(handle);
},6000);