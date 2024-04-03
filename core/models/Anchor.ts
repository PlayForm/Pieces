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
import type { AnchorTypeEnum } from './AnchorTypeEnum';
import {
    AnchorTypeEnumFromJSON,
    AnchorTypeEnumFromJSONTyped,
    AnchorTypeEnumToJSON,
} from './AnchorTypeEnum';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FlattenedAnchorPoints } from './FlattenedAnchorPoints';
import {
    FlattenedAnchorPointsFromJSON,
    FlattenedAnchorPointsFromJSONTyped,
    FlattenedAnchorPointsToJSON,
} from './FlattenedAnchorPoints';
import type { FlattenedAnnotations } from './FlattenedAnnotations';
import {
    FlattenedAnnotationsFromJSON,
    FlattenedAnnotationsFromJSONTyped,
    FlattenedAnnotationsToJSON,
} from './FlattenedAnnotations';
import type { FlattenedAssets } from './FlattenedAssets';
import {
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
} from './FlattenedAssets';
import type { FlattenedConversations } from './FlattenedConversations';
import {
    FlattenedConversationsFromJSON,
    FlattenedConversationsFromJSONTyped,
    FlattenedConversationsToJSON,
} from './FlattenedConversations';
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

/**
 * 
 * @export
 * @interface Anchor
 */
export interface Anchor {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Anchor
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof Anchor
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Anchor
     */
    name?: string;
    /**
     * 
     * @type {AnchorTypeEnum}
     * @memberof Anchor
     */
    type: AnchorTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof Anchor
     */
    watch?: boolean;
    /**
     * 
     * @type {FlattenedAnchorPoints}
     * @memberof Anchor
     */
    points: FlattenedAnchorPoints;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Anchor
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Anchor
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Anchor
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof Anchor
     */
    assets?: FlattenedAssets;
    /**
     * 
     * @type {FlattenedAnnotations}
     * @memberof Anchor
     */
    annotations?: FlattenedAnnotations;
    /**
     * 
     * @type {FlattenedConversations}
     * @memberof Anchor
     */
    conversations?: FlattenedConversations;
    /**
     * 
     * @type {Score}
     * @memberof Anchor
     */
    score?: Score;
    /**
     * 
     * @type {FlattenedWorkstreamSummaries}
     * @memberof Anchor
     */
    summaries?: FlattenedWorkstreamSummaries;
}

/**
 * Check if a given object implements the Anchor interface.
 */
export function instanceOfAnchor(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('type' in value)) return false;
    if (!('points' in value)) return false;
    if (!('created' in value)) return false;
    if (!('updated' in value)) return false;
    return true;
}

export function AnchorFromJSON(json: any): Anchor {
    return AnchorFromJSONTyped(json, false);
}

export function AnchorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Anchor {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'type': AnchorTypeEnumFromJSON(json['type']),
        'watch': json['watch'] == null ? undefined : json['watch'],
        'points': FlattenedAnchorPointsFromJSON(json['points']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': json['deleted'] == null ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'assets': json['assets'] == null ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'annotations': json['annotations'] == null ? undefined : FlattenedAnnotationsFromJSON(json['annotations']),
        'conversations': json['conversations'] == null ? undefined : FlattenedConversationsFromJSON(json['conversations']),
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
        'summaries': json['summaries'] == null ? undefined : FlattenedWorkstreamSummariesFromJSON(json['summaries']),
    };
}

export function AnchorToJSON(value?: Anchor | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'name': value['name'],
        'type': AnchorTypeEnumToJSON(value['type']),
        'watch': value['watch'],
        'points': FlattenedAnchorPointsToJSON(value['points']),
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'deleted': GroupedTimestampToJSON(value['deleted']),
        'assets': FlattenedAssetsToJSON(value['assets']),
        'annotations': FlattenedAnnotationsToJSON(value['annotations']),
        'conversations': FlattenedConversationsToJSON(value['conversations']),
        'score': ScoreToJSON(value['score']),
        'summaries': FlattenedWorkstreamSummariesToJSON(value['summaries']),
    };
}

