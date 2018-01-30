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
var TitleWindow = (function (_super) {
    __extends(TitleWindow, _super);
    function TitleWindow() {
        var _this = _super.call(this) || this;
        var outter = new TitleOutterPanel();
        _this.panel = outter.innerPanel;
        _this.addChild(outter);
        outter.x = 0;
        outter.y = 0;
        return _this;
    }
    TitleWindow.prototype.update = function () {
        this.panel.onUpdate();
    };
    return TitleWindow;
}(IWindow));
__reflect(TitleWindow.prototype, "TitleWindow");