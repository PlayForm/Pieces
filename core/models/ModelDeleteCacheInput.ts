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
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './';

/**
 * This is the input model for '/model/{model}/delete/cache'
 * @export
 * @interface ModelDeleteCacheInput
 */
export interface ModelDeleteCacheInput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ModelDeleteCacheInput
     */
    schema?: EmbeddedModelSchema;
}

export function ModelDeleteCacheInputFromJSON(json: any): ModelDeleteCacheInput {
    return ModelDeleteCacheInputFromJSONTyped(json, false);
}

export function ModelDeleteCacheInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelDeleteCacheInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
    };
}

export function ModelDeleteCacheInputToJSON(value?: ModelDeleteCacheInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
    };
}


