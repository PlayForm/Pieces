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
exports.AssetsSearchWithFiltersOutputToJSON = exports.AssetsSearchWithFiltersOutputFromJSONTyped = exports.AssetsSearchWithFiltersOutputFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function AssetsSearchWithFiltersOutputFromJSON(json) {
    return AssetsSearchWithFiltersOutputFromJSONTyped(json, false);
}
exports.AssetsSearchWithFiltersOutputFromJSON = AssetsSearchWithFiltersOutputFromJSON;
function AssetsSearchWithFiltersOutputFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'results': (0, _1.SearchedAssetsFromJSON)(json['results']),
    };
}
exports.AssetsSearchWithFiltersOutputFromJSONTyped = AssetsSearchWithFiltersOutputFromJSONTyped;
function AssetsSearchWithFiltersOutputToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'results': (0, _1.SearchedAssetsToJSON)(value.results),
    };
}
exports.AssetsSearchWithFiltersOutputToJSON = AssetsSearchWithFiltersOutputToJSON;
