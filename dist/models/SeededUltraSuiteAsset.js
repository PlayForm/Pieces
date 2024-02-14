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
exports.SeededUltraSuiteAssetToJSON = exports.SeededUltraSuiteAssetFromJSONTyped = exports.SeededUltraSuiteAssetFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function SeededUltraSuiteAssetFromJSON(json) {
    return SeededUltraSuiteAssetFromJSONTyped(json, false);
}
exports.SeededUltraSuiteAssetFromJSON = SeededUltraSuiteAssetFromJSON;
function SeededUltraSuiteAssetFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'ext': !(0, runtime_1.exists)(json, 'ext') ? undefined : (0, _1.ClassificationSpecificEnumFromJSON)(json['ext']),
        'format': (0, _1.SeededFormatFromJSON)(json['format']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
    };
}
exports.SeededUltraSuiteAssetFromJSONTyped = SeededUltraSuiteAssetFromJSONTyped;
function SeededUltraSuiteAssetToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'name': value.name,
        'ext': (0, _1.ClassificationSpecificEnumToJSON)(value.ext),
        'format': (0, _1.SeededFormatToJSON)(value.format),
        'description': value.description,
    };
}
exports.SeededUltraSuiteAssetToJSON = SeededUltraSuiteAssetToJSON;
