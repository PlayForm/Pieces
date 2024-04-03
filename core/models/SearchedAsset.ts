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
import type { Asset } from './Asset';
import {
    AssetFromJSON,
    AssetFromJSONTyped,
    AssetToJSON,
} from './Asset';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { SearchedMatchEnum } from './SearchedMatchEnum';
import {
    SearchedMatchEnumFromJSON,
    SearchedMatchEnumFromJSONTyped,
    SearchedMatchEnumToJSON,
} from './SearchedMatchEnum';

/**
 * This is a modle that will represent a searched asset!
 * @export
 * @interface SearchedAsset
 */
export interface SearchedAsset {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedAsset
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Asset}
     * @memberof SearchedAsset
     */
    asset?: Asset;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedAsset
     */
    exact: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchedAsset
     */
    score: number;
    /**
     * 
     * @type {SearchedMatchEnum}
     * @memberof SearchedAsset
     */
    match: SearchedMatchEnum;
    /**
     * This is the uuid of the asset.
     * @type {string}
     * @memberof SearchedAsset
     */
    identifier: string;
    /**
     * If this is a pseudo asset that was also returned.
     * @type {boolean}
     * @memberof SearchedAsset
     */
    pseudo?: boolean;
}

/**
 * Check if a given object implements the SearchedAsset interface.
 */
export function instanceOfSearchedAsset(value: object): boolean {
    if (!('exact' in value)) return false;
    if (!('score' in value)) return false;
    if (!('match' in value)) return false;
    if (!('identifier' in value)) return false;
    return true;
}

export function SearchedAssetFromJSON(json: any): SearchedAsset {
    return SearchedAssetFromJSONTyped(json, false);
}

export function SearchedAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedAsset {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': json['asset'] == null ? undefined : AssetFromJSON(json['asset']),
        'exact': json['exact'],
        'score': json['score'],
        'match': SearchedMatchEnumFromJSON(json['match']),
        'identifier': json['identifier'],
        'pseudo': json['pseudo'] == null ? undefined : json['pseudo'],
    };
}

export function SearchedAssetToJSON(value?: SearchedAsset | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'asset': AssetToJSON(value['asset']),
        'exact': value['exact'],
        'score': value['score'],
        'match': SearchedMatchEnumToJSON(value['match']),
        'identifier': value['identifier'],
        'pseudo': value['pseudo'],
    };
}

