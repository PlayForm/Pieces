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
 * This is the SaveSuggestion. Mainly creating an additional model here because I imagine that we will want to add some additional data to this in the future (potentially with more numerical data that is emitted from the ML Models)
 * 
 * **Note: suggested is required here because we will want to say if we reccomend to take this action of save or not.
 * @export
 * @interface SaveSuggestion
 */
export interface SaveSuggestion {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SaveSuggestion
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is a boolean, that will say if you should or should not take action.
     * @type {boolean}
     * @memberof SaveSuggestion
     */
    suggested: boolean;
}

/**
 * Check if a given object implements the SaveSuggestion interface.
 */
export function instanceOfSaveSuggestion(value: object): boolean {
    if (!('suggested' in value)) return false;
    return true;
}

export function SaveSuggestionFromJSON(json: any): SaveSuggestion {
    return SaveSuggestionFromJSONTyped(json, false);
}

export function SaveSuggestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveSuggestion {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'suggested': json['suggested'],
    };
}

export function SaveSuggestionToJSON(value?: SaveSuggestion | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'suggested': value['suggested'],
    };
}

