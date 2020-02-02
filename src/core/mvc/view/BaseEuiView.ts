    class BaseEuiView extends eui.Component implements  IBaseView{

        private _controller:BaseController;
        private _myParent:egret.DisplayObjectContainer
        private _isInit:boolean;
        private _resource:string[] = null;

        public constructor( $controller:BaseController,$parent:egret.DisplayObjectContainer){
            super();
            this._controller = $controller;
            this._myParent = $parent;
            this._isInit = false;

            this.percentHeight = 100;
            this.percentWidth = 100;
        }

        public get myParent():egret.DisplayObjectContainer {
            return this._myParent;
        }

        public setResource(resource:string[]):void {
            this._resource = resource;
        }

        public isInit(): boolean {
            return this._isInit;
        }

        public applyFunc(key: any, ...param): any {
            return this._controller.applyFunc.apply(this._controller,arguments);
        }

        public isShow(): boolean {
            return this.stage != null && this.visible;
        }

        public addToParent(): void {
            this._myParent.addChild(this);
        }

        public removeFromParent(): void {
            App.DisplayUtils.removeFromParent(this);
        }

        public initUI(): void {

        }

        public initDate(): void {

        }

        public open(...param): void {

        }

        public destroy(): void {

        }

        public loadResource(loadComplete: Function, initComplete: Function): void {

        }

        public setVisible(value: boolean): void {

        }

    }