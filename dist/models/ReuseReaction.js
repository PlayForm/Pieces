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
exports.ReuseReactionToJSON = exports.ReuseReactionFromJSONTyped = exports.ReuseReactionFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function ReuseReactionFromJSON(json) {
    return ReuseReactionFromJSONTyped(json, false);
}
exports.ReuseReactionFromJSON = ReuseReactionFromJSON;
function ReuseReactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'asset': json['asset'],
    };
}
exports.ReuseReactionFromJSONTyped = ReuseReactionFromJSONTyped;
function ReuseReactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'asset': value.asset,
    };
}
exports.ReuseReactionToJSON = ReuseReactionToJSON;
