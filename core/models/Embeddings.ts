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
import type { Embedding } from './Embedding';
import {
    EmbeddingFromJSON,
    EmbeddingFromJSONTyped,
    EmbeddingToJSON,
} from './Embedding';

/**
 * 
 * @export
 * @interface Embeddings
 */
export interface Embeddings {
    /**
     * 
     * @type {Array<Embedding>}
     * @memberof Embeddings
     */
    iterable: Array<Embedding>;
}

/**
 * Check if a given object implements the Embeddings interface.
 */
export function instanceOfEmbeddings(value: object): boolean {
    if (!('iterable' in value)) return false;
    return true;
}

export function EmbeddingsFromJSON(json: any): Embeddings {
    return EmbeddingsFromJSONTyped(json, false);
}

export function EmbeddingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Embeddings {
    if (json == null) {
        return json;
    }
    return {
        
        'iterable': ((json['iterable'] as Array<any>).map(EmbeddingFromJSON)),
    };
}

export function EmbeddingsToJSON(value?: Embeddings | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'iterable': ((value['iterable'] as Array<any>).map(EmbeddingToJSON)),
    };
}

