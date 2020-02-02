var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StageUtils = (function (_super) {
    __extends(StageUtils, _super);
    function StageUtils() {
        return _super.call(this) || this;
    }
    StageUtils.prototype.getWidth = function () {
        return this.getStage().stageWidth;
    };
    StageUtils.prototype.getHeight = function () {
        return this.getStage().stageHeight;
    };
    /**
     *获取stage对象
     */
    StageUtils.prototype.getStage = function () {
        return egret.MainContext.instance.stage;
    };
    return StageUtils;
}(SingtonClass));
__reflect(StageUtils.prototype, "StageUtils");
