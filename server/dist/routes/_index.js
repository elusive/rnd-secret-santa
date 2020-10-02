"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRepo = __importStar(require("../api/_index"));
const router = express_1.default.Router();
router.get('/', (req, res) => res.render('signup'));
router.post('/guide', (req, res) => {
    const { fname, lname, uname } = req.body;
    let errors = [];
    if (!fname || !lname || !uname) {
        errors.push({ msg: 'Please enter all fields' });
    }
    let user = userRepo.getByUsername(uname);
    if (!user) {
        errors.push({ msg: 'Username not found' });
    }
    if (errors.length > 0) {
        res.render('signup', {
            errors,
            fname,
            lname,
            uname,
        });
    }
    else {
        res.render('guide', {
            user,
        });
    }
});
exports.default = router;
//# sourceMappingURL=_index.js.map