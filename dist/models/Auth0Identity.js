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
exports.Auth0IdentityToJSON = exports.Auth0IdentityFromJSONTyped = exports.Auth0IdentityFromJSON = void 0;
const runtime_1 = require("../runtime");
function Auth0IdentityFromJSON(json) {
    return Auth0IdentityFromJSONTyped(json, false);
}
exports.Auth0IdentityFromJSON = Auth0IdentityFromJSON;
function Auth0IdentityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'connection': !(0, runtime_1.exists)(json, 'connection') ? undefined : json['connection'],
        'isSocial': !(0, runtime_1.exists)(json, 'isSocial') ? undefined : json['isSocial'],
        'provider': !(0, runtime_1.exists)(json, 'provider') ? undefined : json['provider'],
        'userId': !(0, runtime_1.exists)(json, 'user_id') ? undefined : json['user_id'],
        'accessToken': !(0, runtime_1.exists)(json, 'access_token') ? undefined : json['access_token'],
        'expiresIn': !(0, runtime_1.exists)(json, 'expires_in') ? undefined : json['expires_in'],
    };
}
exports.Auth0IdentityFromJSONTyped = Auth0IdentityFromJSONTyped;
function Auth0IdentityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'connection': value.connection,
        'isSocial': value.isSocial,
        'provider': value.provider,
        'user_id': value.userId,
        'access_token': value.accessToken,
        'expires_in': value.expiresIn,
    };
}
exports.Auth0IdentityToJSON = Auth0IdentityToJSON;