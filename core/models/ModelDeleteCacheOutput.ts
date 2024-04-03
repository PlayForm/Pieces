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
import type { ReferencedModel } from './ReferencedModel';
import {
    ReferencedModelFromJSON,
    ReferencedModelFromJSONTyped,
    ReferencedModelToJSON,
} from './ReferencedModel';

/**
 * This is the output model for '/model/{model}/delete/cache'
 * @export
 * @interface ModelDeleteCacheOutput
 */
export interface ModelDeleteCacheOutput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ModelDeleteCacheOutput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ReferencedModel}
     * @memberof ModelDeleteCacheOutput
     */
    model: ReferencedModel;
}

/**
 * Check if a given object implements the ModelDeleteCacheOutput interface.
 */
export function instanceOfModelDeleteCacheOutput(value: object): boolean {
    if (!('model' in value)) return false;
    return true;
}

export function ModelDeleteCacheOutputFromJSON(json: any): ModelDeleteCacheOutput {
    return ModelDeleteCacheOutputFromJSONTyped(json, false);
}

export function ModelDeleteCacheOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelDeleteCacheOutput {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'model': ReferencedModelFromJSON(json['model']),
    };
}

export function ModelDeleteCacheOutputToJSON(value?: ModelDeleteCacheOutput | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'model': ReferencedModelToJSON(value['model']),
    };
}

