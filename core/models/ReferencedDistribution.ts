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
import type { FlattenedDistribution } from './FlattenedDistribution';
import {
    FlattenedDistributionFromJSON,
    FlattenedDistributionFromJSONTyped,
    FlattenedDistributionToJSON,
} from './FlattenedDistribution';

/**
 * 
 * @export
 * @interface ReferencedDistribution
 */
export interface ReferencedDistribution {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedDistribution
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedDistribution
     */
    id: string;
    /**
     * 
     * @type {FlattenedDistribution}
     * @memberof ReferencedDistribution
     */
    reference?: FlattenedDistribution;
}

/**
 * Check if a given object implements the ReferencedDistribution interface.
 */
export function instanceOfReferencedDistribution(value: object): boolean {
    if (!('id' in value)) return false;
    return true;
}

export function ReferencedDistributionFromJSON(json: any): ReferencedDistribution {
    return ReferencedDistributionFromJSONTyped(json, false);
}

export function ReferencedDistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedDistribution {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': json['reference'] == null ? undefined : FlattenedDistributionFromJSON(json['reference']),
    };
}

export function ReferencedDistributionToJSON(value?: ReferencedDistribution | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'reference': FlattenedDistributionToJSON(value['reference']),
    };
}

