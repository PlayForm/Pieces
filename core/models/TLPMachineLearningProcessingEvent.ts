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
import type { TLPCodeProcessing } from './TLPCodeProcessing';
import {
    TLPCodeProcessingFromJSON,
    TLPCodeProcessingFromJSONTyped,
    TLPCodeProcessingToJSON,
} from './TLPCodeProcessing';

/**
 * 
 * @export
 * @interface TLPMachineLearningProcessingEvent
 */
export interface TLPMachineLearningProcessingEvent {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPMachineLearningProcessingEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TLPCodeProcessing}
     * @memberof TLPMachineLearningProcessingEvent
     */
    code?: TLPCodeProcessing;
}

/**
 * Check if a given object implements the TLPMachineLearningProcessingEvent interface.
 */
export function instanceOfTLPMachineLearningProcessingEvent(value: object): boolean {
    return true;
}

export function TLPMachineLearningProcessingEventFromJSON(json: any): TLPMachineLearningProcessingEvent {
    return TLPMachineLearningProcessingEventFromJSONTyped(json, false);
}

export function TLPMachineLearningProcessingEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPMachineLearningProcessingEvent {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'code': json['code'] == null ? undefined : TLPCodeProcessingFromJSON(json['code']),
    };
}

export function TLPMachineLearningProcessingEventToJSON(value?: TLPMachineLearningProcessingEvent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'code': TLPCodeProcessingToJSON(value['code']),
    };
}

