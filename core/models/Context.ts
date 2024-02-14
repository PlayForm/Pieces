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

import { exists, mapValues } from '../runtime';
import {
    Application,
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    Health,
    HealthFromJSON,
    HealthFromJSONTyped,
    HealthToJSON,
    UserProfile,
    UserProfileFromJSON,
    UserProfileFromJSONTyped,
    UserProfileToJSON,
} from './';

/**
 * A Context that is returned from almost all calls to the ContextAPI
 * @export
 * @interface Context
 */
export interface Context {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Context
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is th UUID of the OS that this context is currently connected to. This attempts to be the same as Segment's anonmyousId feild. It is attempted to be set at initial installation at Pieces/.identity/.os
     * @type {string}
     * @memberof Context
     */
    os: string;
    /**
     * 
     * @type {Application}
     * @memberof Context
     */
    application: Application;
    /**
     * 
     * @type {Health}
     * @memberof Context
     */
    health: Health;
    /**
     * 
     * @type {UserProfile}
     * @memberof Context
     */
    user?: UserProfile;
}

export function ContextFromJSON(json: any): Context {
    return ContextFromJSONTyped(json, false);
}

export function ContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): Context {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'os': json['os'],
        'application': ApplicationFromJSON(json['application']),
        'health': HealthFromJSON(json['health']),
        'user': !exists(json, 'user') ? undefined : UserProfileFromJSON(json['user']),
    };
}

export function ContextToJSON(value?: Context | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'os': value.os,
        'application': ApplicationToJSON(value.application),
        'health': HealthToJSON(value.health),
        'user': UserProfileToJSON(value.user),
    };
}


