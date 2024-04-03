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

import { mapValues } from '../runtime';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * 
 * @export
 * @interface SeededUser
 */
export interface SeededUser {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededUser
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<string>}
     * @memberof SeededUser
     */
    emails: Array<string>;
}

/**
 * Check if a given object implements the SeededUser interface.
 */
export function instanceOfSeededUser(value: object): boolean {
    if (!('emails' in value)) return false;
    return true;
}

export function SeededUserFromJSON(json: any): SeededUser {
    return SeededUserFromJSONTyped(json, false);
}

export function SeededUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededUser {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'emails': json['emails'],
    };
}

export function SeededUserToJSON(value?: SeededUser | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'emails': value['emails'],
    };
}

