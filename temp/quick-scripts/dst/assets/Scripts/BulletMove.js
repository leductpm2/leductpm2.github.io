
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BulletMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cde6EJ801PBb6K3PB4HqAZ', 'BulletMove');
// Scripts/BulletMove.js

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
    BulletSpeed: {
      // ATTRIBUTES:
      "default": 3,
      type: cc.Integer,
      serializable: true // optional, default is true

    },
    playerID: {
      "default": "",
      visible: false
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 3) // Enemy tag is 2
      {
        this.node.destroy();
      }
  },
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
  },
  start: function start() {},
  update: function update(dt) {
    this.node.setPosition(this.node.position.x, this.node.position.y + this.BulletSpeed);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQnVsbGV0TW92ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkJ1bGxldFNwZWVkIiwidHlwZSIsIkludGVnZXIiLCJzZXJpYWxpemFibGUiLCJwbGF5ZXJJRCIsInZpc2libGUiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwidGFnIiwibm9kZSIsImRlc3Ryb3kiLCJvbkxvYWQiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsInNldFBvc2l0aW9uIiwicG9zaXRpb24iLCJ4IiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNUO0FBQ0EsaUJBQVMsQ0FGQTtBQUdUQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sT0FIQTtBQUlUQyxNQUFBQSxZQUFZLEVBQUUsSUFKTCxDQUlhOztBQUpiLEtBREw7QUFPUkMsSUFBQUEsUUFBUSxFQUFDO0FBQ0wsaUJBQVMsRUFESjtBQUVMQyxNQUFBQSxPQUFPLEVBQUU7QUFGSjtBQVBELEdBSFA7QUFnQkw7QUFDQUMsRUFBQUEsZ0JBakJLLDRCQWlCWUMsS0FqQlosRUFpQm1CQyxJQWpCbkIsRUFrQkw7QUFDSSxRQUFHRCxLQUFLLENBQUNFLEdBQU4sSUFBYSxDQUFoQixFQUFtQjtBQUNuQjtBQUNJLGFBQUtDLElBQUwsQ0FBVUMsT0FBVjtBQUNIO0FBQ0osR0F2Qkk7QUF5QkxDLEVBQUFBLE1BekJLLG9CQXlCSztBQUNOaEIsSUFBQUEsRUFBRSxDQUFDaUIsUUFBSCxDQUFZQyxtQkFBWixHQUFrQ0MsT0FBbEMsR0FBNEMsSUFBNUM7QUFDSCxHQTNCSTtBQTZCTEMsRUFBQUEsS0E3QkssbUJBNkJJLENBQ1IsQ0E5Qkk7QUFnQ0xDLEVBQUFBLE1BaENLLGtCQWdDR0MsRUFoQ0gsRUFnQ087QUFDUixTQUFLUixJQUFMLENBQVVTLFdBQVYsQ0FBc0IsS0FBS1QsSUFBTCxDQUFVVSxRQUFWLENBQW1CQyxDQUF6QyxFQUE0QyxLQUFLWCxJQUFMLENBQVVVLFFBQVYsQ0FBbUJFLENBQW5CLEdBQXVCLEtBQUt0QixXQUF4RTtBQUNIO0FBbENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBCdWxsZXRTcGVlZDoge1xyXG4gICAgICAgICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgICAgICBkZWZhdWx0OiAzLCBcclxuICAgICAgICAgICAgdHlwZTogY2MuSW50ZWdlciwgXHJcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgcGxheWVySUQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBcIlwiLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9ICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZilcclxuICAgIHsgIFxyXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAzKSAvLyBFbmVteSB0YWcgaXMgMlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7ICAgXHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlOyAgICAgICAgIFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc3RhcnQgKCkgeyAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSArIHRoaXMuQnVsbGV0U3BlZWQpOyAgICAgICAgXHJcbiAgICB9LFxyXG59KTsiXX0=