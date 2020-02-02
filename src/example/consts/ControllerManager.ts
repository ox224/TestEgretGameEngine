class ControllerManager extends SingtonClass{

    private _modules:any;

    public constructor(){
        super();
        this._modules = {};//给变量赋入对象格式
    }

    /**
     * 清空处理
     */
    public clear():void {
        this._modules = {};
    }

    public register(key:number,control:BaseController):void {
        if (this.isExists(key))
            return;

        this._modules[key] = control;
    }


    public isExists(key:number):boolean {
        return this._modules[key] != null;
    }

    /**
     * 跨模块消息传递
      */
    public applyFunc(controllerD:number,key:number,...param:any[]):any {
        var manager:BaseController = this._modules[controllerD];
        if (manager) {
            var param = [];
            for (var i = 1; i < arguments.length; i++) {
                param[i - 1] = arguments[i];
            }
            return manager.applyFunc(manager,param);
        } else {
            Log.warn("模块" + controllerD + "不存在");
            return null;
        }
    }

}