TapDots.Preloader = function(game) {};
TapDots.Preloader.prototype = {
	preload: function() {
		//var gameRatio = window.innerWidth/window.innerHeight;
		//this.game.world.setBounds(0, 0, 768, 768);
		//background
		this.game.stage.backgroundColor = '#ff00ff';

		//loading
		this.preloadBg = this.add.sprite((this.game.world.centerX - 100), (this.game.world.centerY), 'preloaderBg');
		this.preloadBg.anchor.setTo(0.5, 0.5);
		this.preloadBar = this.add.sprite((this.game.world.centerX - 100), (this.game.world.centerY), 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.game.load.setPreloadSprite(this.preloadBar);

		this.game.load.spritesheet('dots', 'assets/imgs/dots.png', 60, 60);
		this.game.load.image('block', 'assets/imgs/block.png');
		this.game.load.image('blockv', 'assets/imgs/blockv.png');

	},

	create: function() {
		this.game.state.start('PlayState');
	}
};