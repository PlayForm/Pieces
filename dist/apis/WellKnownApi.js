"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WellKnownApi = void 0;
const runtime = __importStar(require("../runtime"));
/**
 *
 */
class WellKnownApi extends runtime.BaseAPI {
    /**
     * This will get the health of the server.
     * /.well-known/health [GET]
     */
    async getWellKnownHealthRaw() {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/.well-known/health`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.TextApiResponse(response);
    }
    /**
     * This will get the health of the server.
     * /.well-known/health [GET]
     */
    async getWellKnownHealth() {
        const response = await this.getWellKnownHealthRaw();
        return await response.value();
    }
    /**
     * This will get the version of the server. This will return a string of current version.
     * /.well-known/version [Get]
     */
    async getWellKnownVersionRaw() {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/.well-known/version`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.TextApiResponse(response);
    }
    /**
     * This will get the version of the server. This will return a string of current version.
     * /.well-known/version [Get]
     */
    async getWellKnownVersion() {
        const response = await this.getWellKnownVersionRaw();
        return await response.value();
    }
}
exports.WellKnownApi = WellKnownApi;
