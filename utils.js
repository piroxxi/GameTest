function dist( x1, y1, x2, y2 ){
	var xs = x2 - x1;
	xs = xs * xs;

	var ys = y2 - y1;
	ys = ys * ys;

	return Math.sqrt( xs + ys );
}
// WoW ! Much function ! Such Good Job !
// @see http://greweb.me/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
function easeInOutCubic(t) {
	return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
}
function addTriangle( x, y, size, color ){
	var ss = size/2;
	return new Kinetic.Shape({
		sceneFunc: function(context) {
		  context.beginPath();
		  context.moveTo(-ss, -ss);
		  context.lineTo(-ss, ss);
		  context.lineTo(ss, 0);
		  context.closePath();
		  // KineticJS specific context method
		  context.fillStrokeShape(this);
		},
		x: x,
		y: y,
		fill: color,
	});
	/* return new Kinetic.Line({
		points : [ x1, y1, x1, y2, x2, (y1 + y2) / 2 ],
		fill: color,
		closed: true
	}); */
}