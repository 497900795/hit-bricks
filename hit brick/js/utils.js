var log = console.log.bind(console); 
/*var element = sel => document.querySelector(sel);
var outInf = function(speed){
	element('#id-text-log').value += '\n' + speed;
}*/

var imageFromPath = function(path){
	var img = new Image();
	img.src = path;
	return img;
}

var loadLevel = function(game,n){
	var bricks = [];
	n = n-1;
	var level = levels[n];//to save information of a row
	for(var i = 0;i < level.length;i++){
		var pos = level[i];
		var b = Brick(pos,game);
		bricks.push(b);
	}
	return bricks;
}

//control games peed
document.querySelector('#id-speed');
addEventListener('input',function(event,game){
	var input = event.target;
	window.fps = Number(input.value);
})

var reStart = function(game){
	game.scene = Scene(game);
}