"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagRtl = void 0;
const rtl_cssr_1 = __importDefault(require("../src/styles/rtl.cssr"));
exports.tagRtl = {
    name: 'Tag',
    style: rtl_cssr_1.default
};