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
exports.TLPSensitivesDetectorReturnableToJSON = exports.TLPSensitivesDetectorReturnableFromJSONTyped = exports.TLPSensitivesDetectorReturnableFromJSON = void 0;
const TLPSensitive_1 = require("./TLPSensitive");
function TLPSensitivesDetectorReturnableFromJSON(json) {
    return TLPSensitivesDetectorReturnableFromJSONTyped(json, false);
}
exports.TLPSensitivesDetectorReturnableFromJSON = TLPSensitivesDetectorReturnableFromJSON;
function TLPSensitivesDetectorReturnableFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'iterable': (json['iterable'].map(TLPSensitive_1.TLPSensitiveFromJSON)),
        'duration': json['duration'],
    };
}
exports.TLPSensitivesDetectorReturnableFromJSONTyped = TLPSensitivesDetectorReturnableFromJSONTyped;
function TLPSensitivesDetectorReturnableToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'iterable': (value.iterable.map(TLPSensitive_1.TLPSensitiveToJSON)),
        'duration': value.duration,
    };
}
exports.TLPSensitivesDetectorReturnableToJSON = TLPSensitivesDetectorReturnableToJSON;