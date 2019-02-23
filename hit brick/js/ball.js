var Ball= function(game){
	var o = game.imageByName("ball");
	o.x = 140;
	o.y = 235;
	o.speedX = -6.5;
	o.speedY = -6.5;
	o.fired = false;
	o.bounce = false;

	o.move = function(){
		if(o.fired){
			if(o.x < 0|| o.x > 400 - o.image.width){
				o.speedX *= -1;
			}

			if(o.y < 0|| o.y > 300 - o.image.height){
				o.speedY *= -1;
			}

			o.x += o.speedX;
			o.y += o.speedY;
		}
	}
	o.fire = function(){
		if(!o.fired){
			o.fired = true;
		}
		else{
			o.fired = false;
		}
	}
	o.doBounce = function(){
		o.bounce = false;
		o.speedX *= -1;
		o.speedY *= -1;
	}

	o.hasPoint = function(x,y){
		var xIN = x >= o.x && x <= o.x + o.image.width;
		var yIN = y >= o.y && y <= o.y + o.image.height;
		return xIN && yIN;
	}
	return o;
}