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
import type { FlattenedPersons } from './FlattenedPersons';
import {
    FlattenedPersonsFromJSON,
    FlattenedPersonsFromJSONTyped,
    FlattenedPersonsToJSON,
} from './FlattenedPersons';
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
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './MechanismEnum';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is a specific model for related websites to an asset.
 * @export
 * @interface Website
 */
export interface Website {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Website
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof Website
     */
    id: string;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof Website
     */
    assets?: FlattenedAssets;
    /**
     * this is the actual website url.
     * @type {string}
     * @memberof Website
     */
    url: string;
    /**
     * This is a name that is customized.
     * @type {string}
     * @memberof Website
     */
    name: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Website
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Website
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Website
     */
    deleted?: GroupedTimestamp;
    /**
     * This is a Map<String, MechanismEnum> where the the key is an asset id.
     * @type {{ [key: string]: MechanismEnum; }}
     * @memberof Website
     */
    mechanisms?: { [key: string]: MechanismEnum; };
    /**
     * This is an optional value that will keep track of the number of times this has been interacted with.
     * @type {number}
     * @memberof Website
     */
    interactions?: number;
    /**
     * 
     * @type {FlattenedPersons}
     * @memberof Website
     */
    persons?: FlattenedPersons;
    /**
     * 
     * @type {FlattenedConversations}
     * @memberof Website
     */
    conversations?: FlattenedConversations;
    /**
     * 
     * @type {Score}
     * @memberof Website
     */
    score?: Score;
    /**
     * 
     * @type {FlattenedWorkstreamSummaries}
     * @memberof Website
     */
    summaries?: FlattenedWorkstreamSummaries;
}

/**
 * Check if a given object implements the Website interface.
 */
export function instanceOfWebsite(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;

    return isInstance;
}

export function WebsiteFromJSON(json: any): Website {
    return WebsiteFromJSONTyped(json, false);
}

export function WebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Website {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'assets': !exists(json, 'assets') ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'url': json['url'],
        'name': json['name'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': !exists(json, 'deleted') ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'mechanisms': !exists(json, 'mechanisms') ? undefined : (mapValues(json['mechanisms'], MechanismEnumFromJSON)),
        'interactions': !exists(json, 'interactions') ? undefined : json['interactions'],
        'persons': !exists(json, 'persons') ? undefined : FlattenedPersonsFromJSON(json['persons']),
        'conversations': !exists(json, 'conversations') ? undefined : FlattenedConversationsFromJSON(json['conversations']),
        'score': !exists(json, 'score') ? undefined : ScoreFromJSON(json['score']),
        'summaries': !exists(json, 'summaries') ? undefined : FlattenedWorkstreamSummariesFromJSON(json['summaries']),
    };
}

export function WebsiteToJSON(value?: Website | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'assets': FlattenedAssetsToJSON(value.assets),
        'url': value.url,
        'name': value.name,
        'created': GroupedTimestampToJSON(value.created),
        'updated': GroupedTimestampToJSON(value.updated),
        'deleted': GroupedTimestampToJSON(value.deleted),
        'mechanisms': value.mechanisms === undefined ? undefined : (mapValues(value.mechanisms, MechanismEnumToJSON)),
        'interactions': value.interactions,
        'persons': FlattenedPersonsToJSON(value.persons),
        'conversations': FlattenedConversationsToJSON(value.conversations),
        'score': ScoreToJSON(value.score),
        'summaries': FlattenedWorkstreamSummariesToJSON(value.summaries),
    };
}

