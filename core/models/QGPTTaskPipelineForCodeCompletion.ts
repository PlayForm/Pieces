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
 * This task is for code_completion ie auto-complete.
 * 
 * This is a class so that we can add optional properties in the future.
 * 
 * context: This is additional snippet context within the file that will be useful for the autocompletion.(PLEASE ONLY pass in Seed.asset.format.fragment.string.raw for the context snippet values, and for the classificaiton pass in Seed.asset.format.classification)
 * 
 * Note: the snippet && language that needs to be Actually AutoCompleted should be within the QGPTQuestionInput.relevant.
 * @export
 * @interface QGPTTaskPipelineForCodeCompletion
 */
export interface QGPTTaskPipelineForCodeCompletion {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTTaskPipelineForCodeCompletion
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<string>}
     * @memberof QGPTTaskPipelineForCodeCompletion
     */
    context?: Array<string>;
}

/**
 * Check if a given object implements the QGPTTaskPipelineForCodeCompletion interface.
 */
export function instanceOfQGPTTaskPipelineForCodeCompletion(value: object): boolean {
    return true;
}

export function QGPTTaskPipelineForCodeCompletionFromJSON(json: any): QGPTTaskPipelineForCodeCompletion {
    return QGPTTaskPipelineForCodeCompletionFromJSONTyped(json, false);
}

export function QGPTTaskPipelineForCodeCompletionFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTTaskPipelineForCodeCompletion {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'context': json['context'] == null ? undefined : json['context'],
    };
}

export function QGPTTaskPipelineForCodeCompletionToJSON(value?: QGPTTaskPipelineForCodeCompletion | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'context': value['context'],
    };
}

