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
import type { ReferencedWorkstreamEvent } from './ReferencedWorkstreamEvent';
import {
    ReferencedWorkstreamEventFromJSON,
    ReferencedWorkstreamEventFromJSONTyped,
    ReferencedWorkstreamEventToJSON,
} from './ReferencedWorkstreamEvent';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is a plural (DAG Safe) version of a WorkstreamEvents.
 * @export
 * @interface FlattenedWorkstreamEvents
 */
export interface FlattenedWorkstreamEvents {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedWorkstreamEvents
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedWorkstreamEvent>}
     * @memberof FlattenedWorkstreamEvents
     */
    iterable: Array<ReferencedWorkstreamEvent>;
    /**
     * This is a Map<String, int> where the the key is an activity id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedWorkstreamEvents
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof FlattenedWorkstreamEvents
     */
    score?: Score;
}

/**
 * Check if a given object implements the FlattenedWorkstreamEvents interface.
 */
export function instanceOfFlattenedWorkstreamEvents(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function FlattenedWorkstreamEventsFromJSON(json: any): FlattenedWorkstreamEvents {
    return FlattenedWorkstreamEventsFromJSONTyped(json, false);
}

export function FlattenedWorkstreamEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedWorkstreamEvents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedWorkstreamEventFromJSON)),
        'indices': !exists(json, 'indices') ? undefined : json['indices'],
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedWorkstreamEventsToJSON(value?: FlattenedWorkstreamEvents | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ReferencedWorkstreamEventToJSON)),
        'indices': value.indices,
        'score': ScoreToJSON(value.score),
    };
}
