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
exports.TrackedAssetEventToJSON = exports.TrackedAssetEventFromJSONTyped = exports.TrackedAssetEventFromJSON = void 0;
const runtime_1 = require("../runtime");
const EmbeddedModelSchema_1 = require("./EmbeddedModelSchema");
const TrackedAsset_1 = require("./TrackedAsset");
const TrackedAssetEventIdentifierDescriptionPairs_1 = require("./TrackedAssetEventIdentifierDescriptionPairs");
const SeededTrackedAssetEventMetadata_1 = require("./SeededTrackedAssetEventMetadata");
function TrackedAssetEventFromJSON(json) {
    return TrackedAssetEventFromJSONTyped(json, false);
}
exports.TrackedAssetEventFromJSON = TrackedAssetEventFromJSON;
function TrackedAssetEventFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, EmbeddedModelSchema_1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'asset': (0, TrackedAsset_1.TrackedAssetFromJSON)(json['asset']),
        'identifierDescriptionPair': (0, TrackedAssetEventIdentifierDescriptionPairs_1.TrackedAssetEventIdentifierDescriptionPairsFromJSON)(json['identifier_description_pair']),
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : (0, SeededTrackedAssetEventMetadata_1.SeededTrackedAssetEventMetadataFromJSON)(json['metadata']),
    };
}
exports.TrackedAssetEventFromJSONTyped = TrackedAssetEventFromJSONTyped;
function TrackedAssetEventToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, EmbeddedModelSchema_1.EmbeddedModelSchemaToJSON)(value.schema),
        'asset': (0, TrackedAsset_1.TrackedAssetToJSON)(value.asset),
        'identifier_description_pair': (0, TrackedAssetEventIdentifierDescriptionPairs_1.TrackedAssetEventIdentifierDescriptionPairsToJSON)(value.identifierDescriptionPair),
        'metadata': (0, SeededTrackedAssetEventMetadata_1.SeededTrackedAssetEventMetadataToJSON)(value.metadata),
    };
}
exports.TrackedAssetEventToJSON = TrackedAssetEventToJSON;