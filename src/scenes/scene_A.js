export class scene_A extends Phaser.Scene {   // scene_A  --  Class begin
constructor() {
  super({ key: 'scene_A' });
}



// -----------------------------------------------
// -----------------------------------------------
//    scene_A  --  Init
// -----------------------------------------------
// -----------------------------------------------

init() {  // scene_A  --  Init begin

  
}  // scene_A  --  Init end



// -----------------------------------------------
// -----------------------------------------------
//    scene_A  --  PreLoad
// -----------------------------------------------
// -----------------------------------------------

preload() {  // scene_A  --  PreLoad begin

  this.load.image('phaser', 'assets/visual/phaser.png');

}  // scene_A  --  PreLoad end



// -----------------------------------------------
// -----------------------------------------------
//    scene_B  --  Create
// -----------------------------------------------
// -----------------------------------------------

create() {  // scene_A  --  Create begin

  this.cameras.main.setBackgroundColor('#0c34ac');

  this.phaser = this.add.image(550, 129, 'phaser'); // was 974, 229
  this.phaser.setName('phaser');
  this.phaser.setAlpha(1);
  this.phaser.setDepth(0);
  this.phaser.setScale(.7, .7);  // was 1, 1
  this.phaser.setAngle(0);
  this.phaser.setVisible(true);
  this.phaser.setBlendMode(0);
  this.phaser.setScrollFactor(1, 1);
  this.phaser.setInteractive();
  this.phaser.setOrigin(0.5, 0.5);
  this.phaser.setFlipX(false);
  this.phaser.setFlipY(false);

  // was 610, 332
  //this.text_1 = this.add.text(310, 232, '            Click logo to start.', {
   this.text_1 = this.add.text(310, 232, '            Click logo to start.\n\n-- In spaceship scene:\n> [G] - Change type of spaceship.\n> [D] = move ahead while held\n> [F,R] = rocket thrust Fwd,Rev\n> [T] = turn to face opposite way\n> [W,S] = spin left, right\n> [up,dn-arrow] = grow, shrink\n> [left,right-arrow] = rotate left, right\n> [spacebar] = rotate stop\n> [N] = 1-30 ship clone NPCs, 20sec fly-away', {"fontFamily": "Arial, Helvetica, sans-serif",
  "fontSize": "48px",
  "color": "#ffffff",
  "backgroundColor": "#00000000",
  "stroke": "#ffffff",
  "strokeThickness": 0,
  "align": "left",
  "resolution": 1,
  "padding": {
      "x": 0,
      "y": 0
  },
  "shadow": {
      "color": "#000000",
      "blur": 5,
      "offsetX": 5,
      "offsetY": 5,
      "fill": false
  }
});

this.text_1.setName('text_1');
this.text_1.setAlpha(1);
this.text_1.setDepth(0);
this.text_1.setScale(.6, .6);  // was 1, 1
this.text_1.setAngle(0);
this.text_1.setVisible(true);
this.text_1.setBlendMode(0);
this.text_1.setScrollFactor(1, 1);
this.text_1.setInteractive();
this.text_1.setOrigin(0, 0);
this.text_1.setFlipX(false);
this.text_1.setFlipY(false);

this.phaser.on('pointerup', (pointer) => {
  this.scene.start('scene_B');
});


}  // scene_A  --  Create end



// -----------------------------------------------
// -----------------------------------------------
//    scene_A  --  Update
// -----------------------------------------------
// -----------------------------------------------

update(time, delta) {  // scene_A  --  Update begin

  
}  // scene_A  --  Update end


}  // scene_A  --  Class end
