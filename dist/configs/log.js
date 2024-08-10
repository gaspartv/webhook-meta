"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const common_1 = require("@nestjs/common");
class Log {
    static info(message, context) {
        if (context)
            return common_1.Logger.log(message, context);
        return common_1.Logger.log(message);
    }
    static error(message, context) {
        if (context)
            return common_1.Logger.error(message, context);
        return common_1.Logger.error(message);
    }
    static warn(message, context) {
        if (context)
            return common_1.Logger.warn(message, context);
        return common_1.Logger.warn(message);
    }
    static debug(message, context) {
        if (context)
            return common_1.Logger.debug(message, context);
        return common_1.Logger.debug(message);
    }
    static verbose(message, context) {
        if (context)
            return common_1.Logger.verbose(message, context);
        return common_1.Logger.verbose(message);
    }
}
exports.Log = Log;
//# sourceMappingURL=log.js.map