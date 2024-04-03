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
import type { ClassificationGenericEnum } from './ClassificationGenericEnum';
import {
    ClassificationGenericEnumFromJSON,
    ClassificationGenericEnumFromJSONTyped,
    ClassificationGenericEnumToJSON,
} from './ClassificationGenericEnum';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { Model } from './Model';
import {
    ModelFromJSON,
    ModelFromJSONTyped,
    ModelToJSON,
} from './Model';

/**
 * This is the ML Analysis object Specific to code.
 * 
 * prediction and similarity are custom types {[string]: number}. ** please dont not modify **
 * @export
 * @interface CodeAnalysis
 */
export interface CodeAnalysis {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof CodeAnalysis
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<string>}
     * @memberof CodeAnalysis
     */
    tokenized?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CodeAnalysis
     */
    language?: string;
    /**
     * 
     * @type {ClassificationGenericEnum}
     * @memberof CodeAnalysis
     */
    type: ClassificationGenericEnum;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof CodeAnalysis
     */
    prediction?: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof CodeAnalysis
     */
    similarity?: { [key: string]: number; };
    /**
     * 
     * @type {Array<number>}
     * @memberof CodeAnalysis
     */
    top5Colors?: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CodeAnalysis
     */
    top5Sorted?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CodeAnalysis
     */
    id: string;
    /**
     * this is just a reference to the analysis parent object.
     * @type {string}
     * @memberof CodeAnalysis
     */
    analysis: string;
    /**
     * 
     * @type {Model}
     * @memberof CodeAnalysis
     */
    model: Model;
}

/**
 * Check if a given object implements the CodeAnalysis interface.
 */
export function instanceOfCodeAnalysis(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "analysis" in value;
    isInstance = isInstance && "model" in value;

    return isInstance;
}

export function CodeAnalysisFromJSON(json: any): CodeAnalysis {
    return CodeAnalysisFromJSONTyped(json, false);
}

export function CodeAnalysisFromJSONTyped(json: any, ignoreDiscriminator: boolean): CodeAnalysis {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'tokenized': !exists(json, 'tokenized') ? undefined : json['tokenized'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'type': ClassificationGenericEnumFromJSON(json['type']),
        'prediction': !exists(json, 'prediction') ? undefined : json['prediction'],
        'similarity': !exists(json, 'similarity') ? undefined : json['similarity'],
        'top5Colors': !exists(json, 'top5Colors') ? undefined : json['top5Colors'],
        'top5Sorted': !exists(json, 'top5Sorted') ? undefined : json['top5Sorted'],
        'id': json['id'],
        'analysis': json['analysis'],
        'model': ModelFromJSON(json['model']),
    };
}

export function CodeAnalysisToJSON(value?: CodeAnalysis | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'tokenized': value.tokenized,
        'language': value.language,
        'type': ClassificationGenericEnumToJSON(value.type),
        'prediction': value.prediction,
        'similarity': value.similarity,
        'top5Colors': value.top5Colors,
        'top5Sorted': value.top5Sorted,
        'id': value.id,
        'analysis': value.analysis,
        'model': ModelToJSON(value.model),
    };
}

