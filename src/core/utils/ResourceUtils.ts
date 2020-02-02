
class ResourceUtils extends SingtonClass{

    private _configs:Array<any>;
    private _onConfigComplete:Function;
    private _onConfigCompleteTarget:any;

    private _groups:any;
    private _groupIndex:number = 0;
    private _itemLoadErrorFunction:Function;


    public constructor() {
        super();

        this._configs = new Array<any>();
        this._groups = {};
    }

    public addConfig(jsonPath:string,filePath:string):void {
        this._configs.push([jsonPath,filePath]);
    }

    public loadConfig($onConfigComplete:Function,$onConfigCompleteTarget:any):void {
        this._onConfigComplete = $onConfigComplete;
        this._onConfigCompleteTarget = $onConfigCompleteTarget;
        this.loadNextConfig();
    }

    public loadNextConfig():void {
        if (this._configs.length == 0) {
            this._onConfigComplete.call(this._onConfigCompleteTarget);
            this._onConfigComplete = null;
            this._onConfigCompleteTarget = null;
            return;
        }
    }
}