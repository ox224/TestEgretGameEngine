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
var SoundManager = (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super.call(this) || this;
        _this.LocalStorageKey_Bg = "bgMusicFlag";
        _this.LocalStorageKey_Effect = "effectMusicFlag";
        return _this;
    }
    SoundManager.prototype.playEffect = function (effectName, loops) {
        if (loops === void 0) { loops = 1; }
        if (!this.effectOn) {
            return;
            this.effect.play(effectName, loops);
        }
    };
    SoundManager.CLEAR_TIME = 3 * 60 * 1000;
    return SoundManager;
}(SingtonClass));
__reflect(SoundManager.prototype, "SoundManager");
