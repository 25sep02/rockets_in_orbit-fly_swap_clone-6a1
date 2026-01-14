export class scene_B extends Phaser.Scene {   // scene_B  --  Class begin

  constructor() {
    super('scene_B');
  }



  // -----------------------------------------------
  // -----------------------------------------------
  //    scene_B  --  PreLoad
  // -----------------------------------------------
  // -----------------------------------------------

  preload() {  // scene_B  --  PreLoad begin

  //  The ship sprite and 'space.png' from Phaser Launcher built-in project.
  this.load.image('background_src', 'assets/visual/space.png');

  //  The ship sprite is CC0 from https://ansimuz.itch.io
  this.load.spritesheet('spaceship', 'assets/visual/spaceship.png', { frameWidth: 176, frameHeight: 96 });
  // Used google gemini ai to generate 'spaceship_rotate' 12-frame spritesheet from original 'spaceship' sprite.
  this.load.spritesheet('spaceship_rotate', 'assets/visual/spaceship_rotate.png', { frameWidth: 176, frameHeight: 96, margin: 0, spacing: 0 });
  // Used generic image editor to remove exhaust flare from the spaceship 3cell spritesheet.
  this.load.spritesheet('spaceship_no-flare', 'assets/visual/spaceship_no-flare.png', { frameWidth: 176, frameHeight: 96, margin: 0, spacing: 0 });
  // Used sketchfab website for a 3D models I posed and took screen clip videos to take static clips for xwing + tiefiter sprite-sheets.
  this.load.spritesheet('xwing', 'assets/visual/xwing.png', { frameWidth: 176, frameHeight: 96, margin: 0, spacing: 0 });
  this.load.spritesheet('xwing_rotate', 'assets/visual/xwing_rotate.png', { frameWidth: 176, frameHeight: 96, margin: 0, spacing: 0 });
  this.load.spritesheet('xwing_no-flare', 'assets/visual/xwing_no-flare.png', { frameWidth: 176, frameHeight: 96, margin: 0, spacing: 0 });
  this.load.spritesheet('tiefiter', 'assets/visual/tiefiter.png', { frameWidth: 176, frameHeight: 96, margin: 0, spacing: 0 });
  this.load.spritesheet('tiefiter_rotate', 'assets/visual/tiefiter_rotate.png', { frameWidth: 176, frameHeight: 96, margin: 0, spacing: 0 });
  this.load.spritesheet('tiefiter_no-flare', 'assets/visual/tiefiter_no-flare.png', { frameWidth: 176, frameHeight: 96, margin: 0, spacing: 0 });

  // Audio from the excellent pixabay.com for images, sounds +. Also good is freesound.org.
  this.load.audio('background_audio', 'assets/audio/space bg loop 1 mono 128kps 44khz 6s.mp3');
  this.load.audio('audio_flyoff', 'assets/audio/rocket-launch fly-off mono 8khz 1s.mp3');

  }  // scene_B  --  PreLoad end



  // -----------------------------------------------
  // -----------------------------------------------
  //    scene_B  --  Create
  // -----------------------------------------------
  // -----------------------------------------------

  create() {   // scene_B  --  Create begin


    // -----------------------------------------------
    //    scene_B  --  Create - setup
    // -----------------------------------------------


    // vvv------  all gloabal animation scripts defined in scene_B  ------vvv
    // Ref: "Global Animation Manager: Use this.anims.create({ ... }) in your scene's create method.
    //  This creates a global animation entry stored in the game-wide cache accessible to any sprite in any scene."

    // spaceship engine-flare animation:
    this.anims.create({
      key: 'engine_flare',
      frames: this.anims.generateFrameNumbers('spaceship', { start: 0, end: 2 }),
      frameRate: 15,
      repeat: -1
    });

    // spaceship no-flare animation:
    this.anims.create({
      key: 'no_flare',
      frames: this.anims.generateFrameNumbers('spaceship_no-flare', { start: 0, end: 2 }),
      frameRate: 15,
      repeat: -1
    });

    // spaceship 360-rotate animation:
    if (!this.anims.exists('shipRotate')) {
      this.anims.create({
        key: 'shipRotate',
        frames: this.anims.generateFrameNumbers('spaceship_rotate', {
          start: 0,
          end: 11
        }),
        frameRate: 5,
        repeat: -1,
        delay: 0,
        repeatDelay: 0,
        yoyo: false
      });
    }

    // spaceship turn-left animation:
    if (!this.anims.exists('shipTurnLeft')) {
      this.anims.create({
        key: 'shipTurnLeft',
        frames: this.anims.generateFrameNumbers('spaceship_rotate', {
          start: 0,
          end: 6
        }),
        frameRate: 5,
        repeat: 0,
        delay: 0,
        repeatDelay: 0,
        yoyo: false
      });
    }

    // spaceship turn-right animation:
    if (!this.anims.exists('shipTurnRight')) {
      this.anims.create({
        key: 'shipTurnRight',
        frames: this.anims.generateFrameNumbers('spaceship_rotate', {
          start: 6,
          end: 11
        }),
        frameRate: 5,
        repeat: 0,
        delay: 0,
        repeatDelay: 0,
        yoyo: false
      });
    }


    // xwing engine-flare animation:
    this.anims.create({
      key: 'xwing_flare',
      frames: this.anims.generateFrameNumbers('xwing', { start: 0, end: 2 }),
      frameRate: 15,
      repeat: -1
    });

    // xwing no-flare animation:
    this.anims.create({
      key: 'xwing_no_flare',
      frames: this.anims.generateFrameNumbers('xwing_no-flare', { start: 0, end: 2 }),
      frameRate: 15,
      repeat: -1
    });

    // xwing 360-rotate animation:
    if (!this.anims.exists('xwingRotate')) {
      this.anims.create({
        key: 'xwingRotate',
        frames: this.anims.generateFrameNumbers('xwing_rotate', {
          start: 0,
          end: 11
        }),
        frameRate: 5,
        repeat: -1,
        delay: 0,
        repeatDelay: 0,
        yoyo: false
      });
    }

    // xwing turn-left animation:
    if (!this.anims.exists('xwingTurnLeft')) {
      this.anims.create({
        key: 'xwingTurnLeft',
        frames: this.anims.generateFrameNumbers('xwing_rotate', {
          start: 0,
          end: 6
        }),
        frameRate: 5,
        repeat: 0,
        delay: 0,
        repeatDelay: 0,
        yoyo: false
      });
    }

    // xwing turn-right animation:
    if (!this.anims.exists('xwingTurnRight')) {
      this.anims.create({
        key: 'xwingTurnRight',
        frames: this.anims.generateFrameNumbers('xwing_rotate', {
          start: 6,
          end: 11
        }),
        frameRate: 5,
        repeat: 0,
        delay: 0,
        repeatDelay: 0,
        yoyo: false
      });
    }


    // tiefiter engine-flare animation:
    this.anims.create({
      key: 'tiefiter_flare',
      frames: this.anims.generateFrameNumbers('tiefiter', { start: 0, end: 2 }),
      frameRate: 15,
      repeat: -1
    });

    // tiefiter no-flare animation:
    this.anims.create({
      key: 'tiefiter_no_flare',
      frames: this.anims.generateFrameNumbers('tiefiter_no-flare', { start: 0, end: 2 }),
      frameRate: 15,
      repeat: -1
    });

    // tiefiter 180-rotate animation: front & back turns are identical, loop 2x for full rotation
    if (!this.anims.exists('tiefiterRotate')) {
      this.anims.create({
        key: 'tiefiterRotate',
        frames: this.anims.generateFrameNumbers('tiefiter_rotate', {
          start: 0,
          end: 11
        }),
        frameRate: 5,
        repeat: -1,
        delay: 0,
        repeatDelay: 0,
        yoyo: false
      });
    }

    // tiefiter turn-left animation: front & back turns are identical and so are the left/right anims
    if (!this.anims.exists('tiefiterTurnLeft')) {
      this.anims.create({
        key: 'tiefiterTurnLeft',
        frames: this.anims.generateFrameNumbers('tiefiter_rotate', {
          start: 1,  // start at 2nd frame (ie 1 not 0), 'cruise' has begining frame
          end: 5
        }),
        frameRate: 5,
        repeat: 0,
        delay: 0,
        repeatDelay: 0,
        yoyo: false
      });
    }

    // tiefiter turn-right animation: front & back turns are identical and so are the left/right anims
    if (!this.anims.exists('tiefiterTurnRight')) {
      this.anims.create({
        key: 'tiefiterTurnRight',
        frames: this.anims.generateFrameNumbers('tiefiter_rotate', {
          start: 1,  // start at 2nd frame (ie 1 not 0), 'cruise' has begining frame
          end: 5
        }),
        frameRate: 5,
        repeat: 0,
        delay: 0,
        repeatDelay: 0,
        yoyo: false
      });
    }

    // ^^^------  all gloabal animation scripts defined in scene_B  ------^^^


    // vvv------  audio and user-inputs setup for scene_B  ------vvv

    this.bgMusic = this.sound.add('background_audio', { mute: false, loop: true, volume: 1 });
    this.flyoffSound = this.sound.add('audio_flyoff', { mute: false, loop: false, volume: 0.74 });

    this.SPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.LEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.RIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.DOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

    this.D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.T = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
    this.W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.F = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    this.R = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.G = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
    this.N = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);

    // ^^^------  audio and user-inputs setup for scene_B  ------^^^


    // -----------------------------------------------
    //    scene_B  --  Create - main
    // -----------------------------------------------

    // vvv------   all audio and user-inputs for scene_B   ------vvv

    // Space sound background audio:
    try {
      this.bgMusic.play();
    } catch (e) {
      // some browsers block autoplay until user interaction; we'll resume on first pointerdown
    }
    if (this.sound && this.sound.context && this.sound.context.state === 'suspended') {
      this.input.once('pointerdown', () => {
        this.sound.context.resume().then(() => {
          if (this.bgMusic && !this.bgMusic.isPlaying) {
            this.bgMusic.play();
          }
        }).catch(() => {
          if (this.bgMusic && !this.bgMusic.isPlaying) {
            this.bgMusic.play();
          }
        });
      });
    }

    // 'flyoffSound' for 'D'-move feature coded in update().
    // Use an event listener to trigger sound here instead of in update loop.
    this.input.keyboard.on('keydown-D', () => {
      this.flyoffSound.play();
    });

    // ^^^------   all audio and user-inputs for scene_B   ------^^^


    // vvv------   start-up images for scene_B   ------vvv

    // star field image:
    this.background = this.add.tileSprite(640, 360, 1280, 720, 'background_src');

    // spaceship sprite:
    // defines as 'this.sprite_1' and not 'const sprite_1' so can be used in update()
    this.sprite_1 = this.add.sprite(640, 360, 'spaceship');
    this.sprite_1.setScale(0.5);  // 50% scale for 'spaceship' sprite

    // set new anim custom properties for sprite_1
    this.sprite_1.engine_anim = 'engine_flare';
    this.sprite_1.rightturn_anim = 'shipTurnRight';
    this.sprite_1.leftturn_anim = 'shipTurnLeft';
    this.sprite_1.rotate_anim = 'shipRotate';

    this.currentShipType = 'spaceship';  // initial ship type for 'G' key swap feature

    // Define ss_front_spin, spriteArray, spinTween for 'spin' code in update() method.
    this.ss_front_spin = 0;
    this.spriteArray = [this.sprite_1];  // only 1 sprite in array for now
    this.spinTween = null;   // spinTween for 'W' key - counter-clockwise
    this.spinTweenR = null;  // spinTweenR for 'S' key - clockwise
    // 'Spin' values for sprite facing right are:
    //    = 0 to -180 counter-clockwise above X axis (ie 'pointed up').
    //    = 0 to 180 clockwise below X axis (ie 'pointed down').

    // 'spriteGroup' for  'resize' feature. From g-ai code.  Not compatible with 'spriteArray'.
    this.spriteGroup = this.add.group();
    this.spriteGroup.addMultiple([    // only 1 sprite for now
      this.sprite_1
    ]);

    // ^^^------   start-up images for scene_B   ------^^^


    // vvv------   main procedural code for scene_B   ------vvv

    // show spaceship engine-flare:
    this.sprite_1.play(this.sprite_1.engine_anim);


    // 'T' key to turn sprite left/right ------------vvv
    this.T.on('up', () => {
      if (this.sprite_1.anims && this.sprite_1.anims.isPlaying && this.sprite_1.anims.currentAnim && this.sprite_1.anims.currentAnim.key === this.sprite_1.rotate_anim) {
        //console.log("Rotation animation is active. Press spacebar to stop.");
      } else {
        // Switch on the boolean property flipX
        // console.log("T-enter: spin: ", this.ss_front_spin);
        // console.log("T-enter: flipX: ", this.sprite_1.flipX);
        switch (this.sprite_1.flipX) {
          case true: // Currently flipped left, so turn it to the right
            this.sprite_1.playReverse(this.sprite_1.rightturn_anim);
            this.sprite_1.once('animationcomplete', (animation) => {
              if (animation.key === this.sprite_1.rightturn_anim) {
                this.sprite_1.setFlipX(false); // Face right
                this.sprite_1.play(this.sprite_1.engine_anim);
              }
            });
            if (this.ss_front_spin > 0) {
              this.ss_front_spin -= 180;  // adjust spin after flip
            } else { this.ss_front_spin += 180 };
            break;
          case false: // Currently facing right, so turn it to the left
            this.sprite_1.play(this.sprite_1.leftturn_anim);
            this.sprite_1.once('animationcomplete', (animation) => {
              if (animation.key === this.sprite_1.leftturn_anim) {
                this.sprite_1.setFlipX(true); // Face left
                this.sprite_1.play(this.sprite_1.engine_anim);
              }
            });
            if (this.ss_front_spin > 0) {
              this.ss_front_spin -= 180;  // adjust spin after flip
            } else { this.ss_front_spin += 180 };
            break;
        }
        /* console.log("T-exit: spin: ", this.ss_front_spin);
        this.time.delayedCall(3000, () => {  // 3 sec phaser delayed call to show flipX after anim complete
            console.log("T-exit: flipX: ", this.sprite_1.flipX);
        }, [], this);  */
      }  // end else{ leading to switch
    });
    // 'T' key to turn sprite left/right ------------^^^


    // vvv------ ROTATE CODE BELOW ------vvv
    // =====================================
    // Implement 'handleRotateComplete' callback function as a scene property.
    this.handleRotateComplete = (animation, frame) => {
      if (animation.key === this.sprite_1.rotate_anim) {
        //console.log(`Stopped on frame ${frame.index}.`);
        this.sprite_1.play(this.sprite_1.engine_anim);  // play anim to follow the rotate-anim
      }
    };

    // Register 'handleRotateComplete' callback function after assigning it.
    // Listen on the sprite instance (the rotate_anim property is just a key string).
    this.sprite_1.on('animationstop', this.handleRotateComplete, this);

    // Right-arrow key to start rotation animation:
    this.RIGHT.on('up', () => {           // right-arrow key listener
      if (this.sprite_1.anims && this.sprite_1.anims.isPlaying && this.sprite_1.anims.currentAnim && this.sprite_1.anims.currentAnim.key === this.sprite_1.rotate_anim) {
        //console.log("Rotation animation is active. Press spacebar to stop.");
      } else {
        // console.log("R-arrow enter: spin: ", this.ss_front_spin);
        // console.log("R-arrow enter: flipX: ", this.sprite_1.flipX);
        if (!this.sprite_1.flipX) {      // spaceship facing right at start
          this.sprite_1.play({
            key: this.sprite_1.rotate_anim,
            startFrame: 0
          });
        } else {                         // spaceship facing left at start
          this.sprite_1.setFlipX(false); // always face right at end of rotate and for "play"
          if (this.ss_front_spin < 0) {  // adj spin from face left to face right after rotate
            this.ss_front_spin += 180;
          } else {
            this.ss_front_spin -= 180;
          }
          this.sprite_1.play({
            key: this.sprite_1.rotate_anim,
            startFrame: 6                 // loop rotate-anim from mid-point (counting from 0 not 1)
          });
        }
      }
    });

    // Left-arrow key to start reverse rotation animation:
    this.LEFT.on('up', () => {           // left-arrow key listener
      if (this.sprite_1.anims && this.sprite_1.anims.isPlaying && this.sprite_1.anims.currentAnim && this.sprite_1.anims.currentAnim.key === this.sprite_1.rotate_anim) {
        //console.log("Rotation animation is active. Press spacebar to stop.");
      } else {
        // console.log("L-arrow enter: spin: ", this.ss_front_spin);
        // console.log("L-arrow enter: flipX: ", this.sprite_1.flipX);
        if (!this.sprite_1.flipX) {       // spaceship facing right at start
          this.sprite_1.playReverse({
            key: this.sprite_1.rotate_anim,
            startFrame: 0
          });
        } else {                         // spaceship facing left at start
          this.sprite_1.setFlipX(false); // always face right at end of rotate and for "play"
          if (this.ss_front_spin < 0) {  // adj spin from face left to face right after rotate
            this.ss_front_spin += 180;
          } else {
            this.ss_front_spin -= 180;
          }
          this.sprite_1.playReverse({
            key: this.sprite_1.rotate_anim,
            startFrame: 6                // loop rotate-anim from mid-point (counting from 0 not 1)
          })
        }
      }
    });

    this.SPACE.on('up', () => {
      const anim = this.sprite_1.anims && this.sprite_1.anims.currentAnim;
      if (anim) {
        const frameToStopOn = anim.getFrameAt(0);
        if (frameToStopOn) {
          // This call will now trigger 'animationstop' when the target frame is hit.
          if (this.sprite_1.anims && typeof this.sprite_1.anims.stopOnFrame === 'function') {
            this.sprite_1.anims.stopOnFrame(frameToStopOn);
          } else if (typeof this.sprite_1.stopOnFrame === 'function') {
            // Fallback if API is available directly on sprite in this Phaser build
            this.sprite_1.stopOnFrame(frameToStopOn);
          }
          // See above: 'this.sprite_1.on('animationstop', this.handleRotateComplete, this);'
          // and 'handleRotateComplete' that this code calls-back to.
        }
      }
    });
    // =====================================
    // ^^^------ ROTATE CODE ABOVE ------^^^


    // 'N' key  for "1-30 NPC clones" ------------vvv
    // Spawned non-physics copies tracking
    this._spawnedCopies = [];
    this._maxSpawnedCopies = 30;

    // on each press of left-arrow, spawn a non-physics sprite copy that flies in from the left
    this.N.on('down', () => {
      console.log("N for NPC pressed.");   // 6a09: for debug
      if (!this.sprite_1) { return; }  // 6a09: this.sprite_1 -not- this.sprite_spaceship
      // play fly-off sound immediately as a one-shot
      try {
        if (this.sound && this.sound.context && this.sound.context.state === 'suspended') {
          this.sound.context.resume().then(() => {
            this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
          }).catch(() => {
            this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
          });
        } else {
          this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
        }
      } catch (e) {
        // ignore audio playback errors
      }
      // enforce maximum of spawned copies
      if (this._spawnedCopies.length >= this._maxSpawnedCopies) {
        return;
      }
      // pick a final destination somewhere on-screen (with some padding)
      const finalX = Phaser.Math.Between(50, Math.max(50, this.scale.width - 50));
      const finalY = Phaser.Math.Between(50, Math.max(50, this.scale.height - 50));
      // start off-screen to the left
      const startX = -100;
      // create a non-physics sprite (no Matter body) using the current ship texture
      const textureKey = this.currentShipType || 'spaceship';     // 6a09: use currentShipType for texture key
      const copy = this.add.sprite(startX, finalY, textureKey, 0);
      // match source sprite scale (fallback to 1)
      copy.setScale(this.sprite_1.scaleX || 1, this.sprite_1.scaleY || 1);
      copy.setOrigin(0.5, 0.5);
      copy.setVisible(true);
      copy.setFlipX(false);
      copy.setFlipY(false);
      // name for debugging
      copy.setName('spawned_spaceship_' + this._spawnedCopies.length);
      // play the same flying animation if available     // 6a09: change below to this.sprite_1.engine_anim
      if (this.sprite_1 && this.sprite_1.engine_anim && this.anims.exists(this.sprite_1.engine_anim)) {
        copy.play(this.sprite_1.engine_anim);
      }
      this._spawnedCopies.push(copy);

      // Tween the copy into its final position from the left
      const entryDistance = Math.abs(finalX - startX);
      const entrySpeed = 600; // px/sec
      const entryDuration = Math.max(250, Math.round((entryDistance / entrySpeed) * 1000));
      copy._entryTween = this.tweens.add({
        targets: copy,
        x: finalX,
        duration: entryDuration,
        ease: 'Quad.easeOut'
      });

      // After 20 seconds, start moving the copy off to the right and destroy when off-screen
      const delayMs = 20000; // 20 seconds
      copy._exitTimer = this.time.delayedCall(delayMs, () => {
        // play fly-off sound for this spawned copy (non-loop)
        try {
          if (this.sound && this.sound.context && this.sound.context.state === 'suspended') {
            this.sound.context.resume().then(() => {
              this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
            }).catch(() => {
              this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
            });
          } else {
            this.sound.play('audio_flyoff', { loop: false, volume: 1.0 });
          }
        } catch (e) {
          // ignore audio playback errors
        }
        // compute destination X just past the right edge
        const endX = this.scale.width + (copy.displayWidth || 0) / 2 + 50;
        // choose a speed (px/sec) for the exit movement
        const speed = 400 * 5; // px per second (5x faster)
        const distance = Math.max(0, endX - copy.x);
        const duration = Math.max(200, Math.round((distance / speed) * 1000));
        // create tween to move copy to endX, then destroy and cleanup
        copy._exitTween = this.tweens.add({
          targets: copy,
          x: endX,
          duration: duration,
          ease: 'Linear',
          onComplete: () => {
            // remove from tracking array
            const idx = this._spawnedCopies.indexOf(copy);
            if (idx !== -1) {
              this._spawnedCopies.splice(idx, 1);
            }
            // destroy sprite
            if (copy && copy.destroy) {
              copy.destroy();
            }
          }
        });
      }, [], this);
    });
    // 'N' key  for "1-30 NPC clones" ------------^^^



    // 'Resize' feature: Up-arrow/Dn-arrow: grow/shrink sprite using smooth tween-anim.
    this.UP.on('up', () => {
      const sprites = this.spriteGroup.getChildren(); // array of all group sprites
      if (sprites.length > 0) {
        this.tweens.add({
          targets: sprites,
          scaleX: '*=1.1', // Multiplies current scale by 1.1 (10% increase)
          scaleY: '*=1.1',
          duration: 200,
          ease: 'Sine.inOut'
        });
      }
    });

    this.DOWN.on('up', () => {
      const sprites = this.spriteGroup.getChildren(); // array of all group sprites
      if (sprites.length > 0) {
        this.tweens.add({
          targets: sprites,
          scaleX: '*=.9', // Multiplies current scale by .9 (10% decrease)
          scaleY: '*=.9',
          duration: 200,
          ease: 'Sine.inOut'
        });
      }
    });
    // 'Resize' feature ---^^^

    // 'F/R' +/- accel/decel to/from ship_velocity (inertial movement).
    this.ship_velocity = 0;  // need to access in create() and update() methods
    this.F.on('up', () => {
      this.ship_velocity += 50;
    });
    this.R.on('up', () => {
      this.ship_velocity -= 50;
    });
    // 'F/R' +/- accel/decel ----^^^


  // vvv------ SHIP SWAP CODE BELOW ------vvv
  // ========================================

  // User input for [G] - Change type of spaceship.
  // Values used in code for currentShipType:
  //    'spaceship' 'spaceship_no-flare' 'xwing' 'xwing_no-flare'
  //    'tiefiter' 'tiefiter_no-flare'
  this.G.on('up', () => {
    // console.log("G-key pressed: currentShipType: ", this.currentShipType);
    switch (this.currentShipType) {
    case 'spaceship':      // The previous ship type we were on.
        this.currentShipType = 'spaceship_no-flare';     // The ship type we are switching to.
        this.sprite_1.setTexture('spaceship_no-flare');  // chg sprite_1 to 'spaceship_no-flare' now
        this.sprite_1.setScale(0.5);      // 50% scale for 'spaceship_no-flare' texture
        this.sprite_1.play('no_flare');   // play 'no_flare' anim on sprite_1 now
        // set new properties to hold anim-keys for sprite_1 with 'spaceship_no-flare' texture
        //   ex: this.sprite_1.play(this.sprite_1.rotate_anim);
        this.sprite_1.engine_anim = 'no_flare';
        this.sprite_1.rightturn_anim = 'shipTurnRight';
        this.sprite_1.leftturn_anim = 'shipTurnLeft';
        this.sprite_1.rotate_anim = 'shipRotate';
        break;
    case 'spaceship_no-flare':      // The previous ship type we were on.
        this.currentShipType = 'xwing';      // The ship type we are switching to.
        this.sprite_1.setTexture('xwing');   // chg sprite_1 to 'xwing' now
        this.sprite_1.setScale(0.8);         // 80% scale for 'xwing' texture
        this.sprite_1.play('xwing_flare');   // play 'xwing_flare' anim on sprite_1 now
        // set new properties to hold anim-keys for sprite_1 with 'xwing' texture
        //   ex: this.sprite_1.play(this.sprite_1.rotate_anim);
        this.sprite_1.engine_anim = 'xwing_flare';
        this.sprite_1.rightturn_anim = 'xwingTurnRight';
        this.sprite_1.leftturn_anim = 'xwingTurnLeft';
        this.sprite_1.rotate_anim = 'xwingRotate';
        break;
    case 'xwing':      // The previous ship type we were on.
        this.currentShipType = 'xwing_no-flare';     // The ship type we are switching to.
        this.sprite_1.setTexture('xwing_no-flare');  // chg sprite_1 to 'xwing_no-flare' now
        this.sprite_1.setScale(0.7);                 // 70% scale for 'xwing_no-flare' texture
        this.sprite_1.play('xwing_no_flare');        // play 'xwing_no_flare' anim on sprite_1 now
        // set new properties to hold anim-keys for sprite_1 with 'x_no-flare' texture
        //   ex: this.sprite_1.play(this.sprite_1.rotate_anim);
        this.sprite_1.engine_anim = 'xwing_no_flare';
        this.sprite_1.rightturn_anim = 'xwingTurnRight';
        this.sprite_1.leftturn_anim = 'xwingTurnLeft';
        this.sprite_1.rotate_anim = 'xwingRotate';
        break;
    case 'xwing_no-flare':      // The previous ship type we were on.
        this.currentShipType = 'tiefiter';     // The ship type we are switching to.
        this.sprite_1.setTexture('tiefiter');  // chg sprite_1 to 'tiefiter' now
        this.sprite_1.setScale(0.80);            // 80% scale for 'tiefiter' texture
        this.sprite_1.play('tiefiter_flare');     // play 'tiefiter_flare' anim on sprite_1 now
        // set new properties to hold anim-keys for sprite_1 with 'spaceship' texture
        //   ex: this.sprite_1.play(this.sprite_1.rotate_anim);
        this.sprite_1.engine_anim = 'tiefiter_flare';
        this.sprite_1.rightturn_anim = 'tiefiterTurnRight';
        this.sprite_1.leftturn_anim = 'tiefiterTurnLeft';
        this.sprite_1.rotate_anim = 'tiefiterRotate';
        break;
    case 'tiefiter':      // The previous ship type we were on.
        this.currentShipType = 'tiefiter_no-flare';     // The ship type we are switching to.
        this.sprite_1.setTexture('tiefiter');  // chg sprite_1 to 'tiefiter' now
        this.sprite_1.setScale(0.80);            // 80% scale for 'tiefiter' texture
        this.sprite_1.play('tiefiter_no_flare');     // play 'tiefiter_no_flare' anim on sprite_1 now
        // set new properties to hold anim-keys for sprite_1 with 'tiefiter_no-flare' texture
        //   ex: this.sprite_1.play(this.sprite_1.rotate_anim);
        this.sprite_1.engine_anim = 'tiefiter_no_flare';
        this.sprite_1.rightturn_anim = 'tiefiterTurnRight';
        this.sprite_1.leftturn_anim = 'tiefiterTurnLeft';
        this.sprite_1.rotate_anim = 'tiefiterRotate';
        break;
    case 'tiefiter_no-flare':      // The previous ship type we were on.
        this.currentShipType = 'spaceship';     // The ship type we are switching to.
        this.sprite_1.setTexture('spaceship');  // chg sprite_1 to 'spaceship' now
        this.sprite_1.setScale(0.5);            // 50% scale for 'spaceship' texture
        this.sprite_1.play('engine_flare');     // play 'engine_flare' anim on sprite_1 now
        // set new properties to hold anim-keys for sprite_1 with 'spaceship' texture
        //   ex: this.sprite_1.play(this.sprite_1.rotate_anim);
        this.sprite_1.engine_anim = 'engine_flare';
        this.sprite_1.rightturn_anim = 'shipTurnRight';
        this.sprite_1.leftturn_anim = 'shipTurnLeft';
        this.sprite_1.rotate_anim = 'shipRotate';
        break;
    }
 });

  // ========================================
  // ^^^------ SHIP SWAP CODE ABOVE ------^^^



    // ^^^------   main procedural code for scene_B   ------^^^


  }  // scene_B  --  Create end


  // -----------------------------------------------
  // -----------------------------------------------
  //    scene_B  --  Update
  // -----------------------------------------------
  // -----------------------------------------------

  update(time, delta) {  // scene_B  --  Update begin
    // delta is time elapsed since last frame in ms; need for ship_velocity calc

    if (this.ss_front_spin > -90 && this.ss_front_spin < 90) {
      // Move starfield to left when spaceship spin points to right
      this.background.tilePositionX += 2;
    } else {
      // Move starfield to right when spaceship spin points to left
      this.background.tilePositionX -= 2;
    }


    // Radian/trig sin + cos functions calc change in X and Y
    // for a given length at a given angle (ie 'ss_front_spin').
    // The Phaser sin and cos functions require radians.
    let radians = Phaser.Math.DegToRad(this.ss_front_spin);

    // 'F/R' +/- accel/decel to/from ship_velocity (inertial movement).
    if (this.ship_velocity) {  // Only do calc's and moves if speed is not 0.
      const moveDist = this.ship_velocity * (delta / 1000);
      const moveX = moveDist * Math.cos(radians);
      const moveY = moveDist * Math.sin(radians);
      this.spriteArray.forEach(sprite => {
        sprite.x += moveX;
        sprite.y += moveY;
      });
    }

    // Hold 'D' to move in direction ship faces. Release to stop.
    if (this.D.isDown) {
      const moveX = 10 * Math.cos(radians);
      const moveY = 10 * Math.sin(radians);
      this.spriteArray.forEach(sprite => {
        sprite.x += moveX;
        sprite.y += moveY;
      });
    }


    // vvv------ SPIN CODE BELOW ------vvv
    // ===================================
    // 'W' key spins sprite counter-clockwise ('spin left')
    //   Uses 'spinTween' and 'spriteArray' defined in create() method.
    if (this.W.isDown) {
      if (!this.spinTween || !this.spinTween.isPlaying()) {
        // Create a single tween targeting all sprites in the array
        this.spinTween = this.tweens.add({
          targets: this.spriteArray,
          angle: '-=360',   // Use relative subtraction for counter-clockwise
          duration: 5000,   // 5000ms at 60 steps a spin at 60fps = 5s full spin
          repeat: -1,       // Repeat while held
          ease: 'Linear',
          onStop: (tween, targets) => {
            // targets is the array [sprite1, sprite2, etc.]
            // Access the angle from the first sprite in the array
            const currentAngle = targets[0].angle;  // ie -180 to +180 NOT 0 to 360
            //console.log("Spin stopped. Current angle:", currentAngle);
            const integerAngle = Math.trunc(currentAngle);  // removes decimals
            this.ss_front_spin = integerAngle;
            // Spin = 0 to -180 counter-clock-wise above X axis (ie 'pointed up').
            // Spin = 0 to 180 clockwise below X axis (ie 'pointed down').
            // Spin for movement = +/- 1/2 spin on sprite right-to-left turn
            if (this.sprite_1.flipX) {  // for spaceship facing left
              if (this.ss_front_spin < 0) {   // for 'up' pointing spin
                this.ss_front_spin += 180;
              } else {                        // for 'down' pointing spin
                this.ss_front_spin -= 180;
              }
            }
          }
        });
      }
    } else {      // Stop the tween when the 'W' key is released
      if (this.spinTween) {
        this.spinTween.stop();
        this.spinTween = null;
        // console.log("_B update() 'W'-up 2; ss_front_spin: ", this.ss_front_spin);
      }
    };

    // 'S' key spins sprite counter-clockwise ('spin left')
    //   Uses 'spinTween' and 'spriteArray' defined in create() method.
    if (this.S.isDown) {
      if (!this.spinTweenR || !this.spinTweenR.isPlaying()) {
        // Create a single tween targeting all sprites in the array
        this.spinTweenR = this.tweens.add({
          targets: this.spriteArray,
          angle: '+=360',   // Use relative addition for clockwise
          duration: 5000,   // 5000ms at 60 steps a spin at 60fps = 5s full spin
          repeat: -1,       // Repeat while held
          ease: 'Linear',
          onStop: (tween, targets) => {
            // targets is the array [sprite1, sprite2, etc.]
            // Access the angle from the first sprite in the array
            const currentAngle = targets[0].angle;  // ie -180 to +180 NOT 0 to 360
            //console.log("Spin stopped. Current angle:", currentAngle);
            const integerAngle = Math.trunc(currentAngle);  // removes decimals
            this.ss_front_spin = integerAngle;
            // Spin = 0 to -180 counter-clock-wise above X axis (ie 'pointed up').
            // Spin = 0 to 180 clockwise below X axis (ie 'pointed down').
            // Spin for movement = +/- 1/2 spin on sprite right-to-left turn
            if (this.sprite_1.flipX) {  // for spaceship facing left
              if (this.ss_front_spin < 0) {   // for 'up' pointing spin
                this.ss_front_spin += 180;
              } else {                        // for 'down' pointing spin
                this.ss_front_spin -= 180;
              }
            }
          }
        });
      }
    } else {      // Stop the tween when the 'W' key is released
      if (this.spinTweenR) {
        this.spinTweenR.stop();
        this.spinTweenR = null;
        // console.log("_B update() 'S'-up 2; ss_front_spin: ", this.ss_front_spin);
      }
    };
    // ===================================
    // ^^^------ SPIN CODE ABOVE ------^^^


  }  // scene_B  --  Update end


}   // scene_B  --  Class end
