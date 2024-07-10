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
import type { Conversation } from './Conversation';
import {
    ConversationFromJSON,
    ConversationFromJSONTyped,
    ConversationToJSON,
} from './Conversation';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { SearchedAnnotations } from './SearchedAnnotations';
import {
    SearchedAnnotationsFromJSON,
    SearchedAnnotationsFromJSONTyped,
    SearchedAnnotationsToJSON,
} from './SearchedAnnotations';
import type { SearchedConversationMessages } from './SearchedConversationMessages';
import {
    SearchedConversationMessagesFromJSON,
    SearchedConversationMessagesFromJSONTyped,
    SearchedConversationMessagesToJSON,
} from './SearchedConversationMessages';

/**
 * This is used for the Conversations searching endpoint.
 * 
 * conversation here is only provided if transferables are set to true.
 * 
 * temporal: if this is provided this means that their material matched the input via a timestamp.
 * 
 * TODO will want to consider returning related materials to this material potentially both associated/ and not associated materials
 * ie suggestion: WorkstreamSuggestions
 * @export
 * @interface SearchedConversation
 */
export interface SearchedConversation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedConversation
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Conversation}
     * @memberof SearchedConversation
     */
    conversation?: Conversation;
    /**
     * 
     * @type {SearchedConversationMessages}
     * @memberof SearchedConversation
     */
    messages?: SearchedConversationMessages;
    /**
     * 
     * @type {SearchedAnnotations}
     * @memberof SearchedConversation
     */
    annotations?: SearchedAnnotations;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedConversation
     */
    exact: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchedConversation
     */
    similarity: number;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedConversation
     */
    temporal?: boolean;
    /**
     * This is the uuid of the conversation.
     * @type {string}
     * @memberof SearchedConversation
     */
    identifier: string;
}

/**
 * Check if a given object implements the SearchedConversation interface.
 */
export function instanceOfSearchedConversation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "exact" in value;
    isInstance = isInstance && "similarity" in value;
    isInstance = isInstance && "identifier" in value;

    return isInstance;
}

export function SearchedConversationFromJSON(json: any): SearchedConversation {
    return SearchedConversationFromJSONTyped(json, false);
}

export function SearchedConversationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedConversation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'conversation': !exists(json, 'conversation') ? undefined : ConversationFromJSON(json['conversation']),
        'messages': !exists(json, 'messages') ? undefined : SearchedConversationMessagesFromJSON(json['messages']),
        'annotations': !exists(json, 'annotations') ? undefined : SearchedAnnotationsFromJSON(json['annotations']),
        'exact': json['exact'],
        'similarity': json['similarity'],
        'temporal': !exists(json, 'temporal') ? undefined : json['temporal'],
        'identifier': json['identifier'],
    };
}

export function SearchedConversationToJSON(value?: SearchedConversation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'conversation': ConversationToJSON(value.conversation),
        'messages': SearchedConversationMessagesToJSON(value.messages),
        'annotations': SearchedAnnotationsToJSON(value.annotations),
        'exact': value.exact,
        'similarity': value.similarity,
        'temporal': value.temporal,
        'identifier': value.identifier,
    };
}

