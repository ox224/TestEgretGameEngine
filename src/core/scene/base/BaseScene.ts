class BaseScene {
    private _layer:Array<egret.DisplayObjectContainer>;

    public constructor() {
        this._layer = new Array<egret.DisplayObjectContainer>();
    }

    /**
     * 退出Scene调用
     */
    public onExit():void {
        App.ViewManager
    }


    /**
     * 进入Scene调用
     */
    public onEnter():void {

    }
}