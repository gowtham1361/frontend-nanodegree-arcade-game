// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=x;
    this.y=y;
    //this.speed=Math.floor(Math.random() * (100 - 10)) + 10;
    this.speed=Math.floor(Math.random() * 100) + 20;
    this.width=101;
    this.height=171;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if(this.x >= 505){
            this.x = -100;
        }
        else{
            this.x = this.x + this.speed*dt;
        }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x=200;
    this.y=400;
    this.sprite='images/char-boy.png';
    enemyWidth=70;
    enemyHeight=40;
    playerWidth=60;
    playerHeight=65;
};

Player.prototype.reset=function(){
    this.x=200;
    this.y=400;
};

Player.prototype.update = function(dt) {
    if(this.x >= 410 || this.x <= -5){
            alert("play within the game board");
            this.reset();
        }
    if(this.y <= -15 || this.y >= 421) {
        if(this.y <= -15){
            alert("YOU WON THE GAME!");//criteria to win the game
            this.reset();
        }
        else {
            this.reset();
        }
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// this function handles the input for the player
Player.prototype.handleInput = function(key) {
    switch(key){
        case 'left':
            this.x-=20;
            break;
        case 'up':
            this.y-=20;
            break;
        case 'right':
            this.x+=20;
            break;
        case 'down':
            this.y+=20;
            break;
    }

};

Player.prototype.collisionCheck = function(x,y) {
//providing the height and width of the objects locally .
   var enemyX=x;
   var  enemyY=y;
        if (this.x < enemyX + enemyWidth &&
            this.x + playerWidth > enemyX &&
            this.y < enemyY + enemyHeight &&
            playerHeight + this.y > enemyY) {
                    this.reset();// collision detected!
            }
};
//instantiating the enemy objects
var enemy0= new Enemy(-20,195);
var enemy1= new Enemy(-40,150);
var enemy2= new Enemy(-90,230);
var enemy3= new Enemy(-70,100);
var enemy4= new Enemy(-100,50);


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies= [enemy0,enemy1,enemy2,enemy3,enemy4];

//i didnt know how to figure out a way for pushing with different location values for enemy
/*for (var i=0;i<3;i++) {
    allEnemies.push(new Enemy());
}
*/
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
