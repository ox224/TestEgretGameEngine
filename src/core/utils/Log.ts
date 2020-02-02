class Log {
    public static debug(...optionalParams):void {
        if (!App.DebugUtils.isDebug) {
            return;
        }
        let message = "[Debug]" + optionalParams.shift();
        console.log(message,...optionalParams);

    }

    public static warn(...optionalParams):void {
        let message = "[Warn]" + optionalParams.shift();
        console.log(message,...optionalParams);
    }
}