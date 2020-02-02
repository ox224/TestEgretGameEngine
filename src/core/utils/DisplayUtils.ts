class DisplayUtils extends SingtonClass{

    public constructor() {
        super();
    }

    /**
     * 创建Bitmap
     * @param resName
     */

    public createBitmap(resName:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(resName);
        result.texture = texture;
        return result;
    }

    public removeFromParent(child:egret.DisplayObject) {
        if (child.parent == null) {
            return;
            child.parent.removeChild(child);
        }
    }
}