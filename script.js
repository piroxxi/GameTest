var width = $("#container").width();
var height = $("#container").height();
var mouvementSpeed = 12;
var triangleSize = 30;

var stage = new Kinetic.Stage({
	container: 'container',
	width: width,
	height: height
});
var playerLayer = new Kinetic.Layer();

var player = {
	sprite : addTriangle( 40, height/2, triangleSize, 'rgba(255,255,255,0.8)' ),
	layer : playerLayer,
	fireBullet : function(){
		var bullet = addTriangle( this.sprite.x() + triangleSize/2 + 5, this.sprite.y(), triangleSize/4, 'rgba(255,255,100,0.8)' );
		tween = new Kinetic.Tween({
			node: bullet, 
			duration: 3,
			x: (this.sprite.x() + width),
			onFinish: function() {
				bullet.remove();
			}
		});
		playerLayer.add( bullet );
		tween.play();
	},
	moveLeft : function(){
		if( (this.sprite.x() - mouvementSpeed - triangleSize/2 ) >= 0 )
			this.sprite.setX(this.sprite.x() - mouvementSpeed);
		else
			this.sprite.setX( triangleSize/2 );
	},
	moveUp : function(){
		if( (this.sprite.y() - mouvementSpeed - triangleSize/2) >= 0 )
			this.sprite.setY(this.sprite.y() - mouvementSpeed);
		else
			this.sprite.setY( triangleSize/2 );
	},
	moveRight : function(){
		if( (this.sprite.x() + mouvementSpeed + triangleSize/2) <= width )
			this.sprite.setX(this.sprite.x() + mouvementSpeed);
	},
	moveDown : function(){
		if( (this.sprite.y() + mouvementSpeed + triangleSize/2) <= height )
			this.sprite.setY(this.sprite.y() + mouvementSpeed);
	}
}
playerLayer.add( player.sprite );
stage.add(playerLayer);

// start action
$(document).keydown(function(e) {
    switch(e.which) {
        case 32: player.fireBullet(); return;
        case 37: player.moveLeft(); break;
        case 38: player.moveUp(); break;
        case 39: player.moveRight(); break;
        case 40: player.moveDown(); break;
        default: console.log( e.which ); // FIXME
		return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

// stop action
$(document).keyup(function(e) {
	
});


var background = createBackground();
stage.add(background);

setInterval(function(){
	background.draw();
	playerLayer.draw();
}, 24);
