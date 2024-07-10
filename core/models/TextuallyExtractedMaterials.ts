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
import type { TextuallyExtractedMaterial } from './TextuallyExtractedMaterial';
import {
    TextuallyExtractedMaterialFromJSON,
    TextuallyExtractedMaterialFromJSONTyped,
    TextuallyExtractedMaterialToJSON,
} from './TextuallyExtractedMaterial';

/**
 * This is a plural of an Extraction
 * @export
 * @interface TextuallyExtractedMaterials
 */
export interface TextuallyExtractedMaterials {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TextuallyExtractedMaterials
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<TextuallyExtractedMaterial>}
     * @memberof TextuallyExtractedMaterials
     */
    iterable: Array<TextuallyExtractedMaterial>;
}

/**
 * Check if a given object implements the TextuallyExtractedMaterials interface.
 */
export function instanceOfTextuallyExtractedMaterials(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function TextuallyExtractedMaterialsFromJSON(json: any): TextuallyExtractedMaterials {
    return TextuallyExtractedMaterialsFromJSONTyped(json, false);
}

export function TextuallyExtractedMaterialsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextuallyExtractedMaterials {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(TextuallyExtractedMaterialFromJSON)),
    };
}

export function TextuallyExtractedMaterialsToJSON(value?: TextuallyExtractedMaterials | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(TextuallyExtractedMaterialToJSON)),
    };
}

