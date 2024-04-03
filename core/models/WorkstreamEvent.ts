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
import type { FlattenedWorkstreamSummaries } from './FlattenedWorkstreamSummaries';
import {
    FlattenedWorkstreamSummariesFromJSON,
    FlattenedWorkstreamSummariesFromJSONTyped,
    FlattenedWorkstreamSummariesToJSON,
} from './FlattenedWorkstreamSummaries';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
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
 * This is a Shadow Activity event:
 * 
 * This is used to for 2 collections the internal Shadow Activity collection and the Shadow Activity Collection.
 * 
 * The Internal Shadow Activity will me just a massive growing and shrinkling persisted list activity event that will endup getting rolled up into Workstream summaries. When we roll up the internalWorkstreamEvent events we will do a ton of filtering and only take the highly relevant events and turn them into WorkstreamEvent (these will be used to create a reference to the workstream summary, so we can know what event were used to generate the summary and vise versa).
 * 
 * A Shadow Activity model is a collection of a ton of small interactions with the plugins (copy/paste/file open/file close/tab changed/...etc events) that will also enable use to know what materials are being used to funnel them into our engine to show highly relevant data according to your given flow.
 * @export
 * @interface WorkstreamEvent
 */
export interface WorkstreamEvent {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof WorkstreamEvent
     */
    id: string;
    /**
     * 
     * @type {Score}
     * @memberof WorkstreamEvent
     */
    score?: Score;
    /**
     * 
     * @type {Application}
     * @memberof WorkstreamEvent
     */
    application: Application;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof WorkstreamEvent
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof WorkstreamEvent
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {WorkstreamEventTrigger}
     * @memberof WorkstreamEvent
     */
    trigger: WorkstreamEventTrigger;
    /**
     * 
     * @type {WorkstreamEventTriggerMetadata}
     * @memberof WorkstreamEvent
     */
    metadata?: WorkstreamEventTriggerMetadata;
    /**
     * 
     * @type {FlattenedWorkstreamSummaries}
     * @memberof WorkstreamEvent
     */
    summaries?: FlattenedWorkstreamSummaries;
}

/**
 * Check if a given object implements the WorkstreamEvent interface.
 */
export function instanceOfWorkstreamEvent(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('application' in value)) return false;
    if (!('created' in value)) return false;
    if (!('updated' in value)) return false;
    if (!('trigger' in value)) return false;
    return true;
}

export function WorkstreamEventFromJSON(json: any): WorkstreamEvent {
    return WorkstreamEventFromJSONTyped(json, false);
}

export function WorkstreamEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamEvent {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
        'application': ApplicationFromJSON(json['application']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'trigger': WorkstreamEventTriggerFromJSON(json['trigger']),
        'metadata': json['metadata'] == null ? undefined : WorkstreamEventTriggerMetadataFromJSON(json['metadata']),
        'summaries': json['summaries'] == null ? undefined : FlattenedWorkstreamSummariesFromJSON(json['summaries']),
    };
}

export function WorkstreamEventToJSON(value?: WorkstreamEvent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'score': ScoreToJSON(value['score']),
        'application': ApplicationToJSON(value['application']),
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'trigger': WorkstreamEventTriggerToJSON(value['trigger']),
        'metadata': WorkstreamEventTriggerMetadataToJSON(value['metadata']),
        'summaries': FlattenedWorkstreamSummariesToJSON(value['summaries']),
    };
}

