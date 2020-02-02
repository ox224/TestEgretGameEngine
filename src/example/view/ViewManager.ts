class ViewManager extends SingtonClass {

    private _views: any;
    private _opens: Array<number>;

    public constructor() {
        super();
        this._views = {};
        this._opens = [];
    }

    public getView(key: number): IBaseView {
        return this._views[key];
    }

    /**
     * 开启面板
     * @param key
     * @param param
     */

    public open(key: number, ...param: any[]): IBaseView {
        var view: IBaseView = this.getView(key);
        if (view == null) {
            Log.warn("UI_" + key + "不存在");
            return;
        }

        if (view.isShow()) {
            view.open(...param);
            return view;
        }

        if (view.isInit()) {
            view.addToParent();
            view.open(...param);
        } else {
            // App.EasyLoading.showLoad
        }
    }

    public closeAll(): void {
        while (this._opens.length) {
            this.close(this._opens[0]);
        }
    }

    /**
     * 关闭面板
     * @param key
     * @param param
     */
    public close(key: number, ...param: any[]): void {
        if (!this.isShow(key)) {
            return;
        }
    }

    public isShow(key: number): boolean {
        return this._opens.indexOf(key) != -1;
    }

    public register(key:number,view:IBaseView):void {
        if (view == null) {
            return;
        }
        if (this._views[key]) {
            return;
        }
        this._views[key] = view;
    }



}