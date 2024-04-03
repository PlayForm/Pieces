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
/**
 * If an asset was created from a file attachment
 * @export
 * @interface TrackedAssetEventCreationMetadataFile
 */
export interface TrackedAssetEventCreationMetadataFile {
    /**
     * Whether the file was pasted via the keyboard
     * @type {boolean}
     * @memberof TrackedAssetEventCreationMetadataFile
     */
    keyboard?: boolean;
    /**
     * Whether the file was dropped onto pieces
     * @type {boolean}
     * @memberof TrackedAssetEventCreationMetadataFile
     */
    dragAndDrop?: boolean;
    /**
     * Whether the file was attached via a button click
     * @type {boolean}
     * @memberof TrackedAssetEventCreationMetadataFile
     */
    interaction?: boolean;
}

/**
 * Check if a given object implements the TrackedAssetEventCreationMetadataFile interface.
 */
export function instanceOfTrackedAssetEventCreationMetadataFile(value: object): boolean {
    return true;
}

export function TrackedAssetEventCreationMetadataFileFromJSON(json: any): TrackedAssetEventCreationMetadataFile {
    return TrackedAssetEventCreationMetadataFileFromJSONTyped(json, false);
}

export function TrackedAssetEventCreationMetadataFileFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedAssetEventCreationMetadataFile {
    if (json == null) {
        return json;
    }
    return {
        
        'keyboard': json['keyboard'] == null ? undefined : json['keyboard'],
        'dragAndDrop': json['drag_and_drop'] == null ? undefined : json['drag_and_drop'],
        'interaction': json['interaction'] == null ? undefined : json['interaction'],
    };
}

export function TrackedAssetEventCreationMetadataFileToJSON(value?: TrackedAssetEventCreationMetadataFile | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'keyboard': value['keyboard'],
        'drag_and_drop': value['dragAndDrop'],
        'interaction': value['interaction'],
    };
}

