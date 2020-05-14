
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ccc82GjFtDcbjNkFtc1W70', 'Player');
// Scripts/Player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    Bullet: {
      "default": null,
      type: cc.Prefab
    },
    ShootSound: {
      "default": null,
      type: cc.AudioClip
    },
    LoseSound: {
      "default": null,
      type: cc.AudioClip
    },
    playerID: {
      "default": "",
      visible: false
    }
  },
  statics: {
    mainGame: null
  },
  // LIFE-CYCLE CALLBACKS:
  playerMovement: function playerMovement(event) {
    var eventLocation = event.getLocation();
    var mousePosition = mainGame.convertToNodeSpaceAR(eventLocation);
    var posX = mousePosition.x;
    var posY = mousePosition.y;
    mainGame.getComponent("Main").onPlayerMove(posX, posY);
    this.node.setPosition(posX, posY);
  },
  shoot: function shoot(playerID, posX, posY) {
    var newBullet = cc.instantiate(this.Bullet);
    console.log("shoot", playerID, posX, posY);
    newBullet.getComponent("BulletMove").playerID = playerID;
    newBullet.setPosition(posX, posY);
    mainGame.addChild(newBullet);
    console.log("shoot");
    cc.audioEngine.playEffect(this.ShootSound, false);
  },
  playerShoot: function playerShoot(event) {
    var posX = this.node.position.x;
    var posY = this.node.position.y;
    this.shoot(this.playerID, posX, posY);
    mainGame.getComponent("Main").onPlayerShoot(posX, posY);
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 3) // Enemy tag is 3
      {
        mainGame.getComponent("Main").gameOver(); // TODO

        cc.audioEngine.playEffect(this.LoseSound, false);
        this.node.destroy();
      }
  },
  onLoad: function onLoad() {
    mainGame = this.node.parent;
    console.log("onLoad", this.playerID, "+++", mainGame.getComponent("Main").playerID);

    if (this.playerID == mainGame.getComponent("Main").playerID) {
      mainGame.on('mousemove', this.playerMovement, this);
      mainGame.on('mousedown', this.playerShoot, this);
    }

    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiQnVsbGV0IiwidHlwZSIsIlByZWZhYiIsIlNob290U291bmQiLCJBdWRpb0NsaXAiLCJMb3NlU291bmQiLCJwbGF5ZXJJRCIsInZpc2libGUiLCJzdGF0aWNzIiwibWFpbkdhbWUiLCJwbGF5ZXJNb3ZlbWVudCIsImV2ZW50IiwiZXZlbnRMb2NhdGlvbiIsImdldExvY2F0aW9uIiwibW91c2VQb3NpdGlvbiIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwicG9zWCIsIngiLCJwb3NZIiwieSIsImdldENvbXBvbmVudCIsIm9uUGxheWVyTW92ZSIsIm5vZGUiLCJzZXRQb3NpdGlvbiIsInNob290IiwibmV3QnVsbGV0IiwiaW5zdGFudGlhdGUiLCJjb25zb2xlIiwibG9nIiwiYWRkQ2hpbGQiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJwbGF5ZXJTaG9vdCIsInBvc2l0aW9uIiwib25QbGF5ZXJTaG9vdCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJ0YWciLCJnYW1lT3ZlciIsImRlc3Ryb3kiLCJvbkxvYWQiLCJwYXJlbnQiLCJvbiIsIm1hbmFnZXIiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZMLEtBREE7QUFLUkMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFE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QUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0IsS0FBS3RCLFFBQTNCLEVBQXFDLEtBQXJDLEVBQTRDRyxRQUFRLENBQUNXLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEJkLFFBQTFFOztBQUNBLFFBQUcsS0FBS0EsUUFBTCxJQUFpQkcsUUFBUSxDQUFDVyxZQUFULENBQXNCLE1BQXRCLEVBQThCZCxRQUFsRCxFQUNBO0FBQ0lHLE1BQUFBLFFBQVEsQ0FBQ2tDLEVBQVQsQ0FBWSxXQUFaLEVBQXlCLEtBQUtqQyxjQUE5QixFQUE4QyxJQUE5QztBQUNBRCxNQUFBQSxRQUFRLENBQUNrQyxFQUFULENBQVksV0FBWixFQUF5QixLQUFLWCxXQUE5QixFQUEyQyxJQUEzQztBQUNIOztBQUNELFFBQUlZLE9BQU8sR0FBR2hELEVBQUUsQ0FBQ2lELFFBQUgsQ0FBWUMsbUJBQVosRUFBZDtBQUNBRixJQUFBQSxPQUFPLENBQUNHLE9BQVIsR0FBa0IsSUFBbEI7QUFDSCxHQXRFSTtBQXVFTEMsRUFBQUEsS0F2RUssbUJBdUVJLENBRVIsQ0F6RUksQ0EyRUw7O0FBM0VLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBCdWxsZXQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYiwgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBTaG9vdFNvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsICAgICAgIFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBMb3NlU291bmQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGF5ZXJJRDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0gICAgICAgXHJcbiAgICB9LFxyXG4gICAgc3RhdGljczp7XHJcbiAgICAgICAgbWFpbkdhbWU6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBwbGF5ZXJNb3ZlbWVudChldmVudClcclxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHZhciBldmVudExvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB2YXIgbW91c2VQb3NpdGlvbiA9IG1haW5HYW1lLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50TG9jYXRpb24pO1xyXG4gICAgICAgIHZhciBwb3NYID0gbW91c2VQb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciBwb3NZID0gbW91c2VQb3NpdGlvbi55OyAgICAgXHJcblxyXG4gICAgICAgIG1haW5HYW1lLmdldENvbXBvbmVudChcIk1haW5cIikub25QbGF5ZXJNb3ZlKHBvc1gsIHBvc1kpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3NYLCBwb3NZKTtcclxuICAgIH0sXHJcbiAgICBzaG9vdChwbGF5ZXJJRCwgcG9zWCwgcG9zWSl7XHJcbiAgICAgICAgdmFyIG5ld0J1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQnVsbGV0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNob290XCIsIHBsYXllcklELCBwb3NYLCBwb3NZKTtcclxuICAgICAgICBuZXdCdWxsZXQuZ2V0Q29tcG9uZW50KFwiQnVsbGV0TW92ZVwiKS5wbGF5ZXJJRCA9IHBsYXllcklEO1xyXG4gICAgICAgIG5ld0J1bGxldC5zZXRQb3NpdGlvbihwb3NYLCBwb3NZKTtcclxuICAgICAgICBtYWluR2FtZS5hZGRDaGlsZChuZXdCdWxsZXQpOyAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hvb3RcIik7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLlNob290U291bmQsZmFsc2UpOyAgICAgXHJcbiAgICB9LFxyXG4gICAgcGxheWVyU2hvb3QoZXZlbnQpXHJcbiAgICB7ICAgICAgIFxyXG4gICAgICAgIGxldCBwb3NYID10aGlzLm5vZGUucG9zaXRpb24ueDtcclxuICAgICAgICBsZXQgcG9zWSA9IHRoaXMubm9kZS5wb3NpdGlvbi55OyAgICAgXHJcbiAgICAgICAgdGhpcy5zaG9vdCh0aGlzLnBsYXllcklELCBwb3NYLCBwb3NZKTtcclxuICAgICAgICBtYWluR2FtZS5nZXRDb21wb25lbnQoXCJNYWluXCIpLm9uUGxheWVyU2hvb3QocG9zWCwgcG9zWSk7XHJcbiAgICB9LFxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZilcclxuICAgIHsgIFxyXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAzKSAvLyBFbmVteSB0YWcgaXMgM1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFpbkdhbWUuZ2V0Q29tcG9uZW50KFwiTWFpblwiKS5nYW1lT3ZlcigpOyAvLyBUT0RPXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5Mb3NlU291bmQsZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sICAgXHJcbiAgICBvbkxvYWQgKCkgeyAgXHJcbiAgICAgICAgbWFpbkdhbWUgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25Mb2FkXCIsIHRoaXMucGxheWVySUQsIFwiKysrXCIsIG1haW5HYW1lLmdldENvbXBvbmVudChcIk1haW5cIikucGxheWVySUQpOyAgICAgICBcclxuICAgICAgICBpZih0aGlzLnBsYXllcklEID09IG1haW5HYW1lLmdldENvbXBvbmVudChcIk1haW5cIikucGxheWVySUQpICAgICAgICBcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIG1haW5HYW1lLm9uKCdtb3VzZW1vdmUnLCB0aGlzLnBsYXllck1vdmVtZW50LCB0aGlzKTtcclxuICAgICAgICAgICAgbWFpbkdhbWUub24oJ21vdXNlZG93bicsIHRoaXMucGxheWVyU2hvb3QsIHRoaXMpOyAgXHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICB2YXIgbWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlOyAgICAgICBcclxuICAgIH0sXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==