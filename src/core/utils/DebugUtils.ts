class DebugUtils extends SingtonClass {
    private _isOpen:boolean;
    private _startTimes:any;

    public get isDebug():boolean {
        return this._isOpen;
    }

    public start(key:string):void {
        if (!this._isOpen) {
            return;
        }

        this._startTimes[key] = egret.getTimer();
    }

}