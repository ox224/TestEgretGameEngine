
class SceneManager extends SingtonClass {
    private _scene:any;
    private _currScene:any;

    public constructor() {
        super();
        this._scene = {};
    }

    public register(key:number,scene:BaseScene) :void {
        this._scene[key] = scene;
    }

    public runScene(key:number,...param:any[]):void {
        var nowScene:BaseScene = this._scene[key];
        if (nowScene == null) {
            Log.warn("场景" + key + "不存在");
            return;
        }
    }



}