"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * This is an open API that holds specific endpoints as a base for Pieces Context Systems
 * The point of this API is to allow us to organize and Auto Generate Code Specific for Connected Applications - this will allow for stateful context abstraction & less code within the Core Connector
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveCategoryEnumToJSON = exports.SensitiveCategoryEnumFromJSONTyped = exports.SensitiveCategoryEnumFromJSON = exports.SensitiveCategoryEnum = void 0;
/**
 * This is the enum that is use to describe the category of our Sensitive Model.
 * @export
 * @enum {string}
 */
var SensitiveCategoryEnum;
(function (SensitiveCategoryEnum) {
    SensitiveCategoryEnum["Secret"] = "SECRET";
    SensitiveCategoryEnum["ApiKey"] = "API_KEY";
    SensitiveCategoryEnum["ClientId"] = "CLIENT_ID";
    SensitiveCategoryEnum["ClientSecret"] = "CLIENT_SECRET";
    SensitiveCategoryEnum["SecretKey"] = "SECRET_KEY";
    SensitiveCategoryEnum["ApiToken"] = "API_TOKEN";
    SensitiveCategoryEnum["AccessKey"] = "ACCESS_KEY";
    SensitiveCategoryEnum["AccessToken"] = "ACCESS_TOKEN";
    SensitiveCategoryEnum["Url"] = "URL";
    SensitiveCategoryEnum["PublicKey"] = "PUBLIC_KEY";
    SensitiveCategoryEnum["PrivateKey"] = "PRIVATE_KEY";
    SensitiveCategoryEnum["ApiId"] = "API_ID";
    SensitiveCategoryEnum["WebHookUrl"] = "WEB_HOOK_URL";
})(SensitiveCategoryEnum || (exports.SensitiveCategoryEnum = SensitiveCategoryEnum = {}));
function SensitiveCategoryEnumFromJSON(json) {
    return SensitiveCategoryEnumFromJSONTyped(json, false);
}
exports.SensitiveCategoryEnumFromJSON = SensitiveCategoryEnumFromJSON;
function SensitiveCategoryEnumFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.SensitiveCategoryEnumFromJSONTyped = SensitiveCategoryEnumFromJSONTyped;
function SensitiveCategoryEnumToJSON(value) {
    return value;
}
exports.SensitiveCategoryEnumToJSON = SensitiveCategoryEnumToJSON;