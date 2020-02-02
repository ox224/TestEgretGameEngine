class TimerManager extends SingtonClass{

    private _handlers:Array<TimerHandler>;
    private _delHandlers:Array<TimerHandler>;
    private _currTime:number;
    private _currFrame:number;
    private _count:number;
    private _timeScale:number;
    private _isPause:boolean;
    private _pauseTime:number;

    public constructor() {
        super();
        this._handlers = new Array<TimerHandler>();
        this._delHandlers = new Array<TimerHandler>();
        this._currTime = egret.getTimer();
        this._currFrame = 0;
        this._count = 0;
        this._timeScale = 1;

        egret.Ticker.getInstance().register(this.onEnterFrame,this);
    }

    private onEnterFrame():void {
        if (this._isPause) {
            return;
        }
        this._currFrame++;
        this._currTime = egret.getTimer();
        App.DebugUtils.start("TimerManager: ")
    }

    /**
     * 暂停
     */
    public pause():void {
        if (this._isPause) {
            return;
        }
        this._isPause = true;
        this._pauseTime = egret.getTimer();
    }

    public resume():void {
        if (!this._isPause) {
            return;
        }
        this._isPause = false;
        this._currTime = egret.getTimer();
        var gap = this._currTime - this._pauseTime;
        for (var i:number = 0; i < this._count;i++) {
            var handler:TimerHandler = this._handlers[i];
            handler.dealTime += gap;
            if (!handler.userFrame) {
                handler.exeTime += gap;
            }
        }
    }

}

class TimerHandler {

    //上次的执行时间
    public dealTime:number = 0;

    //使用帧率
    public userFrame:boolean;

    //执行时间
    public exeTime:number = 0;
}