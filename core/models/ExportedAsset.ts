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
import type { FileFormat } from './FileFormat';
import {
    FileFormatFromJSON,
    FileFormatFromJSONTyped,
    FileFormatToJSON,
} from './FileFormat';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';

/**
 * This is a model for a minimum exported version of an asset.
 * @export
 * @interface ExportedAsset
 */
export interface ExportedAsset {
    /**
     * this is the title of the asset
     * 
     * @type {string}
     * @memberof ExportedAsset
     */
    name: string;
    /**
     * this is the description of the asset
     * @type {string}
     * @memberof ExportedAsset
     */
    description: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof ExportedAsset
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {FileFormat}
     * @memberof ExportedAsset
     */
    raw: FileFormat;
}

/**
 * Check if a given object implements the ExportedAsset interface.
 */
export function instanceOfExportedAsset(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('description' in value)) return false;
    if (!('created' in value)) return false;
    if (!('raw' in value)) return false;
    return true;
}

export function ExportedAssetFromJSON(json: any): ExportedAsset {
    return ExportedAssetFromJSONTyped(json, false);
}

export function ExportedAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportedAsset {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'created': GroupedTimestampFromJSON(json['created']),
        'raw': FileFormatFromJSON(json['raw']),
    };
}

export function ExportedAssetToJSON(value?: ExportedAsset | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'description': value['description'],
        'created': GroupedTimestampToJSON(value['created']),
        'raw': FileFormatToJSON(value['raw']),
    };
}

