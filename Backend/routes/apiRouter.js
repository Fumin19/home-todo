"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const apiController_1 = __importDefault(require("../controllers/apiController"));
var router = express_1.default.Router();
exports.router = router;
router.get('/getToDoList', apiController_1.default.getToDoList);
