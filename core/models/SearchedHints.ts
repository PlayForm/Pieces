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
import type { SearchedHint } from './SearchedHint';
import {
    SearchedHintFromJSON,
    SearchedHintFromJSONTyped,
    SearchedHintToJSON,
} from './SearchedHint';

/**
 * This is the plural Model used to return many SearchedHint.
 * @export
 * @interface SearchedHints
 */
export interface SearchedHints {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedHints
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<SearchedHint>}
     * @memberof SearchedHints
     */
    iterable: Array<SearchedHint>;
}

/**
 * Check if a given object implements the SearchedHints interface.
 */
export function instanceOfSearchedHints(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function SearchedHintsFromJSON(json: any): SearchedHints {
    return SearchedHintsFromJSONTyped(json, false);
}

export function SearchedHintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedHints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SearchedHintFromJSON)),
    };
}

export function SearchedHintsToJSON(value?: SearchedHints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(SearchedHintToJSON)),
    };
}
