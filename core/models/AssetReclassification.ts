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
import type { Asset } from './Asset';
import {
    AssetFromJSON,
    AssetFromJSONTyped,
    AssetToJSON,
} from './Asset';
import type { ClassificationSpecificEnum } from './ClassificationSpecificEnum';
import {
    ClassificationSpecificEnumFromJSON,
    ClassificationSpecificEnumFromJSONTyped,
    ClassificationSpecificEnumToJSON,
} from './ClassificationSpecificEnum';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * This is a model that will represent the miminum properties required to update the classification of this asset.
 * @export
 * @interface AssetReclassification
 */
export interface AssetReclassification {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof AssetReclassification
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ClassificationSpecificEnum}
     * @memberof AssetReclassification
     */
    ext: ClassificationSpecificEnum;
    /**
     * 
     * @type {Asset}
     * @memberof AssetReclassification
     */
    asset: Asset;
}

/**
 * Check if a given object implements the AssetReclassification interface.
 */
export function instanceOfAssetReclassification(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ext" in value;
    isInstance = isInstance && "asset" in value;

    return isInstance;
}

export function AssetReclassificationFromJSON(json: any): AssetReclassification {
    return AssetReclassificationFromJSONTyped(json, false);
}

export function AssetReclassificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetReclassification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'ext': ClassificationSpecificEnumFromJSON(json['ext']),
        'asset': AssetFromJSON(json['asset']),
    };
}

export function AssetReclassificationToJSON(value?: AssetReclassification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'ext': ClassificationSpecificEnumToJSON(value.ext),
        'asset': AssetToJSON(value.asset),
    };
}

