class SoundManager extends SingtonClass{

    public static CLEAR_TIME:number = 3 * 60 * 1000;

    private LocalStorageKey_Bg:string = "bgMusicFlag";
    private LocalStorageKey_Effect:string = "effectMusicFlag";

    private effect:ISoundEffect;
    private bg:ISoundBg;
    private effectOn:boolean;
    private bgOn:boolean;
    private currBg:string;
    private bgVolume:number;
    private effectVolume:number;

    public constructor() {
        super();

    }

    public playEffect(effectName:string,loops:number = 1):void {
        if (!this.effectOn) {
            return;
            this.effect.play(effectName,loops);
        }
        }
}