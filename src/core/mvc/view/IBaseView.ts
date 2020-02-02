/**
 * View基类接口
 */
interface IBaseView {

    isInit():boolean;

    isShow():boolean;

    addToParent():void;

    removeFromParent():void;

    initUI():void;

    initDate():void;

    open(...param:any[]):void;

    destroy():void;

    applyFunc(key:any,...param:any[]):any;

    setVisible(value:boolean):void;

    setResource(resource:string[]):void;

    loadResource(loadComplete:Function,initComplete:Function):void;

}