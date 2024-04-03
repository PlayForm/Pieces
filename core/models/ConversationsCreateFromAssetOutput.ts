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
import type { ReferencedConversation } from './ReferencedConversation';
import {
    ReferencedConversationFromJSON,
    ReferencedConversationFromJSONTyped,
    ReferencedConversationToJSON,
} from './ReferencedConversation';

/**
 * This is the model for the output for the "/conversations/create/from_asset/{asset}" endpoints.
 * @export
 * @interface ConversationsCreateFromAssetOutput
 */
export interface ConversationsCreateFromAssetOutput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ConversationsCreateFromAssetOutput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ReferencedConversation}
     * @memberof ConversationsCreateFromAssetOutput
     */
    conversation: ReferencedConversation;
}

/**
 * Check if a given object implements the ConversationsCreateFromAssetOutput interface.
 */
export function instanceOfConversationsCreateFromAssetOutput(value: object): boolean {
    if (!('conversation' in value)) return false;
    return true;
}

export function ConversationsCreateFromAssetOutputFromJSON(json: any): ConversationsCreateFromAssetOutput {
    return ConversationsCreateFromAssetOutputFromJSONTyped(json, false);
}

export function ConversationsCreateFromAssetOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationsCreateFromAssetOutput {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'conversation': ReferencedConversationFromJSON(json['conversation']),
    };
}

export function ConversationsCreateFromAssetOutputToJSON(value?: ConversationsCreateFromAssetOutput | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'conversation': ReferencedConversationToJSON(value['conversation']),
    };
}

