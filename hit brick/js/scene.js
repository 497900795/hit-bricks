var Scene = function(game,callback){

	var paddle = Paddle(game);
	var ball = Ball(game);
	var score = 0;
	var s = {
		game:game,
		paddle:paddle,
		ball:ball,
		score,
	}

	var mouse = Mouse(s.game,s.ball);

	//init bricks accdording to level
	var bricks = [];
	window.addEventListener('keydown',function(event){
		var k = event.key;
		var levelNum = "1234567";
		if(levelNum.includes(k)){
			bricks = loadLevel(game,Number(k));
		}
	})


	game.registerAction('a',function(){
		paddle.moveLeft();
	})

	game.registerAction('d',function(){
		paddle.moveRight();
	})

	game.registerAction('f',function(){
		ball.fire();
	})

	s.draw = function(){
		//background
		game.context.fillStyle = "#66ccff";
		game.context.fillRect(0,0,400,300);
		//paddle and ball
		game.drawImg(s.paddle);
		game.drawImg(s.ball);
		for(var i = 0;i < bricks.length;i++){
			var brick = bricks[i];
			//draw bricks
			if(brick.alive){
				brick.destory(ball);
				if(ball.bounce){
					s.ball.doBounce();
					//update score
					s.score+=100;
				}
				game.drawImg(brick);
			}
		}//end_for
		game.context.fillText('score:' + score,10,290);
	}

	//update or end
	s.update = function(){
		s.ball.move();
		// judge game over
		if(s.ball.y > s.paddle.y){
			//goto over scene
			var end = SceneEnd(game);
			game.replaceScene(end);
		}
		s.paddle.judgeCrash(ball);
		//judge crash
		if(s.ball.bounce){
			s.ball.doBounce();
		}
	}

	return s;
}