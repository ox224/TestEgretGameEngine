
class BaseController {

    private _messages:any;

    // private _model:BaseModel;

    public constructor(){
        this._messages = {};
    }

    public applyFunc(key:any,...param:any[]):any {
        var listen:any = this._messages[key];
        if (listen) {
            return listen[0].apply(listen[1],param);
        } else {
            Log.warn("消息" + key + "不存在侦听");
        }
    }


}
