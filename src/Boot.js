var TapDots = { 
	_WIDTH: window.outerWidth,
    _HEIGHT: window.outerHeight
};
TapDots.Boot = function(game) {};
TapDots.Boot.prototype = {

	preload: function() {
		this.load.image('preloaderBg', 'assets/imgs/null.png');
		this.load.image('preloaderBar', 'assets/imgs/full.png');

		/*this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;//SHOW_ALL;//EXACT_FIT;
		this.game.scale.setScreenSize(false, false);
		this.game.scale.forceOrientation(false, false);
		this.stage.disableVisibilityChange = true;*/
	},

	create: function() {
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//this.game.scale.forceOrientation(true, true);
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
		this.game.scale.setScreenSize(true);

		this.game.input.maxPointers = 1;
		this.stage.disableVisibilityChange = true;
		this.game.state.start('Preloader');	
	}
};