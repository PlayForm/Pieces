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
import type { DiscoveredAssets } from './DiscoveredAssets';
import {
    DiscoveredAssetsFromJSON,
    DiscoveredAssetsFromJSONTyped,
    DiscoveredAssetsToJSON,
} from './DiscoveredAssets';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * This will return assets that were extracted from the html webpage. This will contain the original url so you can double check the results wtih the results you passed in, but it will remain in the same order that it was passed in if used within the /discover/discover/html/webpage endpoint.
 * @export
 * @interface DiscoveredHtmlWebpage
 */
export interface DiscoveredHtmlWebpage {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof DiscoveredHtmlWebpage
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {DiscoveredAssets}
     * @memberof DiscoveredHtmlWebpage
     */
    assets: DiscoveredAssets;
    /**
     * 
     * @type {string}
     * @memberof DiscoveredHtmlWebpage
     */
    url: string;
}

/**
 * Check if a given object implements the DiscoveredHtmlWebpage interface.
 */
export function instanceOfDiscoveredHtmlWebpage(value: object): boolean {
    if (!('assets' in value)) return false;
    if (!('url' in value)) return false;
    return true;
}

export function DiscoveredHtmlWebpageFromJSON(json: any): DiscoveredHtmlWebpage {
    return DiscoveredHtmlWebpageFromJSONTyped(json, false);
}

export function DiscoveredHtmlWebpageFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscoveredHtmlWebpage {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'assets': DiscoveredAssetsFromJSON(json['assets']),
        'url': json['url'],
    };
}

export function DiscoveredHtmlWebpageToJSON(value?: DiscoveredHtmlWebpage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'assets': DiscoveredAssetsToJSON(value['assets']),
        'url': value['url'],
    };
}

