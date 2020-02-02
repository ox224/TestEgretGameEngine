class SingtonClass {
    public constructor(){

    }
    public static getSingtonInstance(...param:any[]):any{
        let Class:any = this;
        if (!Class._instance) {
            Class._instance = new Class(...param);
        }
        return Class._instance;
    }
}