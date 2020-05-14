
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ActionUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97f28Cl++pJTIVxceZpn2jm', 'ActionUI');
// Scripts/SingleplayerScripts/ActionUI.js

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
    Point: {
      "default": null,
      type: cc.Node,
      serializable: true
    },
    RestartButton: {
      "default": null,
      type: cc.Button,
      serializable: true
    }
  },
  // LIFE-CYCLE CALLBACKS:
  updateScore: function updateScore(point) {
    this.Point.getComponent(cc.Label).string = point;
  },
  showGameOver: function showGameOver() {
    this.node.getChildByName("GameOver").active = true;
    this.node.getChildByName("ScoreBoard").active = false;
    this.node.getChildByName("GameOver").getChildByName("Point").getComponent(cc.Label).string = "Point: " + this.Point.getComponent(cc.Label).string;
  },
  hideGameOver: function hideGameOver() {
    this.node.getChildByName("GameOver").active = false;
  },
  restartCallback: function restartCallback(button) {
    // do whatever you want with button
    // In addition, attention to this way registered events, can not pass customEventData
    console.log("restartCallback");
    cc.director.loadScene("Level1");
  },
  onLoad: function onLoad() {
    this.node.getChildByName("GameOver").active = false;
    this.RestartButton.node.on('click', this.restartCallback, this);
    cc.director.preloadScene("Level1");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU2luZ2xlcGxheWVyU2NyaXB0c1xcQWN0aW9uVUkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJQb2ludCIsInR5cGUiLCJOb2RlIiwic2VyaWFsaXphYmxlIiwiUmVzdGFydEJ1dHRvbiIsIkJ1dHRvbiIsInVwZGF0ZVNjb3JlIiwicG9pbnQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsInNob3dHYW1lT3ZlciIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImFjdGl2ZSIsImhpZGVHYW1lT3ZlciIsInJlc3RhcnRDYWxsYmFjayIsImJ1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm9uTG9hZCIsIm9uIiwicHJlbG9hZFNjZW5lIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxJQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQUZOO0FBR0hDLE1BQUFBLFlBQVksRUFBRTtBQUhYLEtBREM7QUFNUkMsSUFBQUEsYUFBYSxFQUFFO0FBQ1gsaUJBQVMsSUFERTtBQUVYSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1MsTUFGRTtBQUdYRixNQUFBQSxZQUFZLEVBQUU7QUFISDtBQU5QLEdBSFA7QUFnQkw7QUFDQUcsRUFBQUEsV0FqQkssdUJBaUJPQyxLQWpCUCxFQWtCTDtBQUNJLFNBQUtQLEtBQUwsQ0FBV1EsWUFBWCxDQUF3QlosRUFBRSxDQUFDYSxLQUEzQixFQUFrQ0MsTUFBbEMsR0FBMkNILEtBQTNDO0FBQ0gsR0FwQkk7QUFxQkxJLEVBQUFBLFlBckJLLDBCQXNCTDtBQUNJLFNBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixVQUF6QixFQUFxQ0MsTUFBckMsR0FBOEMsSUFBOUM7QUFDQSxTQUFLRixJQUFMLENBQVVDLGNBQVYsQ0FBeUIsWUFBekIsRUFBdUNDLE1BQXZDLEdBQWdELEtBQWhEO0FBRUEsU0FBS0YsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFVBQXpCLEVBQXFDQSxjQUFyQyxDQUFvRCxPQUFwRCxFQUE2REwsWUFBN0QsQ0FBMEVaLEVBQUUsQ0FBQ2EsS0FBN0UsRUFBb0ZDLE1BQXBGLEdBQTZGLFlBQVksS0FBS1YsS0FBTCxDQUFXUSxZQUFYLENBQXdCWixFQUFFLENBQUNhLEtBQTNCLEVBQWtDQyxNQUEzSTtBQUNILEdBM0JJO0FBNEJMSyxFQUFBQSxZQTVCSywwQkE2Qkw7QUFDSSxTQUFLSCxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsVUFBekIsRUFBcUNDLE1BQXJDLEdBQThDLEtBQTlDO0FBQ0gsR0EvQkk7QUFnQ0xFLEVBQUFBLGVBaENLLDJCQWdDV0MsTUFoQ1gsRUFnQ21CO0FBQ3BCO0FBQ0E7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQXZCLElBQUFBLEVBQUUsQ0FBQ3dCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixRQUF0QjtBQUNILEdBckNJO0FBc0NMQyxFQUFBQSxNQXRDSyxvQkFzQ0s7QUFDTixTQUFLVixJQUFMLENBQVVDLGNBQVYsQ0FBeUIsVUFBekIsRUFBcUNDLE1BQXJDLEdBQThDLEtBQTlDO0FBQ0EsU0FBS1YsYUFBTCxDQUFtQlEsSUFBbkIsQ0FBd0JXLEVBQXhCLENBQTJCLE9BQTNCLEVBQW9DLEtBQUtQLGVBQXpDLEVBQTBELElBQTFEO0FBQ0FwQixJQUFBQSxFQUFFLENBQUN3QixRQUFILENBQVlJLFlBQVosQ0FBeUIsUUFBekI7QUFDSCxHQTFDSTtBQTRDTEMsRUFBQUEsS0E1Q0ssbUJBNENJLENBRVIsQ0E5Q0ksQ0FnREw7O0FBaERLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBQb2ludDogeyAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLCBcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUmVzdGFydEJ1dHRvbjogeyAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5CdXR0b24sIFxyXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICB1cGRhdGVTY29yZShwb2ludClcclxuICAgIHtcclxuICAgICAgICB0aGlzLlBvaW50LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcG9pbnQ7XHJcbiAgICB9LFxyXG4gICAgc2hvd0dhbWVPdmVyKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJHYW1lT3ZlclwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNjb3JlQm9hcmRcIikuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVPdmVyXCIpLmdldENoaWxkQnlOYW1lKFwiUG9pbnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlBvaW50OiBcIiArIHRoaXMuUG9pbnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgO1xyXG4gICAgfSxcclxuICAgIGhpZGVHYW1lT3ZlcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiR2FtZU92ZXJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgcmVzdGFydENhbGxiYWNrKGJ1dHRvbikge1xyXG4gICAgICAgIC8vIGRvIHdoYXRldmVyIHlvdSB3YW50IHdpdGggYnV0dG9uXHJcbiAgICAgICAgLy8gSW4gYWRkaXRpb24sIGF0dGVudGlvbiB0byB0aGlzIHdheSByZWdpc3RlcmVkIGV2ZW50cywgY2FuIG5vdCBwYXNzIGN1c3RvbUV2ZW50RGF0YVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdGFydENhbGxiYWNrXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxldmVsMVwiKTtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVPdmVyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuUmVzdGFydEJ1dHRvbi5ub2RlLm9uKCdjbGljaycsIHRoaXMucmVzdGFydENhbGxiYWNrLCB0aGlzKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoXCJMZXZlbDFcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19