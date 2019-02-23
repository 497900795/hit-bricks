var Mouse = function(game,ball){
	var m = {
		game:game,
	}
	var drug = false;
	m.game.canvas.addEventListener('mousedown',function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		if(ball.hasPoint(x,y) && !ball.fired){
			drug = true;
		}
	})

	m.game.canvas.addEventListener('mousemove',function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		if(drug && !ball.fired){
			ball.x = x;
			ball.y = y;
		}
	})

	m.game.canvas.addEventListener('mouseup',function(event){
		var x = event.offsetX;
		var y = event.offsetY;
		if(ball.hasPoint(x,y) && !ball.fired){
			drug = false;
		}
	})
	return m;
}
