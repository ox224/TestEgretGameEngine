class StageUtils extends SingtonClass {

    public constructor() {
        super();
    }

    public getWidth():number {
        return this.getStage().stageWidth;
    }

    public getHeight():number {
        return this.getStage().stageHeight;
    }

    /**
     *获取stage对象
     */
    public getStage():egret.Stage {
        return egret.MainContext.instance.stage;
    }
}