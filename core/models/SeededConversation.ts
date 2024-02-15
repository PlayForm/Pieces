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
    Application,
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
    ConversationTypeEnum,
    ConversationTypeEnumFromJSON,
    ConversationTypeEnumFromJSONTyped,
    ConversationTypeEnumToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
    FlattenedAssets,
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
    FlattenedWebsites,
    FlattenedWebsitesFromJSON,
    FlattenedWebsitesFromJSONTyped,
    FlattenedWebsitesToJSON,
    QGPTPromptPipeline,
    QGPTPromptPipelineFromJSON,
    QGPTPromptPipelineFromJSONTyped,
    QGPTPromptPipelineToJSON,
    ReferencedModel,
    ReferencedModelFromJSON,
    ReferencedModelFromJSONTyped,
    ReferencedModelToJSON,
    SeededAnchor,
    SeededAnchorFromJSON,
    SeededAnchorFromJSONTyped,
    SeededAnchorToJSON,
    SeededAnnotation,
    SeededAnnotationFromJSON,
    SeededAnnotationFromJSONTyped,
    SeededAnnotationToJSON,
    SeededConversationMessage,
    SeededConversationMessageFromJSON,
    SeededConversationMessageFromJSONTyped,
    SeededConversationMessageToJSON,
} from './';

/**
 * This is a pre-Conversation object.
 * 
 * This will hold together a conversation. Ie allthe message within a conversation.
 * 
 * All the additional properties on here used on here like(anchors/assets) are used for context that will seed the conversation.
 * 
 * model is a calculated property, and will be the model of the last message sent if applicable.
 * @export
 * @interface SeededConversation
 */
export interface SeededConversation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededConversation
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is a name that is customized.
     * @type {string}
     * @memberof SeededConversation
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SeededConversation
     */
    favorited?: boolean;
    /**
     * 
     * @type {Application}
     * @memberof SeededConversation
     */
    application?: Application;
    /**
     * 
     * @type {Array<SeededAnnotation>}
     * @memberof SeededConversation
     */
    annotations?: Array<SeededAnnotation>;
    /**
     * 
     * @type {Array<SeededConversationMessage>}
     * @memberof SeededConversation
     */
    messages?: Array<SeededConversationMessage>;
    /**
     * 
     * @type {ReferencedModel}
     * @memberof SeededConversation
     */
    model?: ReferencedModel;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof SeededConversation
     */
    assets?: FlattenedAssets;
    /**
     * 
     * @type {FlattenedWebsites}
     * @memberof SeededConversation
     */
    websites?: FlattenedWebsites;
    /**
     * 
     * @type {Array<SeededAnchor>}
     * @memberof SeededConversation
     */
    anchors?: Array<SeededAnchor>;
    /**
     * 
     * @type {ConversationTypeEnum}
     * @memberof SeededConversation
     */
    type: ConversationTypeEnum;
    /**
     * 
     * @type {QGPTPromptPipeline}
     * @memberof SeededConversation
     */
    pipeline?: QGPTPromptPipeline;
    /**
     * This will let us know if this conversation was generated as a 'demo' conversation
     * @type {boolean}
     * @memberof SeededConversation
     */
    demo?: boolean;
}

export function SeededConversationFromJSON(json: any): SeededConversation {
    return SeededConversationFromJSONTyped(json, false);
}

export function SeededConversationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededConversation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'favorited': !exists(json, 'favorited') ? undefined : json['favorited'],
        'application': !exists(json, 'application') ? undefined : ApplicationFromJSON(json['application']),
        'annotations': !exists(json, 'annotations') ? undefined : ((json['annotations'] as Array<any>).map(SeededAnnotationFromJSON)),
        'messages': !exists(json, 'messages') ? undefined : ((json['messages'] as Array<any>).map(SeededConversationMessageFromJSON)),
        'model': !exists(json, 'model') ? undefined : ReferencedModelFromJSON(json['model']),
        'assets': !exists(json, 'assets') ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'websites': !exists(json, 'websites') ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'anchors': !exists(json, 'anchors') ? undefined : ((json['anchors'] as Array<any>).map(SeededAnchorFromJSON)),
        'type': ConversationTypeEnumFromJSON(json['type']),
        'pipeline': !exists(json, 'pipeline') ? undefined : QGPTPromptPipelineFromJSON(json['pipeline']),
        'demo': !exists(json, 'demo') ? undefined : json['demo'],
    };
}

export function SeededConversationToJSON(value?: SeededConversation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'name': value.name,
        'favorited': value.favorited,
        'application': ApplicationToJSON(value.application),
        'annotations': value.annotations === undefined ? undefined : ((value.annotations as Array<any>).map(SeededAnnotationToJSON)),
        'messages': value.messages === undefined ? undefined : ((value.messages as Array<any>).map(SeededConversationMessageToJSON)),
        'model': ReferencedModelToJSON(value.model),
        'assets': FlattenedAssetsToJSON(value.assets),
        'websites': FlattenedWebsitesToJSON(value.websites),
        'anchors': value.anchors === undefined ? undefined : ((value.anchors as Array<any>).map(SeededAnchorToJSON)),
        'type': ConversationTypeEnumToJSON(value.type),
        'pipeline': QGPTPromptPipelineToJSON(value.pipeline),
        'demo': value.demo,
    };
}


