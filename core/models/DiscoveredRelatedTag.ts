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
import type { SeededTag } from './SeededTag';
import {
    SeededTagFromJSON,
    SeededTagFromJSONTyped,
    SeededTagToJSON,
} from './SeededTag';

/**
 * 
 * @export
 * @interface DiscoveredRelatedTag
 */
export interface DiscoveredRelatedTag {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof DiscoveredRelatedTag
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededTag}
     * @memberof DiscoveredRelatedTag
     */
    seed: SeededTag;
}

/**
 * Check if a given object implements the DiscoveredRelatedTag interface.
 */
export function instanceOfDiscoveredRelatedTag(value: object): boolean {
    if (!('seed' in value)) return false;
    return true;
}

export function DiscoveredRelatedTagFromJSON(json: any): DiscoveredRelatedTag {
    return DiscoveredRelatedTagFromJSONTyped(json, false);
}

export function DiscoveredRelatedTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveredRelatedTag {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'seed': SeededTagFromJSON(json['seed']),
    };
}

export function DiscoveredRelatedTagToJSON(value?: DiscoveredRelatedTag | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'seed': SeededTagToJSON(value['seed']),
    };
}

