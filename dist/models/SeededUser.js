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
exports.SeededUserToJSON = exports.SeededUserFromJSONTyped = exports.SeededUserFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function SeededUserFromJSON(json) {
    return SeededUserFromJSONTyped(json, false);
}
exports.SeededUserFromJSON = SeededUserFromJSON;
function SeededUserFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'emails': json['emails'],
    };
}
exports.SeededUserFromJSONTyped = SeededUserFromJSONTyped;
function SeededUserToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'emails': value.emails,
    };
}
exports.SeededUserToJSON = SeededUserToJSON;
