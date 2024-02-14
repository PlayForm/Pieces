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
exports.FlattenedSensitivesToJSON = exports.FlattenedSensitivesFromJSONTyped = exports.FlattenedSensitivesFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function FlattenedSensitivesFromJSON(json) {
    return FlattenedSensitivesFromJSONTyped(json, false);
}
exports.FlattenedSensitivesFromJSON = FlattenedSensitivesFromJSON;
function FlattenedSensitivesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'iterable': (json['iterable'].map(_1.ReferencedSensitiveFromJSON)),
        'score': !(0, runtime_1.exists)(json, 'score') ? undefined : (0, _1.ScoreFromJSON)(json['score']),
    };
}
exports.FlattenedSensitivesFromJSONTyped = FlattenedSensitivesFromJSONTyped;
function FlattenedSensitivesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'iterable': (value.iterable.map(_1.ReferencedSensitiveToJSON)),
        'score': (0, _1.ScoreToJSON)(value.score),
    };
}
exports.FlattenedSensitivesToJSON = FlattenedSensitivesToJSON;
