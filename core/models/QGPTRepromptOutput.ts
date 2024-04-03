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
 * @interface QGPTRepromptOutput
 */
export interface QGPTRepromptOutput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTRepromptOutput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof QGPTRepromptOutput
     */
    query: string;
}

/**
 * Check if a given object implements the QGPTRepromptOutput interface.
 */
export function instanceOfQGPTRepromptOutput(value: object): boolean {
    if (!('query' in value)) return false;
    return true;
}

export function QGPTRepromptOutputFromJSON(json: any): QGPTRepromptOutput {
    return QGPTRepromptOutputFromJSONTyped(json, false);
}

export function QGPTRepromptOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTRepromptOutput {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'query': json['query'],
    };
}

export function QGPTRepromptOutputToJSON(value?: QGPTRepromptOutput | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'query': value['query'],
    };
}

