"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const express_session_1 = __importDefault(require("express-session"));
const _index_1 = __importDefault(require("./routes/_index"));
const app = express_1.default();
app.use(express_session_1.default({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));
app.use(connect_flash_1.default());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
});
app.use(express_ejs_layouts_1.default);
app.set('view engine', 'ejs');
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', _index_1.default);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Secret Santa App is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map