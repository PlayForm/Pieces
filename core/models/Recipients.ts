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
import type { PersonBasicType } from './PersonBasicType';
import {
    PersonBasicTypeFromJSON,
    PersonBasicTypeFromJSONTyped,
    PersonBasicTypeToJSON,
} from './PersonBasicType';

/**
 * This an iterable of People that are attached to a specific distribution ie, slack, maigun, ...etc
 * @export
 * @interface Recipients
 */
export interface Recipients {
    /**
     * 
     * @type {Array<PersonBasicType>}
     * @memberof Recipients
     */
    iterable: Array<PersonBasicType>;
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Recipients
     */
    schema?: EmbeddedModelSchema;
}

/**
 * Check if a given object implements the Recipients interface.
 */
export function instanceOfRecipients(value: object): boolean {
    if (!('iterable' in value)) return false;
    return true;
}

export function RecipientsFromJSON(json: any): Recipients {
    return RecipientsFromJSONTyped(json, false);
}

export function RecipientsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Recipients {
    if (json == null) {
        return json;
    }
    return {
        
        'iterable': ((json['iterable'] as Array<any>).map(PersonBasicTypeFromJSON)),
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
    };
}

export function RecipientsToJSON(value?: Recipients | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'iterable': ((value['iterable'] as Array<any>).map(PersonBasicTypeToJSON)),
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
    };
}

