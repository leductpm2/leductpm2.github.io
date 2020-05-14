
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/EnemyMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ea72/oHmlAy52mDo+6BYVC', 'EnemyMove');
// Scripts/SingleplayerScripts/EnemyMove.js

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
    EnemySpeed: {
      // ATTRIBUTES:
      "default": 1,
      type: cc.Integer,
      serializable: true // optional, default is true

    },
    ExplosionEffect: {
      "default": null,
      type: cc.Prefab,
      serializable: true
    },
    ExplosionSound: {
      "default": null,
      type: cc.AudioClip,
      serializable: true
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 2) // Player bullet tag is 2
      {
        var explosiveEffect = cc.instantiate(this.ExplosionEffect);
        explosiveEffect.setPosition(this.node.position.x, this.node.position.y);
        parent.addChild(explosiveEffect);
        cc.audioEngine.playEffect(this.ExplosionSound, false);
        this.node.parent.getComponent("Main").updateScore(); // TODO

        this.node.destroy();
      }
  },
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
  },
  start: function start() {//var actionBy = cc.moveTo(1, cc.v2(newEnemy.position.x, newEnemy.position.y - this.EnemySpeed));    
  },
  update: function update(dt) {
    this.node.setPosition(this.node.position.x, this.node.position.y - this.EnemySpeed);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU2luZ2xlcGxheWVyU2NyaXB0c1xcRW5lbXlNb3ZlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiRW5lbXlTcGVlZCIsInR5cGUiLCJJbnRlZ2VyIiwic2VyaWFsaXphYmxlIiwiRXhwbG9zaW9uRWZmZWN0IiwiUHJlZmFiIiwiRXhwbG9zaW9uU291bmQiLCJBdWRpb0NsaXAiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwidGFnIiwiZXhwbG9zaXZlRWZmZWN0IiwiaW5zdGFudGlhdGUiLCJzZXRQb3NpdGlvbiIsIm5vZGUiLCJwb3NpdGlvbiIsIngiLCJ5IiwicGFyZW50IiwiYWRkQ2hpbGQiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJnZXRDb21wb25lbnQiLCJ1cGRhdGVTY29yZSIsImRlc3Ryb3kiLCJvbkxvYWQiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0EsaUJBQVMsQ0FGRDtBQUdSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sT0FIRDtBQUlSQyxNQUFBQSxZQUFZLEVBQUUsSUFKTixDQUljOztBQUpkLEtBREo7QUFPUkMsSUFBQUEsZUFBZSxFQUFFO0FBQ2IsaUJBQVMsSUFESTtBQUViSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1MsTUFGSTtBQUdiRixNQUFBQSxZQUFZLEVBQUU7QUFIRCxLQVBUO0FBWVJHLElBQUFBLGNBQWMsRUFBRTtBQUNaLGlCQUFTLElBREc7QUFFWkwsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNXLFNBRkc7QUFHWkosTUFBQUEsWUFBWSxFQUFFO0FBSEY7QUFaUixHQUhQO0FBc0JMO0FBQ0FLLEVBQUFBLGdCQXZCSyw0QkF1QllDLEtBdkJaLEVBdUJtQkMsSUF2Qm5CLEVBd0JMO0FBQ0ksUUFBR0QsS0FBSyxDQUFDRSxHQUFOLElBQWEsQ0FBaEIsRUFBbUI7QUFDbkI7QUFDSSxZQUFJQyxlQUFlLEdBQUdoQixFQUFFLENBQUNpQixXQUFILENBQWUsS0FBS1QsZUFBcEIsQ0FBdEI7QUFDQVEsUUFBQUEsZUFBZSxDQUFDRSxXQUFoQixDQUE0QixLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLENBQS9DLEVBQWtELEtBQUtGLElBQUwsQ0FBVUMsUUFBVixDQUFtQkUsQ0FBckU7QUFDQUMsUUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCUixlQUFoQjtBQUVBaEIsUUFBQUEsRUFBRSxDQUFDeUIsV0FBSCxDQUFlQyxVQUFmLENBQTBCLEtBQUtoQixjQUEvQixFQUE4QyxLQUE5QztBQUNBLGFBQUtTLElBQUwsQ0FBVUksTUFBVixDQUFpQkksWUFBakIsQ0FBOEIsTUFBOUIsRUFBc0NDLFdBQXRDLEdBTkosQ0FNeUQ7O0FBQ3JELGFBQUtULElBQUwsQ0FBVVUsT0FBVjtBQUNIO0FBQ0osR0FuQ0k7QUFxQ0xDLEVBQUFBLE1BckNLLG9CQXFDSztBQUNOOUIsSUFBQUEsRUFBRSxDQUFDK0IsUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0MsT0FBbEMsR0FBNEMsSUFBNUM7QUFDSCxHQXZDSTtBQXlDTEMsRUFBQUEsS0F6Q0ssbUJBeUNJLENBQ0w7QUFFSCxHQTVDSTtBQThDTEMsRUFBQUEsTUE5Q0ssa0JBOENHQyxFQTlDSCxFQThDTztBQUNSLFNBQUtqQixJQUFMLENBQVVELFdBQVYsQ0FBc0IsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxDQUF6QyxFQUE0QyxLQUFLRixJQUFMLENBQVVDLFFBQVYsQ0FBbUJFLENBQW5CLEdBQXVCLEtBQUtsQixVQUF4RTtBQUNIO0FBaERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBFbmVteVNwZWVkOiB7XHJcbiAgICAgICAgICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsIFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLCBcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICB9LCBcclxuICAgICAgICBFeHBsb3Npb25FZmZlY3Q6IHsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLCBcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLCBcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgRXhwbG9zaW9uU291bmQ6IHsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLCBcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLCBcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZilcclxuICAgIHsgIFxyXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAyKSAvLyBQbGF5ZXIgYnVsbGV0IHRhZyBpcyAyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZXhwbG9zaXZlRWZmZWN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5FeHBsb3Npb25FZmZlY3QpO1xyXG4gICAgICAgICAgICBleHBsb3NpdmVFZmZlY3Quc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgcGFyZW50LmFkZENoaWxkKGV4cGxvc2l2ZUVmZmVjdCk7ICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5FeHBsb3Npb25Tb3VuZCxmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiTWFpblwiKS51cGRhdGVTY29yZSgpOyAvLyBUT0RPXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgXHJcblxyXG4gICAgb25Mb2FkICgpIHsgICAgXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlOyAgICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy92YXIgYWN0aW9uQnkgPSBjYy5tb3ZlVG8oMSwgY2MudjIobmV3RW5lbXkucG9zaXRpb24ueCwgbmV3RW5lbXkucG9zaXRpb24ueSAtIHRoaXMuRW5lbXlTcGVlZCkpOyAgICBcclxuICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55IC0gdGhpcy5FbmVteVNwZWVkKTsgICAgICAgIFxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==