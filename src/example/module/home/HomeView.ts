
    class HomeView extends BaseEuiView{
        public constructor ($controller:BaseController,$parent:eui.Group) {
            super($controller,$parent);

            this.skinName = "resource/skins/GuiScreenSkin.exml";
        }

        public menuBtn:eui.ToggleButton;
        public menu:Menu;

        public friendBtn:eui.Image;
        public shopBtn:eui.Image;
        public warehouseBtn:eui.Image;
        public factoryBtn:eui.Image;
        public moreBtn:eui.Image;

        public initUI(): void {
            super.isInit();

            this.menu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.menuClickHandler,this);
            this.menuBtn.addEventListener(egret.Event.CHANGE,this.menuBtnChangeHandler,this);
            this.friendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.friendClickHandler,this);
            this.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shopClickHandler,this);
            this.warehouseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.warehouseClickHandler,this);
            this.factoryBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.factoryClickHandler,this);
            this.moreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.moreClickHandler,this);
        }

        private playSound():void {
            App.SoundManager.playEffect("sound_dianji");
        }

        private menuBtnChangeHandler(e:egret.Event):void {
            this.playSound();
            if (this.menu) {
                this.menu.visible = this.menuBtn.selected;
            }
        }

        private friendClickHandler(e:egret.TouchEvent):void {
            this.playSound();
            App.ViewManager.open(ViewConsts.Friend);
        }

        private shopClickHandler(e:egret.TouchEvent):void{
            this.playSound();
            App.ViewManager.open(ViewConsts.Shop);
        }

        private warehouseClickHandler(e:egret.TouchEvent):void {
            this.playSound();
            App.ViewManager.open(ViewConsts.Warehouse);
        }

        private factoryClickHandler(e:egret.TouchEvent):void {
            this.playSound();
            App.ViewManager.open(ViewConsts.Factory);
        }

        private moreClickHandler(e:egret.TouchEvent):void {
            this.playSound();
        }


        private menuClickHandler(e:egret.TouchEvent):void {
            console.log(e.target);
            if (e.target == this.menu.taskBtn) {
                this.playSound();
                App.ViewManager.open(ViewConsts.Task);
                this.menuBtn.selected = false;
                this.menu.visible = false;
            }
            else if (e.target == this.menu.dailyBtn){
                this.playSound();
                App.ViewManager.open(ViewConsts.Daily);
                this.menuBtn.selected = false;
            }
            else if (e.target == this.menu.mailBtn){
                this.playSound();
                App.ViewManager.open(ViewConsts.Mail);
                this.menuBtn.selected = false;
                this.menu.visible = false;
            }
        }

    }