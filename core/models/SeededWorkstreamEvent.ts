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
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
} from './Application';
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
import type { WorkstreamEventTrigger } from './WorkstreamEventTrigger';
import {
    WorkstreamEventTriggerFromJSON,
    WorkstreamEventTriggerFromJSONTyped,
    WorkstreamEventTriggerToJSON,
} from './WorkstreamEventTrigger';
import type { WorkstreamEventTriggerMetadata } from './WorkstreamEventTriggerMetadata';
import {
    WorkstreamEventTriggerMetadataFromJSON,
    WorkstreamEventTriggerMetadataFromJSONTyped,
    WorkstreamEventTriggerMetadataToJSON,
} from './WorkstreamEventTriggerMetadata';

/**
 * This is a precreated version of a WorkstreamEvent event, this will be used ingested into PiecesOS and PiecesOS will do all the magic to transform this into relevant data show in the workstream feed.
 * @export
 * @interface SeededWorkstreamEvent
 */
export interface SeededWorkstreamEvent {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededWorkstreamEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Score}
     * @memberof SeededWorkstreamEvent
     */
    score?: Score;
    /**
     * 
     * @type {Application}
     * @memberof SeededWorkstreamEvent
     */
    application: Application;
    /**
     * 
     * @type {WorkstreamEventTrigger}
     * @memberof SeededWorkstreamEvent
     */
    trigger: WorkstreamEventTrigger;
    /**
     * 
     * @type {WorkstreamEventTriggerMetadata}
     * @memberof SeededWorkstreamEvent
     */
    metadata?: WorkstreamEventTriggerMetadata;
    /**
     * 
     * @type {ReferencedWorkstreamSummary}
     * @memberof SeededWorkstreamEvent
     */
    summary?: ReferencedWorkstreamSummary;
    /**
     * This is used to override the event identifier, if this was an event that was originally in the internal events collection.
     * @type {string}
     * @memberof SeededWorkstreamEvent
     */
    internalIdentifier?: string;
}

/**
 * Check if a given object implements the SeededWorkstreamEvent interface.
 */
export function instanceOfSeededWorkstreamEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "application" in value;
    isInstance = isInstance && "trigger" in value;

    return isInstance;
}

export function SeededWorkstreamEventFromJSON(json: any): SeededWorkstreamEvent {
    return SeededWorkstreamEventFromJSONTyped(json, false);
}

export function SeededWorkstreamEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededWorkstreamEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
        'application': ApplicationFromJSON(json['application']),
        'trigger': WorkstreamEventTriggerFromJSON(json['trigger']),
        'metadata': !exists(json, 'metadata') ? undefined : WorkstreamEventTriggerMetadataFromJSON(json['metadata']),
        'summary': !exists(json, 'summary') ? undefined : ReferencedWorkstreamSummaryFromJSON(json['summary']),
        'internalIdentifier': !exists(json, 'internal_identifier') ? undefined : json['internal_identifier'],
    };
}

export function SeededWorkstreamEventToJSON(value?: SeededWorkstreamEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'score': ScoreToJSON(value.score),
        'application': ApplicationToJSON(value.application),
        'trigger': WorkstreamEventTriggerToJSON(value.trigger),
        'metadata': WorkstreamEventTriggerMetadataToJSON(value.metadata),
        'summary': ReferencedWorkstreamSummaryToJSON(value.summary),
        'internal_identifier': value.internalIdentifier,
    };
}

