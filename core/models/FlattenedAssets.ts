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
import type { ReferencedAsset } from './ReferencedAsset';
import {
    ReferencedAssetFromJSON,
    ReferencedAssetFromJSONTyped,
    ReferencedAssetToJSON,
} from './ReferencedAsset';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * A collection of Assets specific to the authenticated user. [DAG Compatible - Directed Acyclic Graph Data Structure]
 * 
 * FlattenedAssets prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.
 * 
 * i.e. Asset asset = FlattenedAssets.iterable[0] => Format format = asset.preview => String id = format.asset => String id
 * @export
 * @interface FlattenedAssets
 */
export interface FlattenedAssets {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAssets
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedAsset>}
     * @memberof FlattenedAssets
     */
    iterable?: Array<ReferencedAsset>;
    /**
     * This is a Map<String, int> where the the key is an asset id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedAssets
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof FlattenedAssets
     */
    score?: Score;
}

/**
 * Check if a given object implements the FlattenedAssets interface.
 */
export function instanceOfFlattenedAssets(value: object): boolean {
    return true;
}

export function FlattenedAssetsFromJSON(json: any): FlattenedAssets {
    return FlattenedAssetsFromJSONTyped(json, false);
}

export function FlattenedAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAssets {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': json['iterable'] == null ? undefined : ((json['iterable'] as Array<any>).map(ReferencedAssetFromJSON)),
        'indices': json['indices'] == null ? undefined : json['indices'],
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedAssetsToJSON(value?: FlattenedAssets | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': value['iterable'] == null ? undefined : ((value['iterable'] as Array<any>).map(ReferencedAssetToJSON)),
        'indices': value['indices'],
        'score': ScoreToJSON(value['score']),
    };
}

