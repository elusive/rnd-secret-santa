"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const corsOptions = {
    origin: 'http://localhost:8081',
};
app.use(cors_1.default(corsOptions));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({ message: 'Secret Santa server side.' });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Secret Santa Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map