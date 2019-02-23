var Paddle = function(game){
	var o = game.imageByName("paddle");
	/*var o={
		image:image,
		x:70,
		y:250,
		speed:6,
	}*/
	o.x = 70;
	o.y = 250;
	o.speed = 6;
	var paddle = o;
	o.judgeCrash = function(crashBall){
		if(crashBall.y + crashBall.image.height > o.y && crashBall.y < o.y){
			if(crashBall.x > o.x && crashBall.x < o.x+ o.image.width){
				crashBall.bounce = true;
				return true;	
			}			
		}
		else{
			return false;
		}
	}

	//move
	o.judgeBorder = function(){
		if(o.x < 0){
			o.x = 0;
		}
		else if(o.x +o.image.width > 400){
			o.x = 400 - o.image.width;
		}
	}
	o.moveLeft = function(){
		o.x -= o.speed;
		o.judgeBorder(); 
	}
	o.moveRight = function(){
		o.x += o.speed;
		o.judgeBorder();
	}
	return o;
}