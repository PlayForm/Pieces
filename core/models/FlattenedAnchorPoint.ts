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
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { PlatformEnum } from './PlatformEnum';
import {
    PlatformEnumFromJSON,
    PlatformEnumFromJSONTyped,
    PlatformEnumToJSON,
} from './PlatformEnum';
import type { ReferencedAnchor } from './ReferencedAnchor';
import {
    ReferencedAnchorFromJSON,
    ReferencedAnchorFromJSONTyped,
    ReferencedAnchorToJSON,
} from './ReferencedAnchor';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * 
 * @export
 * @interface FlattenedAnchorPoint
 */
export interface FlattenedAnchorPoint {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAnchorPoint
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedAnchorPoint
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedAnchorPoint
     */
    verified?: boolean;
    /**
     * This is the text of the path.
     * @type {string}
     * @memberof FlattenedAnchorPoint
     */
    fullpath: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnchorPoint
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnchorPoint
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnchorPoint
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {PlatformEnum}
     * @memberof FlattenedAnchorPoint
     */
    platform?: PlatformEnum;
    /**
     * 
     * @type {ReferencedAnchor}
     * @memberof FlattenedAnchorPoint
     */
    anchor: ReferencedAnchor;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedAnchorPoint
     */
    score?: Score;
}

/**
 * Check if a given object implements the FlattenedAnchorPoint interface.
 */
export function instanceOfFlattenedAnchorPoint(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('fullpath' in value)) return false;
    if (!('created' in value)) return false;
    if (!('updated' in value)) return false;
    if (!('anchor' in value)) return false;
    return true;
}

export function FlattenedAnchorPointFromJSON(json: any): FlattenedAnchorPoint {
    return FlattenedAnchorPointFromJSONTyped(json, false);
}

export function FlattenedAnchorPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAnchorPoint {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'verified': json['verified'] == null ? undefined : json['verified'],
        'fullpath': json['fullpath'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': json['deleted'] == null ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'platform': json['platform'] == null ? undefined : PlatformEnumFromJSON(json['platform']),
        'anchor': ReferencedAnchorFromJSON(json['anchor']),
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedAnchorPointToJSON(value?: FlattenedAnchorPoint | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'verified': value['verified'],
        'fullpath': value['fullpath'],
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'deleted': GroupedTimestampToJSON(value['deleted']),
        'platform': PlatformEnumToJSON(value['platform']),
        'anchor': ReferencedAnchorToJSON(value['anchor']),
        'score': ScoreToJSON(value['score']),
    };
}

