"use strict";
exports.__esModule = true;
exports.useBibleVersion = exports.BibleVersionProvider = void 0;
var react_1 = require("react");
var BibleVersionContext = (0, react_1.createContext)({});
function BibleVersionProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(0), versionSelected = _b[0], setVersionSelected = _b[1];
    return (<BibleVersionContext.Provider value={{
            setVersionSelected: setVersionSelected,
            versionSelected: versionSelected
        }}>
            {children}
        </BibleVersionContext.Provider>);
}
exports.BibleVersionProvider = BibleVersionProvider;
function useBibleVersion() {
    return (0, react_1.useContext)(BibleVersionContext);
}
exports.useBibleVersion = useBibleVersion;
