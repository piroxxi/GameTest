
/**
 * Generates lines that travel from right to left :)
 */
function createBackground(){
	var backgroundLayer = new Kinetic.Layer();
	function drawLine(){
		var red = Math.floor(Math.random()*140) + 100;
		var green = Math.floor(Math.random()*140) + 100;
		var blue = Math.floor(Math.random()*140) + 100;
		var line = new Kinetic.Line({
			points: [-(15 + Math.floor(Math.random()*20)), 0, (15 + Math.floor(Math.random()*20)), 0],
			stroke: 'rgba('+red+', '+green+', '+blue+', 0.6)',
			strokeWidth: 2,
			lineCap: 'round',
			lineJoin: 'round',
			x: width + 100,
			y: Math.floor((Math.random() * (height - 10)/2) )*2 + 10
		});
		tween = new Kinetic.Tween({
			node: line, 
			duration: 2 + Math.random() * 2,
			x: -100,
			onFinish: function() {
				line.remove();
			}
		});
		tween.play();
		backgroundLayer.add(line);
		setTimeout(drawLine, Math.floor((Math.random() * 100) + 20));
	}
	drawLine();
	return backgroundLayer;
}