class LayerManager {

    public static Game_Bg:BaseSpriteLayer = new BaseSpriteLayer();

    public static Game_Main:BaseSpriteLayer = new BaseSpriteLayer();

    public static UI_Main:BaseEuiLayer = new BaseEuiLayer();

    public static UI_Popup:BaseEuiLayer = new BaseEuiLayer();
}

class BaseSpriteLayer extends egret.DisplayObjectContainer{
    public constructor() {
        super();

        this.touchEnabled = false;
    }
}

class BaseEuiLayer extends eui.UILayer {
    public constructor(){
        super();

        this.percentWidth = 100;
        this.percentHeight = 100;

        this.touchEnabled = false;
    }
}