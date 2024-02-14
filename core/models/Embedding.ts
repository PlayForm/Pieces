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

import { exists, mapValues } from '../runtime';
import {
    GroupedTimestamp,
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
    Model,
    ModelFromJSON,
    ModelFromJSONTyped,
    ModelToJSON,
} from './';

/**
 * 
 * @export
 * @interface Embedding
 */
export interface Embedding {
    /**
     * this is the raw value of the embedding
     * @type {Array<number>}
     * @memberof Embedding
     */
    raw: Array<number>;
    /**
     * 
     * @type {Model}
     * @memberof Embedding
     */
    model: Model;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Embedding
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Embedding
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Embedding
     */
    deleted?: GroupedTimestamp;
}

export function EmbeddingFromJSON(json: any): Embedding {
    return EmbeddingFromJSONTyped(json, false);
}

export function EmbeddingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Embedding {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'raw': json['raw'],
        'model': ModelFromJSON(json['model']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
    };
}

export function EmbeddingToJSON(value?: Embedding | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'raw': value.raw,
        'model': ModelToJSON(value.model),
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
    };
}


