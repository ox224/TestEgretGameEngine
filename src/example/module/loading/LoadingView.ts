class LoadingView extends BaseEuiView{
    public constructor($controller:BaseController,$parent:eui.Group) {
        super($controller,$parent);

        this.skinName = "resource/skins/LoadingUISkin.exml";
    }

    public txtMsg:eui.Label;
    public setProgress(current:number,total:number) {
        this.txtMsg.text = "资源拼命加载中……" + current + " / " + total;
    }
}