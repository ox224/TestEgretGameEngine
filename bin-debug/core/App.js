var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var runEgret = egret.runEgret;
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "ControllerManager", {
        get: function () {
            return ControllerManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ResourceUtils", {
        get: function () {
            return ResourceUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DebugUtils", {
        get: function () {
            return DebugUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SoundManager", {
        /**
         * 音乐管理类
         * @constructor
         */
        get: function () {
            return SoundManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ViewManager", {
        get: function () {
            return ViewManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EasyLoading", {
        get: function () {
            return EasyLoading.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StageUtils", {
        get: function () {
            return StageUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DisplayUtils", {
        get: function () {
            return DisplayUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TimerManager", {
        /**
         * 统一的计时器和帧刷管理器
         * @constructor
         */
        get: function () {
            return TimerManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "TweenUtils", {
        get: function () {
            return TweenUtils.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SceneManager", {
        get: function () {
            return SceneManager.getSingtonInstance();
        },
        enumerable: true,
        configurable: true
    });
    App.ProxyUserFlag = "";
    App.GlobalData = null;
    App.ProtoConfig = null;
    return App;
}());
__reflect(App.prototype, "App");
