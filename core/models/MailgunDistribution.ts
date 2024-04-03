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
import type { Recipients } from './Recipients';
import {
    RecipientsFromJSON,
    RecipientsFromJSONTyped,
    RecipientsToJSON,
} from './Recipients';

/**
 * This is a specific Distribution for mailgun specific information.
 * @export
 * @interface MailgunDistribution
 */
export interface MailgunDistribution {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof MailgunDistribution
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Recipients}
     * @memberof MailgunDistribution
     */
    recipients: Recipients;
}

/**
 * Check if a given object implements the MailgunDistribution interface.
 */
export function instanceOfMailgunDistribution(value: object): boolean {
    if (!('recipients' in value)) return false;
    return true;
}

export function MailgunDistributionFromJSON(json: any): MailgunDistribution {
    return MailgunDistributionFromJSONTyped(json, false);
}

export function MailgunDistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MailgunDistribution {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'recipients': RecipientsFromJSON(json['recipients']),
    };
}

export function MailgunDistributionToJSON(value?: MailgunDistribution | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'recipients': RecipientsToJSON(value['recipients']),
    };
}

