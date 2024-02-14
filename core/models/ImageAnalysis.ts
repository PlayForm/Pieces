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
    OCRAnalysis,
    OCRAnalysisFromJSON,
    OCRAnalysisFromJSONTyped,
    OCRAnalysisToJSON,
} from './';

/**
 * This is a model that represents all the information collected during the processing of an image.
 * @export
 * @interface ImageAnalysis
 */
export interface ImageAnalysis {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ImageAnalysis
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is a uuid that represents a imageAnalysis.
     * @type {string}
     * @memberof ImageAnalysis
     */
    id: string;
    /**
     * this is a reference to the analysis.
     * @type {string}
     * @memberof ImageAnalysis
     */
    analysis: string;
    /**
     * 
     * @type {OCRAnalysis}
     * @memberof ImageAnalysis
     */
    ocr?: OCRAnalysis;
}

export function ImageAnalysisFromJSON(json: any): ImageAnalysis {
    return ImageAnalysisFromJSONTyped(json, false);
}

export function ImageAnalysisFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageAnalysis {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'analysis': json['analysis'],
        'ocr': !exists(json, 'ocr') ? undefined : OCRAnalysisFromJSON(json['ocr']),
    };
}

export function ImageAnalysisToJSON(value?: ImageAnalysis | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'id': value.id,
        'analysis': value.analysis,
        'ocr': OCRAnalysisToJSON(value.ocr),
    };
}


