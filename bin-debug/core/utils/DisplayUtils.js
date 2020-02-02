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
var DisplayUtils = (function (_super) {
    __extends(DisplayUtils, _super);
    function DisplayUtils() {
        return _super.call(this) || this;
    }
    /**
     * 创建Bitmap
     * @param resName
     */
    DisplayUtils.prototype.createBitmap = function (resName) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(resName);
        result.texture = texture;
        return result;
    };
    DisplayUtils.prototype.removeFromParent = function (child) {
        if (child.parent == null) {
            return;
            child.parent.removeChild(child);
        }
    };
    return DisplayUtils;
}(SingtonClass));
__reflect(DisplayUtils.prototype, "DisplayUtils");
