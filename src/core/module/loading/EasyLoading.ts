class EasyLoading extends SingtonClass{

    private content:egret.Sprite = null;
    private speed:number = 10 / (1000 / 60);
    private averageUtils:AverageUtils;
    private uiImageContainer:egret.DisplayObjectContainer

    constructor() {
        super();
        this.init();
    }

    private init():void {
        this.averageUtils = new AverageUtils()

        this.content = new egret.Sprite();
        this.content.graphics.beginFill(0x000000,0.2);
        this.content.graphics.drawRect(0,0,App.StageUtils.getWidth(),App.StageUtils.getHeight());
    }
}