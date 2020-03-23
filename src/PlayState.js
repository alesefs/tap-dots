TapDots.PlayState = function(game) {
	dots = null;
	dotsTimeDelay = 0;
	dotsDelay = 2;
	scaleDots = (Math.random() * (1.50 - 0.75) + 0.75).toFixed(2);
	dotsChoose = 0;

	styleText = null;
	dotGetText = null;

	score = 0;
	lives = 5;

	inGame = true;

	block = null;

	gameRatio = window.outerWidth/window.outerHeight;
	gameEcra = window.innerWidth/window.innerHeight;

};

TapDots.PlayState.prototype = {
	create: function() {
		this.game.stage.backgroundColor = '#f8f8ff';

		this.game.world.setBounds(0, 0, 768, 768);
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		styleText = { font: "50px Courier", fill: "#ff0044", align: "left", stroke: "#ff9999", strokeThickness: 2 };
		dotGetText = this.game.add.text(this.game.world.centerX/1.25, 75, " 0 ", styleText);

		dots = this.game.add.group();
		dots.enableBody = true;
		this.game.physics.enable(dots);

		block = this.game.add.group();
		block.enableBody = true;
		this.game.physics.enable(block);
		var blocks1 = block.create(0, this.game.world.height + 50, 'block');
		blocks1.body.immovable = true;
		var blocks2 = block.create(0, -50, 'block');
		blocks2.body.immovable = true;
		var blocks3 = block.create(-50, 0, 'blockv');
		blocks3.body.immovable = true;
		var blocks4 = block.create(this.game.world.width + 50, 0, 'blockv');
		blocks4.body.immovable = true;
   	},

	update: function(){		
        if(lives > 0){
        	inGame = true;
        	this.onGame();
        } else {
        	inGame = false;
        	this.overGame();
        }
	
	},

	onGame: function(){	
		dotsTimeDelay += this.time.elapsed/1000;
		if(dotsTimeDelay > dotsDelay){
            dotsTimeDelay = 0;
            dotsDelay = this.game.rnd.integerInRange(1, 3);
            this.createDots();
            scaleDots = (Math.random() * (1.5 - 0.75) + 0.75).toFixed(2);
            dotsChoose = this.game.rnd.integerInRange(0, 3);
        }

        dotGetText.text = score + " : " + lives;


        this.game.physics.arcade.collide(dots, block, this.getLimits);
	},

	createDots: function(){
		switch(dotsChoose){
			case 0:
		        var dot = dots.create(this.game.rnd.integerInRange(30, 450), -30, 'dots', this.game.rnd.integerInRange(1, 1));
		        this.game.physics.enable(dot, Phaser.Physics.ARCADE);
		        dot.anchor.setTo(0.5, 0.5);
		        dot.scale.setTo(scaleDots, scaleDots);
		        dot.body.velocity.y = this.game.rnd.integerInRange(50, 500);
		        dot.inputEnabled = true;
		        dot.events.onInputDown.add(this.dotPointer, this);
		        break;
		    case 1:
		        var dot = dots.create(this.game.world.width, this.game.rnd.integerInRange(30, 650), 'dots', this.game.rnd.integerInRange(1, 1));
		        this.game.physics.enable(dot, Phaser.Physics.ARCADE);
		        dot.anchor.setTo(0.5, 0.5);
		        dot.scale.setTo(scaleDots, scaleDots);
		        dot.body.velocity.x = -this.game.rnd.integerInRange(50, 500);
		        dot.inputEnabled = true;
		        dot.events.onInputDown.add(this.dotPointer, this);
		        break;
		    case 2:
		        var dot = dots.create(-30, this.game.rnd.integerInRange(30, 650), 'dots', this.game.rnd.integerInRange(1, 1));
		        this.game.physics.enable(dot, Phaser.Physics.ARCADE);
		        dot.anchor.setTo(0.5, 0.5);
		        dot.scale.setTo(scaleDots, scaleDots);
		        dot.body.velocity.x = this.game.rnd.integerInRange(50, 500);
		        dot.inputEnabled = true;
		        dot.events.onInputDown.add(this.dotPointer, this);
		        break;
		    case 3:
		        var dot = dots.create(this.game.rnd.integerInRange(30, 450), this.game.world.height + 30, 'dots', this.game.rnd.integerInRange(1, 1));
		        this.game.physics.enable(dot, Phaser.Physics.ARCADE);
		        dot.anchor.setTo(0.5, 0.5);
		        dot.scale.setTo(scaleDots, scaleDots);
		        dot.body.velocity.y = -this.game.rnd.integerInRange(50, 500);
		        dot.inputEnabled = true;
		        dot.events.onInputDown.add(this.dotPointer, this);
		        break;  
		    default:
		    	break;
		}
        //dots.forEach(this.dotBlockeds, this);
	},
	
	/*dotBlockeds: function(dot){
		if(dot.y > this.game.world.height){
			dot.kill();
		}
	},*/

	dotPointer: function(dot){
		dot.kill();
		score += 1;
	},

	getLimits: function(block, dot){
		block.kill();
		lives -= 1;
	},

	overGame: function(){
		dotGetText.text = score + " game-over";/*\n*/
		dotGetText.x = this.game.world.centerX/2.15;
	},

	render: function() {}
	
};