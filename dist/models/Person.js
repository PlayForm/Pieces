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
exports.PersonToJSON = exports.PersonFromJSONTyped = exports.PersonFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function PersonFromJSON(json) {
    return PersonFromJSONTyped(json, false);
}
exports.PersonFromJSON = PersonFromJSON;
function PersonFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'created': (0, _1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, _1.GroupedTimestampFromJSON)(json['updated']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['deleted']),
        'type': (0, _1.PersonTypeFromJSON)(json['type']),
        'assets': !(0, runtime_1.exists)(json, 'assets') ? undefined : (0, _1.FlattenedAssetsFromJSON)(json['assets']),
        'mechanisms': !(0, runtime_1.exists)(json, 'mechanisms') ? undefined : ((0, runtime_1.mapValues)(json['mechanisms'], _1.MechanismEnumFromJSON)),
        'interactions': !(0, runtime_1.exists)(json, 'interactions') ? undefined : json['interactions'],
        'access': !(0, runtime_1.exists)(json, 'access') ? undefined : ((0, runtime_1.mapValues)(json['access'], _1.PersonAccessFromJSON)),
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : (0, _1.FlattenedTagsFromJSON)(json['tags']),
        'websites': !(0, runtime_1.exists)(json, 'websites') ? undefined : (0, _1.FlattenedWebsitesFromJSON)(json['websites']),
        'models': !(0, runtime_1.exists)(json, 'models') ? undefined : ((0, runtime_1.mapValues)(json['models'], _1.PersonModelFromJSON)),
        'annotations': !(0, runtime_1.exists)(json, 'annotations') ? undefined : (0, _1.FlattenedAnnotationsFromJSON)(json['annotations']),
        'score': !(0, runtime_1.exists)(json, 'score') ? undefined : (0, _1.ScoreFromJSON)(json['score']),
    };
}
exports.PersonFromJSONTyped = PersonFromJSONTyped;
function PersonToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'created': (0, _1.GroupedTimestampToJSON)(value.created),
        'updated': (0, _1.GroupedTimestampToJSON)(value.updated),
        'deleted': (0, _1.GroupedTimestampToJSON)(value.deleted),
        'type': (0, _1.PersonTypeToJSON)(value.type),
        'assets': (0, _1.FlattenedAssetsToJSON)(value.assets),
        'mechanisms': value.mechanisms === undefined ? undefined : ((0, runtime_1.mapValues)(value.mechanisms, _1.MechanismEnumToJSON)),
        'interactions': value.interactions,
        'access': value.access === undefined ? undefined : ((0, runtime_1.mapValues)(value.access, _1.PersonAccessToJSON)),
        'tags': (0, _1.FlattenedTagsToJSON)(value.tags),
        'websites': (0, _1.FlattenedWebsitesToJSON)(value.websites),
        'models': value.models === undefined ? undefined : ((0, runtime_1.mapValues)(value.models, _1.PersonModelToJSON)),
        'annotations': (0, _1.FlattenedAnnotationsToJSON)(value.annotations),
        'score': (0, _1.ScoreToJSON)(value.score),
    };
}
exports.PersonToJSON = PersonToJSON;
