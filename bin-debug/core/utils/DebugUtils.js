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
var DebugUtils = (function (_super) {
    __extends(DebugUtils, _super);
    function DebugUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DebugUtils.prototype, "isDebug", {
        get: function () {
            return this._isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DebugUtils.prototype.start = function (key) {
        if (!this._isOpen) {
            return;
        }
        this._startTimes[key] = egret.getTimer();
    };
    return DebugUtils;
}(SingtonClass));
__reflect(DebugUtils.prototype, "DebugUtils");
