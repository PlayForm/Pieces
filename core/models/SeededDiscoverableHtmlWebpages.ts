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
import type { SeededDiscoverableHtmlWebpage } from './SeededDiscoverableHtmlWebpage';
import {
    SeededDiscoverableHtmlWebpageFromJSON,
    SeededDiscoverableHtmlWebpageFromJSONTyped,
    SeededDiscoverableHtmlWebpageToJSON,
} from './SeededDiscoverableHtmlWebpage';

/**
 * 
 * @export
 * @interface SeededDiscoverableHtmlWebpages
 */
export interface SeededDiscoverableHtmlWebpages {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededDiscoverableHtmlWebpages
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<SeededDiscoverableHtmlWebpage>}
     * @memberof SeededDiscoverableHtmlWebpages
     */
    iterable: Array<SeededDiscoverableHtmlWebpage>;
    /**
     * This is the applicaiton Id used to connect to Pieces OS.
     * @type {string}
     * @memberof SeededDiscoverableHtmlWebpages
     */
    application: string;
}

/**
 * Check if a given object implements the SeededDiscoverableHtmlWebpages interface.
 */
export function instanceOfSeededDiscoverableHtmlWebpages(value: object): boolean {
    if (!('iterable' in value)) return false;
    if (!('application' in value)) return false;
    return true;
}

export function SeededDiscoverableHtmlWebpagesFromJSON(json: any): SeededDiscoverableHtmlWebpages {
    return SeededDiscoverableHtmlWebpagesFromJSONTyped(json, false);
}

export function SeededDiscoverableHtmlWebpagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededDiscoverableHtmlWebpages {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SeededDiscoverableHtmlWebpageFromJSON)),
        'application': json['application'],
    };
}

export function SeededDiscoverableHtmlWebpagesToJSON(value?: SeededDiscoverableHtmlWebpages | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(SeededDiscoverableHtmlWebpageToJSON)),
        'application': value['application'],
    };
}

