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
import type { FlattenedHint } from './FlattenedHint';
import {
    FlattenedHintFromJSON,
    FlattenedHintFromJSONTyped,
    FlattenedHintToJSON,
} from './FlattenedHint';

/**
 * This is the referenced version of a hint, main used for the uuid.
 * @export
 * @interface ReferencedHint
 */
export interface ReferencedHint {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedHint
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedHint
     */
    id: string;
    /**
     * 
     * @type {FlattenedHint}
     * @memberof ReferencedHint
     */
    reference?: FlattenedHint;
}

/**
 * Check if a given object implements the ReferencedHint interface.
 */
export function instanceOfReferencedHint(value: object): boolean {
    if (!('id' in value)) return false;
    return true;
}

export function ReferencedHintFromJSON(json: any): ReferencedHint {
    return ReferencedHintFromJSONTyped(json, false);
}

export function ReferencedHintFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedHint {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': json['reference'] == null ? undefined : FlattenedHintFromJSON(json['reference']),
    };
}

export function ReferencedHintToJSON(value?: ReferencedHint | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'reference': FlattenedHintToJSON(value['reference']),
    };
}

