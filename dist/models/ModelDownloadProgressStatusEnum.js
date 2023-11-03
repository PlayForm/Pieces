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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelDownloadProgressStatusEnumToJSON = exports.ModelDownloadProgressStatusEnumFromJSONTyped = exports.ModelDownloadProgressStatusEnumFromJSON = exports.ModelDownloadProgressStatusEnum = void 0;
/**
 * Enum used for the status of the progress in downloading a model.
 * @export
 * @enum {string}
 */
var ModelDownloadProgressStatusEnum;
(function (ModelDownloadProgressStatusEnum) {
    ModelDownloadProgressStatusEnum["Initialized"] = "INITIALIZED";
    ModelDownloadProgressStatusEnum["InProgress"] = "IN-PROGRESS";
    ModelDownloadProgressStatusEnum["Completed"] = "COMPLETED";
    ModelDownloadProgressStatusEnum["Failed"] = "FAILED";
    ModelDownloadProgressStatusEnum["Unknown"] = "UNKNOWN";
})(ModelDownloadProgressStatusEnum || (exports.ModelDownloadProgressStatusEnum = ModelDownloadProgressStatusEnum = {}));
function ModelDownloadProgressStatusEnumFromJSON(json) {
    return ModelDownloadProgressStatusEnumFromJSONTyped(json, false);
}
exports.ModelDownloadProgressStatusEnumFromJSON = ModelDownloadProgressStatusEnumFromJSON;
function ModelDownloadProgressStatusEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.ModelDownloadProgressStatusEnumFromJSONTyped = ModelDownloadProgressStatusEnumFromJSONTyped;
function ModelDownloadProgressStatusEnumToJSON(value) {
    return value;
}
exports.ModelDownloadProgressStatusEnumToJSON = ModelDownloadProgressStatusEnumToJSON;