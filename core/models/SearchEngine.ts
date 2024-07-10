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
import type { EmbeddingsSearchOptions } from './EmbeddingsSearchOptions';
import {
    EmbeddingsSearchOptionsFromJSON,
    EmbeddingsSearchOptionsFromJSONTyped,
    EmbeddingsSearchOptionsToJSON,
} from './EmbeddingsSearchOptions';
import type { FullTextSearchOptions } from './FullTextSearchOptions';
import {
    FullTextSearchOptionsFromJSON,
    FullTextSearchOptionsFromJSONTyped,
    FullTextSearchOptionsToJSON,
} from './FullTextSearchOptions';
import type { SearchEngines } from './SearchEngines';
import {
    SearchEnginesFromJSON,
    SearchEnginesFromJSONTyped,
    SearchEnginesToJSON,
} from './SearchEngines';
import type { TemporalSearchOptions } from './TemporalSearchOptions';
import {
    TemporalSearchOptionsFromJSON,
    TemporalSearchOptionsFromJSONTyped,
    TemporalSearchOptionsToJSON,
} from './TemporalSearchOptions';
import type { WorkstreamSearchOptions } from './WorkstreamSearchOptions';
import {
    WorkstreamSearchOptionsFromJSON,
    WorkstreamSearchOptionsFromJSONTyped,
    WorkstreamSearchOptionsToJSON,
} from './WorkstreamSearchOptions';

/**
 * This will determine the type of search that will run
 * 
 * These are all different searching methods all of which are exclusive.
 * Meaning that you cannot mix & match types.
 * 
 * operations: is here if you want to build complex searching behavior.
 * (A || B) && (B || C) , note this can get very complex but can be as flexible as you need.
 * @export
 * @interface SearchEngine
 */
export interface SearchEngine {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchEngine
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof SearchEngine
     */
    query?: string;
    /**
     * 
     * @type {EmbeddingsSearchOptions}
     * @memberof SearchEngine
     */
    embeddings?: EmbeddingsSearchOptions;
    /**
     * 
     * @type {FullTextSearchOptions}
     * @memberof SearchEngine
     */
    fullText?: FullTextSearchOptions;
    /**
     * 
     * @type {TemporalSearchOptions}
     * @memberof SearchEngine
     */
    temporal?: TemporalSearchOptions;
    /**
     * 
     * @type {WorkstreamSearchOptions}
     * @memberof SearchEngine
     */
    workstream?: WorkstreamSearchOptions;
    /**
     * 
     * @type {SearchEngines}
     * @memberof SearchEngine
     */
    operations?: SearchEngines;
}

/**
 * Check if a given object implements the SearchEngine interface.
 */
export function instanceOfSearchEngine(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SearchEngineFromJSON(json: any): SearchEngine {
    return SearchEngineFromJSONTyped(json, false);
}

export function SearchEngineFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchEngine {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'query': !exists(json, 'query') ? undefined : json['query'],
        'embeddings': !exists(json, 'embeddings') ? undefined : EmbeddingsSearchOptionsFromJSON(json['embeddings']),
        'fullText': !exists(json, 'full_text') ? undefined : FullTextSearchOptionsFromJSON(json['full_text']),
        'temporal': !exists(json, 'temporal') ? undefined : TemporalSearchOptionsFromJSON(json['temporal']),
        'workstream': !exists(json, 'workstream') ? undefined : WorkstreamSearchOptionsFromJSON(json['workstream']),
        'operations': !exists(json, 'operations') ? undefined : SearchEnginesFromJSON(json['operations']),
    };
}

export function SearchEngineToJSON(value?: SearchEngine | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'query': value.query,
        'embeddings': EmbeddingsSearchOptionsToJSON(value.embeddings),
        'full_text': FullTextSearchOptionsToJSON(value.fullText),
        'temporal': TemporalSearchOptionsToJSON(value.temporal),
        'workstream': WorkstreamSearchOptionsToJSON(value.workstream),
        'operations': SearchEnginesToJSON(value.operations),
    };
}

