var SceneEnd = function(game){
	var s = {
		game:game,
	}

	s.draw = function(){
		game.context.fillStyle = "#000000";
		game.context.fillText('game over',100,200)
	}

	s.update = function(){

	}

	return s;
}