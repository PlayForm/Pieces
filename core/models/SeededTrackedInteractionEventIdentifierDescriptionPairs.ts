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

/**
 * 
 * @export
 * @interface SeededTrackedInteractionEventIdentifierDescriptionPairs
 */
export interface SeededTrackedInteractionEventIdentifierDescriptionPairs {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedInteractionEventIdentifierDescriptionPairs
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof SeededTrackedInteractionEventIdentifierDescriptionPairs
     */
    assetsListRefreshed?: SeededTrackedInteractionEventIdentifierDescriptionPairsAssetsListRefreshedEnum;
}


/**
 * @export
 */
export const SeededTrackedInteractionEventIdentifierDescriptionPairsAssetsListRefreshedEnum = {
    TheAssetsListWasRefreshedThroughUiElement: 'the_assets_list_was_refreshed_through_ui_element'
} as const;
export type SeededTrackedInteractionEventIdentifierDescriptionPairsAssetsListRefreshedEnum = typeof SeededTrackedInteractionEventIdentifierDescriptionPairsAssetsListRefreshedEnum[keyof typeof SeededTrackedInteractionEventIdentifierDescriptionPairsAssetsListRefreshedEnum];


/**
 * Check if a given object implements the SeededTrackedInteractionEventIdentifierDescriptionPairs interface.
 */
export function instanceOfSeededTrackedInteractionEventIdentifierDescriptionPairs(value: object): boolean {
    return true;
}

export function SeededTrackedInteractionEventIdentifierDescriptionPairsFromJSON(json: any): SeededTrackedInteractionEventIdentifierDescriptionPairs {
    return SeededTrackedInteractionEventIdentifierDescriptionPairsFromJSONTyped(json, false);
}

export function SeededTrackedInteractionEventIdentifierDescriptionPairsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedInteractionEventIdentifierDescriptionPairs {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'assetsListRefreshed': json['assets_list_refreshed'] == null ? undefined : json['assets_list_refreshed'],
    };
}

export function SeededTrackedInteractionEventIdentifierDescriptionPairsToJSON(value?: SeededTrackedInteractionEventIdentifierDescriptionPairs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'assets_list_refreshed': value['assetsListRefreshed'],
    };
}

