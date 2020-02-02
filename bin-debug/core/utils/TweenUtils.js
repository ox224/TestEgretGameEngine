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
var TweenUtils = (function (_super) {
    __extends(TweenUtils, _super);
    function TweenUtils() {
        return _super.call(this) || this;
    }
    TweenUtils.prototype.pause = function () {
        var tweens = egret.Tween["_tweens"];
        for (var i = 0, l = tweens.length; i < l; i++) {
            var tween_2 = tweens[i];
            tween_2.paused = true;
        }
    };
    /**
     * 恢复
     */
    TweenUtils.prototype.resume = function () {
        var tweens = egret.Tween["_tweens"];
        for (var i = 0, l = tweens.length; i < l; i++) {
            var tween_2 = tweens[i];
            tween_2.paused = false;
        }
    };
    return TweenUtils;
}(SingtonClass));
__reflect(TweenUtils.prototype, "TweenUtils");
