var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseScene = (function () {
    function BaseScene() {
        this._layer = new Array();
    }
    /**
     * 退出Scene调用
     */
    BaseScene.prototype.onExit = function () {
        App.ViewManager;
    };
    /**
     * 进入Scene调用
     */
    BaseScene.prototype.onEnter = function () {
    };
    return BaseScene;
}());
__reflect(BaseScene.prototype, "BaseScene");
