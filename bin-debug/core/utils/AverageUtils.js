var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AverageUtils = (function () {
    function AverageUtils() {
        this.nums = [];
        this.numsLen = 0;
        this.numSum = 0;
    }
    return AverageUtils;
}());
__reflect(AverageUtils.prototype, "AverageUtils");
