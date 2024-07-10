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
import type { SearchedAnchor } from './SearchedAnchor';
import {
    SearchedAnchorFromJSON,
    SearchedAnchorFromJSONTyped,
    SearchedAnchorToJSON,
} from './SearchedAnchor';

/**
 * This is the plural Model used to return many SearchedAnchor.
 * @export
 * @interface SearchedAnchors
 */
export interface SearchedAnchors {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedAnchors
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<SearchedAnchor>}
     * @memberof SearchedAnchors
     */
    iterable: Array<SearchedAnchor>;
}

/**
 * Check if a given object implements the SearchedAnchors interface.
 */
export function instanceOfSearchedAnchors(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function SearchedAnchorsFromJSON(json: any): SearchedAnchors {
    return SearchedAnchorsFromJSONTyped(json, false);
}

export function SearchedAnchorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedAnchors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SearchedAnchorFromJSON)),
    };
}

export function SearchedAnchorsToJSON(value?: SearchedAnchors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(SearchedAnchorToJSON)),
    };
}

