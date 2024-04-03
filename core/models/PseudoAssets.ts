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
import type { FlattenedAssets } from './FlattenedAssets';
import {
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
} from './FlattenedAssets';

/**
 * This is a model of all optional properties, that will get returned from /assets/pseudo.
 * @export
 * @interface PseudoAssets
 */
export interface PseudoAssets {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof PseudoAssets
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof PseudoAssets
     */
    identifiers?: FlattenedAssets;
}

/**
 * Check if a given object implements the PseudoAssets interface.
 */
export function instanceOfPseudoAssets(value: object): boolean {
    return true;
}

export function PseudoAssetsFromJSON(json: any): PseudoAssets {
    return PseudoAssetsFromJSONTyped(json, false);
}

export function PseudoAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PseudoAssets {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'identifiers': json['identifiers'] == null ? undefined : FlattenedAssetsFromJSON(json['identifiers']),
    };
}

export function PseudoAssetsToJSON(value?: PseudoAssets | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'identifiers': FlattenedAssetsToJSON(value['identifiers']),
    };
}

