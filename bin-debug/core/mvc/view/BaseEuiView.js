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
var BaseEuiView = (function (_super) {
    __extends(BaseEuiView, _super);
    function BaseEuiView($controller, $parent) {
        var _this = _super.call(this) || this;
        _this._resource = null;
        _this._controller = $controller;
        _this._myParent = $parent;
        _this._isInit = false;
        _this.percentHeight = 100;
        _this.percentWidth = 100;
        return _this;
    }
    Object.defineProperty(BaseEuiView.prototype, "myParent", {
        get: function () {
            return this._myParent;
        },
        enumerable: true,
        configurable: true
    });
    BaseEuiView.prototype.setResource = function (resource) {
        this._resource = resource;
    };
    BaseEuiView.prototype.isInit = function () {
        return this._isInit;
    };
    BaseEuiView.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        return this._controller.applyFunc.apply(this._controller, arguments);
    };
    BaseEuiView.prototype.isShow = function () {
        return this.stage != null && this.visible;
    };
    BaseEuiView.prototype.addToParent = function () {
        this._myParent.addChild(this);
    };
    BaseEuiView.prototype.removeFromParent = function () {
        App.DisplayUtils.removeFromParent(this);
    };
    BaseEuiView.prototype.initUI = function () {
    };
    BaseEuiView.prototype.initDate = function () {
    };
    BaseEuiView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
    };
    BaseEuiView.prototype.destroy = function () {
    };
    BaseEuiView.prototype.loadResource = function (loadComplete, initComplete) {
    };
    BaseEuiView.prototype.setVisible = function (value) {
    };
    return BaseEuiView;
}(eui.Component));
__reflect(BaseEuiView.prototype, "BaseEuiView", ["IBaseView"]);
