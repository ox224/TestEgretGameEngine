var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Log = (function () {
    function Log() {
    }
    Log.debug = function () {
        var optionalParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            optionalParams[_i] = arguments[_i];
        }
        if (!App.DebugUtils.isDebug) {
            return;
        }
        var message = "[Debug]" + optionalParams.shift();
        console.log.apply(console, [message].concat(optionalParams));
    };
    Log.warn = function () {
        var optionalParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            optionalParams[_i] = arguments[_i];
        }
        var message = "[Warn]" + optionalParams.shift();
        console.log.apply(console, [message].concat(optionalParams));
    };
    return Log;
}());
__reflect(Log.prototype, "Log");
