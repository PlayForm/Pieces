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
import type { TLPCodeFragmentSuggestedReuse } from './TLPCodeFragmentSuggestedReuse';
import {
    TLPCodeFragmentSuggestedReuseFromJSON,
    TLPCodeFragmentSuggestedReuseFromJSONTyped,
    TLPCodeFragmentSuggestedReuseToJSON,
} from './TLPCodeFragmentSuggestedReuse';
import type { TLPCodeFragmentSuggestedSave } from './TLPCodeFragmentSuggestedSave';
import {
    TLPCodeFragmentSuggestedSaveFromJSON,
    TLPCodeFragmentSuggestedSaveFromJSONTyped,
    TLPCodeFragmentSuggestedSaveToJSON,
} from './TLPCodeFragmentSuggestedSave';

/**
 * 
 * @export
 * @interface TLPCodeSnippetSuggestedInteractions
 */
export interface TLPCodeSnippetSuggestedInteractions {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeSnippetSuggestedInteractions
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {TLPCodeFragmentSuggestedSave}
     * @memberof TLPCodeSnippetSuggestedInteractions
     */
    save?: TLPCodeFragmentSuggestedSave;
    /**
     * 
     * @type {TLPCodeFragmentSuggestedReuse}
     * @memberof TLPCodeSnippetSuggestedInteractions
     */
    reuse?: TLPCodeFragmentSuggestedReuse;
}

/**
 * Check if a given object implements the TLPCodeSnippetSuggestedInteractions interface.
 */
export function instanceOfTLPCodeSnippetSuggestedInteractions(value: object): boolean {
    return true;
}

export function TLPCodeSnippetSuggestedInteractionsFromJSON(json: any): TLPCodeSnippetSuggestedInteractions {
    return TLPCodeSnippetSuggestedInteractionsFromJSONTyped(json, false);
}

export function TLPCodeSnippetSuggestedInteractionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeSnippetSuggestedInteractions {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'save': json['save'] == null ? undefined : TLPCodeFragmentSuggestedSaveFromJSON(json['save']),
        'reuse': json['reuse'] == null ? undefined : TLPCodeFragmentSuggestedReuseFromJSON(json['reuse']),
    };
}

export function TLPCodeSnippetSuggestedInteractionsToJSON(value?: TLPCodeSnippetSuggestedInteractions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'save': TLPCodeFragmentSuggestedSaveToJSON(value['save']),
        'reuse': TLPCodeFragmentSuggestedReuseToJSON(value['reuse']),
    };
}

