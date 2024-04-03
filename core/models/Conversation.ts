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
import type { ConversationGrounding } from './ConversationGrounding';
import {
    ConversationGroundingFromJSON,
    ConversationGroundingFromJSONTyped,
    ConversationGroundingToJSON,
} from './ConversationGrounding';
import type { ConversationTypeEnum } from './ConversationTypeEnum';
import {
    ConversationTypeEnumFromJSON,
    ConversationTypeEnumFromJSONTyped,
    ConversationTypeEnumToJSON,
} from './ConversationTypeEnum';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FlattenedAnchors } from './FlattenedAnchors';
import {
    FlattenedAnchorsFromJSON,
    FlattenedAnchorsFromJSONTyped,
    FlattenedAnchorsToJSON,
} from './FlattenedAnchors';
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
import type { FlattenedConversationMessages } from './FlattenedConversationMessages';
import {
    FlattenedConversationMessagesFromJSON,
    FlattenedConversationMessagesFromJSONTyped,
    FlattenedConversationMessagesToJSON,
} from './FlattenedConversationMessages';
import type { FlattenedWebsites } from './FlattenedWebsites';
import {
    FlattenedWebsitesFromJSON,
    FlattenedWebsitesFromJSONTyped,
    FlattenedWebsitesToJSON,
} from './FlattenedWebsites';
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
import type { QGPTPromptPipeline } from './QGPTPromptPipeline';
import {
    QGPTPromptPipelineFromJSON,
    QGPTPromptPipelineFromJSONTyped,
    QGPTPromptPipelineToJSON,
} from './QGPTPromptPipeline';
import type { ReferencedModel } from './ReferencedModel';
import {
    ReferencedModelFromJSON,
    ReferencedModelFromJSONTyped,
    ReferencedModelToJSON,
} from './ReferencedModel';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';

/**
 * This is a fully referenced Conversation.
 * 
 * This will hold together a conversation. Ie allthe message within a conversation.
 * 
 * All the additional properties on here used on here like(anchors/assets) are used for context that will seed the conversation.
 * 
 * model is a calculated property, and will be the model of the last message sent if applicable.
 * @export
 * @interface Conversation
 */
export interface Conversation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Conversation
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof Conversation
     */
    id: string;
    /**
     * This is a name that is customized.
     * @type {string}
     * @memberof Conversation
     */
    name?: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Conversation
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Conversation
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Conversation
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {boolean}
     * @memberof Conversation
     */
    favorited?: boolean;
    /**
     * 
     * @type {Application}
     * @memberof Conversation
     */
    application?: Application;
    /**
     * 
     * @type {FlattenedAnnotations}
     * @memberof Conversation
     */
    annotations?: FlattenedAnnotations;
    /**
     * 
     * @type {FlattenedConversationMessages}
     * @memberof Conversation
     */
    messages: FlattenedConversationMessages;
    /**
     * 
     * @type {ReferencedModel}
     * @memberof Conversation
     */
    model?: ReferencedModel;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof Conversation
     */
    assets?: FlattenedAssets;
    /**
     * 
     * @type {FlattenedWebsites}
     * @memberof Conversation
     */
    websites?: FlattenedWebsites;
    /**
     * 
     * @type {FlattenedAnchors}
     * @memberof Conversation
     */
    anchors?: FlattenedAnchors;
    /**
     * 
     * @type {ConversationTypeEnum}
     * @memberof Conversation
     */
    type: ConversationTypeEnum;
    /**
     * 
     * @type {ConversationGrounding}
     * @memberof Conversation
     */
    grounding?: ConversationGrounding;
    /**
     * 
     * @type {Score}
     * @memberof Conversation
     */
    score?: Score;
    /**
     * 
     * @type {QGPTPromptPipeline}
     * @memberof Conversation
     */
    pipeline?: QGPTPromptPipeline;
    /**
     * This will let us know if this conversation was generated as a 'demo' conversation
     * @type {boolean}
     * @memberof Conversation
     */
    demo?: boolean;
    /**
     * 
     * @type {FlattenedWorkstreamSummaries}
     * @memberof Conversation
     */
    summaries?: FlattenedWorkstreamSummaries;
}

/**
 * Check if a given object implements the Conversation interface.
 */
export function instanceOfConversation(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('created' in value)) return false;
    if (!('updated' in value)) return false;
    if (!('messages' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function ConversationFromJSON(json: any): Conversation {
    return ConversationFromJSONTyped(json, false);
}

export function ConversationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Conversation {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': json['deleted'] == null ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'favorited': json['favorited'] == null ? undefined : json['favorited'],
        'application': json['application'] == null ? undefined : ApplicationFromJSON(json['application']),
        'annotations': json['annotations'] == null ? undefined : FlattenedAnnotationsFromJSON(json['annotations']),
        'messages': FlattenedConversationMessagesFromJSON(json['messages']),
        'model': json['model'] == null ? undefined : ReferencedModelFromJSON(json['model']),
        'assets': json['assets'] == null ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'websites': json['websites'] == null ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'anchors': json['anchors'] == null ? undefined : FlattenedAnchorsFromJSON(json['anchors']),
        'type': ConversationTypeEnumFromJSON(json['type']),
        'grounding': json['grounding'] == null ? undefined : ConversationGroundingFromJSON(json['grounding']),
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
        'pipeline': json['pipeline'] == null ? undefined : QGPTPromptPipelineFromJSON(json['pipeline']),
        'demo': json['demo'] == null ? undefined : json['demo'],
        'summaries': json['summaries'] == null ? undefined : FlattenedWorkstreamSummariesFromJSON(json['summaries']),
    };
}

export function ConversationToJSON(value?: Conversation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'name': value['name'],
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'deleted': GroupedTimestampToJSON(value['deleted']),
        'favorited': value['favorited'],
        'application': ApplicationToJSON(value['application']),
        'annotations': FlattenedAnnotationsToJSON(value['annotations']),
        'messages': FlattenedConversationMessagesToJSON(value['messages']),
        'model': ReferencedModelToJSON(value['model']),
        'assets': FlattenedAssetsToJSON(value['assets']),
        'websites': FlattenedWebsitesToJSON(value['websites']),
        'anchors': FlattenedAnchorsToJSON(value['anchors']),
        'type': ConversationTypeEnumToJSON(value['type']),
        'grounding': ConversationGroundingToJSON(value['grounding']),
        'score': ScoreToJSON(value['score']),
        'pipeline': QGPTPromptPipelineToJSON(value['pipeline']),
        'demo': value['demo'],
        'summaries': FlattenedWorkstreamSummariesToJSON(value['summaries']),
    };
}

