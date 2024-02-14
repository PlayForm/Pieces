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
    Application,
    ApplicationFromJSON,
    ApplicationFromJSONTyped,
    ApplicationToJSON,
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './';

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

export function ApplicationsFromJSON(json: any): Applications {
    return ApplicationsFromJSONTyped(json, false);
}

export function ApplicationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Applications {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ApplicationFromJSON)),
    };
}

export function ApplicationsToJSON(value?: Applications | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(ApplicationToJSON)),
    };
}


