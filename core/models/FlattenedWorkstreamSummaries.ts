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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { ReferencedWorkstreamSummary } from './ReferencedWorkstreamSummary';
import {
    ReferencedWorkstreamSummaryFromJSON,
    ReferencedWorkstreamSummaryFromJSONTyped,
    ReferencedWorkstreamSummaryToJSON,
} from './ReferencedWorkstreamSummary';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is a DAG-Safe plural model of workstreamsummaries
 * @export
 * @interface FlattenedWorkstreamSummaries
 */
export interface FlattenedWorkstreamSummaries {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedWorkstreamSummaries
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedWorkstreamSummary>}
     * @memberof FlattenedWorkstreamSummaries
     */
    iterable: Array<ReferencedWorkstreamSummary>;
    /**
     * This is a Map<String, int> where the the key is an summary id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedWorkstreamSummaries
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof FlattenedWorkstreamSummaries
     */
    score?: Score;
}

/**
 * Check if a given object implements the FlattenedWorkstreamSummaries interface.
 */
export function instanceOfFlattenedWorkstreamSummaries(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function FlattenedWorkstreamSummariesFromJSON(json: any): FlattenedWorkstreamSummaries {
    return FlattenedWorkstreamSummariesFromJSONTyped(json, false);
}

export function FlattenedWorkstreamSummariesFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedWorkstreamSummaries {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedWorkstreamSummaryFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedWorkstreamSummariesToJSON(value?: FlattenedWorkstreamSummaries | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ReferencedWorkstreamSummaryToJSON)),
        'indices': value.indices,
        'score': ScoreToJSON(value.score),
    };
}
