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
import type { SeededFile } from './SeededFile';
import {
    SeededFileFromJSON,
    SeededFileFromJSONTyped,
    SeededFileToJSON,
} from './SeededFile';
import type { SeededFragment } from './SeededFragment';
import {
    SeededFragmentFromJSON,
    SeededFragmentFromJSONTyped,
    SeededFragmentToJSON,
} from './SeededFragment';
import type { TLPDirectedDiscoveryFilters } from './TLPDirectedDiscoveryFilters';
import {
    TLPDirectedDiscoveryFiltersFromJSON,
    TLPDirectedDiscoveryFiltersFromJSONTyped,
    TLPDirectedDiscoveryFiltersToJSON,
} from './TLPDirectedDiscoveryFilters';

/**
 * Assumption: filters applied in this model will overwrite filters passed in SeededDiscoverableAssets
 * @export
 * @interface SeededDiscoverableAsset
 */
export interface SeededDiscoverableAsset {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededDiscoverableAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededFile}
     * @memberof SeededDiscoverableAsset
     */
    file?: SeededFile;
    /**
     * 
     * @type {SeededFragment}
     * @memberof SeededDiscoverableAsset
     */
    fragment?: SeededFragment;
    /**
     * 
     * @type {string}
     * @memberof SeededDiscoverableAsset
     */
    directory?: string;
    /**
     * 
     * @type {TLPDirectedDiscoveryFilters}
     * @memberof SeededDiscoverableAsset
     */
    filters?: TLPDirectedDiscoveryFilters;
}

/**
 * Check if a given object implements the SeededDiscoverableAsset interface.
 */
export function instanceOfSeededDiscoverableAsset(value: object): boolean {
    return true;
}

export function SeededDiscoverableAssetFromJSON(json: any): SeededDiscoverableAsset {
    return SeededDiscoverableAssetFromJSONTyped(json, false);
}

export function SeededDiscoverableAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededDiscoverableAsset {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'file': json['file'] == null ? undefined : SeededFileFromJSON(json['file']),
        'fragment': json['fragment'] == null ? undefined : SeededFragmentFromJSON(json['fragment']),
        'directory': json['directory'] == null ? undefined : json['directory'],
        'filters': json['filters'] == null ? undefined : TLPDirectedDiscoveryFiltersFromJSON(json['filters']),
    };
}

export function SeededDiscoverableAssetToJSON(value?: SeededDiscoverableAsset | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'file': SeededFileToJSON(value['file']),
        'fragment': SeededFragmentToJSON(value['fragment']),
        'directory': value['directory'],
        'filters': TLPDirectedDiscoveryFiltersToJSON(value['filters']),
    };
}

