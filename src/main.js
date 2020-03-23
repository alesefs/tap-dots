TapDots.Main = function(game) {};
TapDots.Main.prototype = {

/*nBack.game = new Phaser.Game(600, 800, Phaser.AUTO, '');

var gameWorld = [];
var randomTile = 0;
var timer = 0;
var randomColor = 0;
var frame = "";
var color = "";
var delay = 0;
var gameFrame = 0;
var nBack_frames = 0;
var nBack_colors = 0;
var gameState = { color: "", position: 0 };
var Score = 0;
var scoreString = 'Your Score is ';
var rightOrWrong = "";
var scoreText;
var messageText;
var nbackText;
var nback_text = 'number of frames back is ';*/

        
this.gameRatio = window.innerWidth/window.innerHeight;
this.game = new Phaser.Game(Math.ceil(680*this.gameRatio), 680, Phaser.CANVAS, 'game');
this.game.state.add('Boot', TapDots.Boot);
this.game.state.add('Preloader', TapDots.Preloader);
this.game.state.add('PlayState', TapDots.PlayState);

this.game.state.start('Boot');
};