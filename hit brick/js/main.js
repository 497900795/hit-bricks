var __main = function(){
	window.fps = 30;
	var images = {		
		brick:'./img/brick.png',
		paddle:'./img/paddle.png',
		ball:'./img/ball.png',
	}

	var game = Game(fps,images,function(g){
		//异步回调
		var scene = Scene(game);
		g.runWithScene(scene);
	});
	return game;	
}