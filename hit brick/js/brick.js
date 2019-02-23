var Brick = function(pos,game){
	//pos [x,y,lives]
	//var image = imageFromPath("./img/brick.png");
	var o = game.imageByName('brick');
	o.x = pos[0];
	o.y = pos[1];
	o.width = 37;
	o.height = 39;
	o.split = 1;
	o.alive = true;
	o.lives = pos[2]?pos[2]:1;//有则读[p2]，否则默认1
	
	o.judgeCrash = function(crashBall){
		if(crashBall.y  < o.y + o.image.height && crashBall.y >o.y){
			if(crashBall.x > o.x && crashBall.x < o.x+ o.image.width){
				crashBall.bounce = true;
				return true;				
			}			
		}
		else{
			return false;
		}
	}

	o.destory = function(crashBall){
		if(o.judgeCrash(crashBall)){
			o.lives--;
			if(o.lives < 1){
				o.alive = false;
			}
		}
	}
	return o;
}