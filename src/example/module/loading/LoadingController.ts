class LoadingController extends BaseController{

        private loadingView:LoadingView;

        public constructor() {
                super();

                this.loadingView = new LoadingView()
                App.ViewManager
        }
}