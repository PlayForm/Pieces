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
import type { Application } from './Application';
import {
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
} from './Application';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * A list of all the applications
 * @export
 * @interface Applications
 */
export interface Applications {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Applications
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<Application>}
     * @memberof Applications
     */
    iterable: Array<Application>;
}

/**
 * Check if a given object implements the Applications interface.
 */
export function instanceOfApplications(value: object): boolean {
    if (!('iterable' in value)) return false;
    return true;
}

export function ApplicationsFromJSON(json: any): Applications {
    return ApplicationsFromJSONTyped(json, false);
}

export function ApplicationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Applications {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ApplicationFromJSON)),
    };
}

export function ApplicationsToJSON(value?: Applications | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(ApplicationToJSON)),
    };
}

