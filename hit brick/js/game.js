var Game = function(fps,images,callback){
	//loads是一个对象，里边为图片的名字和路径
	//程序在所有图片载入成功后运行
	var g = {
		scene:null,
		actions:{},//操作数组 函数
		keydowns:{},//下压数组 bool
		images:{},//图片
	}
	
	var canvas = document.querySelector("#id-canvas");
	var context = canvas.getContext('2d');
	g.canvas = canvas;
	g.context = context;

	//load img by name
	g.imageByName = function(name){
		var img = g.images[name];
		var image = {
			w:img.width,
			h:img.height,
			image:img,
		}
		return image;
	}

	//events
	window.addEventListener('keydown',function(event){
		g.keydowns[event.key.toLowerCase()] = true;
	})
	window.addEventListener('keyup',function(event){
		g.keydowns[event.key.toLowerCase()] = false;
	})

	//register
	g.registerAction = function(key,callback){
		g.actions[key.toLowerCase()] = callback;
	}
	//drawImage
	g.drawImg = function(inputImage){
		g.context.drawImage(inputImage.image,inputImage.x,inputImage.y);
	}
	//timer to update
	g.runloop = function(){
		//events
		var actions = Object.keys(g.actions);
		for(var i = 0;i < actions.length;i++){
			var key = actions[i];
			if(g.keydowns[key.toLowerCase()]){
				g.actions[key.toLowerCase()]();
			}
		}
		
		//clear
		context.clearRect(0,0,canvas.width,canvas.height);
		//update
		g.update();
		//draw
		g.draw();
		fps = window.fps;
		setTimeout(function(){
			g.runloop();
		},1000/fps)
	}

	//载入图片
	var loads = [];//计数
	var names = Object.keys(images);
	for (var i = 0; i < names.length; i++) {
		//let 用于块状，作用域不会上升
		let name = names[i];
		var path = images[name];
		let img = new Image();
		img.src = path;
		img.onload = function(){
			//所有都载入成功之后，调用run
			g.images[name] = img;	
			loads.push(1);
			if(loads.length == names.length){
				g.run();
			}
		}
	}

	g.imageByName = function(name){
		var img = g.images[name];
		var image = {
			height:img.height,
			width:img.width,
			image :img,
		}
		return image;
	}


	g.update = function(){
		g.scene.update();
	}

	g.draw = function(){
		g.scene.draw();
	}

	g.runWithScene = function(scene){
		g.scene = scene;
		setTimeout(function(){
			g.runloop();
		},1000/fps)
	}

	//程序入口
	g.run = function(){
		callback(g);
	}

	g.replaceScene = function(scene){
		g.scene = scene;
	}

	return g;
}