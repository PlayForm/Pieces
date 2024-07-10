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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { EmbeddingsSearchOptionsEmbeddingTypeEnum } from './EmbeddingsSearchOptionsEmbeddingTypeEnum';
import {
    EmbeddingsSearchOptionsEmbeddingTypeEnumFromJSON,
    EmbeddingsSearchOptionsEmbeddingTypeEnumFromJSONTyped,
    EmbeddingsSearchOptionsEmbeddingTypeEnumToJSON,
} from './EmbeddingsSearchOptionsEmbeddingTypeEnum';

/**
 * similarity: this is optional from 0 - 1, (where 1 is exact and 0 is everything)
 * 
 * TODO consider a plural of types for running many embedding search scopes
 * @export
 * @interface EmbeddingsSearchOptions
 */
export interface EmbeddingsSearchOptions {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof EmbeddingsSearchOptions
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {EmbeddingsSearchOptionsEmbeddingTypeEnum}
     * @memberof EmbeddingsSearchOptions
     */
    type: EmbeddingsSearchOptionsEmbeddingTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EmbeddingsSearchOptions
     */
    similarity?: number;
}

/**
 * Check if a given object implements the EmbeddingsSearchOptions interface.
 */
export function instanceOfEmbeddingsSearchOptions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function EmbeddingsSearchOptionsFromJSON(json: any): EmbeddingsSearchOptions {
    return EmbeddingsSearchOptionsFromJSONTyped(json, false);
}

export function EmbeddingsSearchOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddingsSearchOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'type': EmbeddingsSearchOptionsEmbeddingTypeEnumFromJSON(json['type']),
        'similarity': !exists(json, 'similarity') ? undefined : json['similarity'],
    };
}

export function EmbeddingsSearchOptionsToJSON(value?: EmbeddingsSearchOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'type': EmbeddingsSearchOptionsEmbeddingTypeEnumToJSON(value.type),
        'similarity': value.similarity,
    };
}

