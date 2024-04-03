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
import type { GraphicalMachineLearningProcessingEvent } from './GraphicalMachineLearningProcessingEvent';
import {
    GraphicalMachineLearningProcessingEventFromJSON,
    GraphicalMachineLearningProcessingEventFromJSONTyped,
    GraphicalMachineLearningProcessingEventToJSON,
} from './GraphicalMachineLearningProcessingEvent';
import type { TLPMachineLearningProcessingEvent } from './TLPMachineLearningProcessingEvent';
import {
    TLPMachineLearningProcessingEventFromJSON,
    TLPMachineLearningProcessingEventFromJSONTyped,
    TLPMachineLearningProcessingEventToJSON,
} from './TLPMachineLearningProcessingEvent';

/**
 * 
 * @export
 * @interface SeededTrackedMachineLearningEvent
 */
export interface SeededTrackedMachineLearningEvent {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedMachineLearningEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TLPMachineLearningProcessingEvent}
     * @memberof SeededTrackedMachineLearningEvent
     */
    tlp?: TLPMachineLearningProcessingEvent;
    /**
     * 
     * @type {GraphicalMachineLearningProcessingEvent}
     * @memberof SeededTrackedMachineLearningEvent
     */
    graphical?: GraphicalMachineLearningProcessingEvent;
}

/**
 * Check if a given object implements the SeededTrackedMachineLearningEvent interface.
 */
export function instanceOfSeededTrackedMachineLearningEvent(value: object): boolean {
    return true;
}

export function SeededTrackedMachineLearningEventFromJSON(json: any): SeededTrackedMachineLearningEvent {
    return SeededTrackedMachineLearningEventFromJSONTyped(json, false);
}

export function SeededTrackedMachineLearningEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedMachineLearningEvent {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'tlp': json['tlp'] == null ? undefined : TLPMachineLearningProcessingEventFromJSON(json['tlp']),
        'graphical': json['graphical'] == null ? undefined : GraphicalMachineLearningProcessingEventFromJSON(json['graphical']),
    };
}

export function SeededTrackedMachineLearningEventToJSON(value?: SeededTrackedMachineLearningEvent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'tlp': TLPMachineLearningProcessingEventToJSON(value['tlp']),
        'graphical': GraphicalMachineLearningProcessingEventToJSON(value['graphical']),
    };
}

