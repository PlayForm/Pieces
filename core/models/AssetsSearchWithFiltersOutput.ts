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
import type { SearchedAssets } from './SearchedAssets';
import {
    SearchedAssetsFromJSON,
    SearchedAssetsFromJSONTyped,
    SearchedAssetsToJSON,
} from './SearchedAssets';

/**
 * output for the /assets/search [POST] 
 * @export
 * @interface AssetsSearchWithFiltersOutput
 */
export interface AssetsSearchWithFiltersOutput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof AssetsSearchWithFiltersOutput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SearchedAssets}
     * @memberof AssetsSearchWithFiltersOutput
     */
    results: SearchedAssets;
}

/**
 * Check if a given object implements the AssetsSearchWithFiltersOutput interface.
 */
export function instanceOfAssetsSearchWithFiltersOutput(value: object): boolean {
    if (!('results' in value)) return false;
    return true;
}

export function AssetsSearchWithFiltersOutputFromJSON(json: any): AssetsSearchWithFiltersOutput {
    return AssetsSearchWithFiltersOutputFromJSONTyped(json, false);
}

export function AssetsSearchWithFiltersOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetsSearchWithFiltersOutput {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'results': SearchedAssetsFromJSON(json['results']),
    };
}

export function AssetsSearchWithFiltersOutputToJSON(value?: AssetsSearchWithFiltersOutput | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'results': SearchedAssetsToJSON(value['results']),
    };
}

