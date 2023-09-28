import {generateConsoleMessage} from './functions/generate-message';
import {consolePropType} from './types/bool.type';
import {consoleConstant} from './constants/console-constant';

(function() {
    generateConsoleMessage<consolePropType>(consoleConstant);
})();