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

/**
 * TODO add additional properties.
 * TODO eventually modify this model to look like the response from Mailgun.
 * @export
 * @interface MailgunMetadata
 */
export interface MailgunMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof MailgunMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the id given to us from mailgun when the email was sent successfully.
     * @type {string}
     * @memberof MailgunMetadata
     */
    messageId: string;
}

/**
 * Check if a given object implements the MailgunMetadata interface.
 */
export function instanceOfMailgunMetadata(value: object): boolean {
    if (!('messageId' in value)) return false;
    return true;
}

export function MailgunMetadataFromJSON(json: any): MailgunMetadata {
    return MailgunMetadataFromJSONTyped(json, false);
}

export function MailgunMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MailgunMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'messageId': json['messageId'],
    };
}

export function MailgunMetadataToJSON(value?: MailgunMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'messageId': value['messageId'],
    };
}

