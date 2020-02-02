import runEgret = egret.runEgret;

class App {

    public static ProxyUserFlag:string = "";

    public static GlobalData:any = null;

    public static ProtoConfig:any = null;

    public static get ControllerManager():ControllerManager {
        return ControllerManager.getSingtonInstance();
    }

    public static get ResourceUtils():ResourceUtils{
        return ResourceUtils.getSingtonInstance();
    }


    public static get DebugUtils():DebugUtils {
        return DebugUtils.getSingtonInstance();
    }

    /**
     * 音乐管理类
     * @constructor
     */
    public static get SoundManager():SoundManager {
        return SoundManager.getSingtonInstance();
    }

    public static get ViewManager():ViewManager {
        return ViewManager.getSingtonInstance();
    }

    public static get EasyLoading():EasyLoading {
        return EasyLoading.getSingtonInstance();
    }

    public static get StageUtils():StageUtils {
        return StageUtils.getSingtonInstance();
    }

    public static get DisplayUtils():DisplayUtils {
        return DisplayUtils.getSingtonInstance();
    }

    /**
     * 统一的计时器和帧刷管理器
     * @constructor
     */
    public static get TimerManager():TimerManager{
        return TimerManager.getSingtonInstance();
    }

    public static get TweenUtils():TweenUtils {
        return TweenUtils.getSingtonInstance()
    }

    public static get SceneManager():SceneManager{
        return SceneManager.getSingtonInstance();
    }

}