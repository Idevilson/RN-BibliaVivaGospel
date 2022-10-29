"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.useBook = exports.AtBookProvider = void 0;
var react_1 = require("react");
var AT_json_1 = require("../../biblia/aa/AT.json");
var AT_json_2 = require("../../biblia/acf/AT.json");
var AT_json_3 = require("../../biblia/nvi/AT.json");
var BibleVersionContext_1 = require("./BibleVersionContext");
var BibleContext = (0, react_1.createContext)({});
var async_storage_1 = require("@react-native-async-storage/async-storage");
function AtBookProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(AT_json_1["default"]), bibleData = _b[0], setBibleData = _b[1];
    var _c = (0, react_1.useState)(bibleData[0]), book = _c[0], setBook = _c[1];
    var _d = (0, react_1.useState)(0), chapterNumber = _d[0], setChapterNumber = _d[1];
    var _e = (0, react_1.useState)(false), modalIsVisible = _e[0], setModalIsVisible = _e[1];
    var _f = (0, react_1.useState)(15), fontSize = _f[0], setFontSize = _f[1];
    var versionSelected = (0, BibleVersionContext_1.useBibleVersion)().versionSelected;
    (0, react_1.useEffect)(function () {
        if (versionSelected === 0) {
            setBibleData(AT_json_1["default"]);
        }
        else if (versionSelected === 1) {
            setBibleData(AT_json_2["default"]);
        }
        else if (versionSelected === 2) {
            setBibleData(AT_json_3["default"]);
        }
    }, [versionSelected]);
    function storageFontSize(value) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, async_storage_1["default"].setItem("@fontSize", String(value))];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function getFontSize() {
        return __awaiter(this, void 0, void 0, function () {
            var value, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, async_storage_1["default"].getItem("@fontSize")];
                    case 1:
                        value = _a.sent();
                        if (value !== null) {
                            setFontSize(Number(value));
                            console.log(value);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function handleSelectBook(bookName) {
        var book = bibleData.find(function (book) { return book.abbrev === bookName; });
        setBook(book);
    }
    function handleSetChapterNumber(value) {
        setChapterNumber(value - 1);
    }
    (0, react_1.useEffect)(function () {
        getFontSize();
    }, []);
    return (<BibleContext.Provider value={{
            bibleData: bibleData,
            book: book,
            chapterNumber: chapterNumber,
            handleSelectBook: handleSelectBook,
            handleSetChapterNumber: handleSetChapterNumber,
            setModalIsVisible: setModalIsVisible,
            modalIsVisible: modalIsVisible,
            storageFontSize: storageFontSize,
            setFontSize: setFontSize,
            fontSize: fontSize
        }}>
            {children}
        </BibleContext.Provider>);
}
exports.AtBookProvider = AtBookProvider;
function useBook() {
    return (0, react_1.useContext)(BibleContext);
}
exports.useBook = useBook;
