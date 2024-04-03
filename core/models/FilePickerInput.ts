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

/**
 * This is the input model for the FilePicker
 * @export
 * @interface FilePickerInput
 */
export interface FilePickerInput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FilePickerInput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<string>}
     * @memberof FilePickerInput
     */
    allowedExtensions?: Array<string>;
}

/**
 * Check if a given object implements the FilePickerInput interface.
 */
export function instanceOfFilePickerInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FilePickerInputFromJSON(json: any): FilePickerInput {
    return FilePickerInputFromJSONTyped(json, false);
}

export function FilePickerInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilePickerInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'allowedExtensions': !exists(json, 'allowedExtensions') ? undefined : json['allowedExtensions'],
    };
}

export function FilePickerInputToJSON(value?: FilePickerInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'allowedExtensions': value.allowedExtensions,
    };
}

