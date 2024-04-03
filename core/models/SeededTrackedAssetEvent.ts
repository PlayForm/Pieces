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
import type { ReferencedAsset } from './ReferencedAsset';
import {
    ReferencedAssetFromJSON,
    ReferencedAssetFromJSONTyped,
    ReferencedAssetToJSON,
} from './ReferencedAsset';
import type { TrackedAssetEventIdentifierDescriptionPairs } from './TrackedAssetEventIdentifierDescriptionPairs';
import {
    TrackedAssetEventIdentifierDescriptionPairsFromJSON,
    TrackedAssetEventIdentifierDescriptionPairsFromJSONTyped,
    TrackedAssetEventIdentifierDescriptionPairsToJSON,
} from './TrackedAssetEventIdentifierDescriptionPairs';
import type { TrackedAssetEventMetadata } from './TrackedAssetEventMetadata';
import {
    TrackedAssetEventMetadataFromJSON,
    TrackedAssetEventMetadataFromJSONTyped,
    TrackedAssetEventMetadataToJSON,
} from './TrackedAssetEventMetadata';

/**
 * This seeded tracked asset event will be recieved by a context on the OS Server side, which will then be able to look up the asset id and structure the asset for shipment to Segment aka a fully built TrackedAssetEvent
 * @export
 * @interface SeededTrackedAssetEvent
 */
export interface SeededTrackedAssetEvent {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedAssetEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ReferencedAsset}
     * @memberof SeededTrackedAssetEvent
     */
    asset: ReferencedAsset;
    /**
     * 
     * @type {TrackedAssetEventIdentifierDescriptionPairs}
     * @memberof SeededTrackedAssetEvent
     */
    identifierDescriptionPair: TrackedAssetEventIdentifierDescriptionPairs;
    /**
     * 
     * @type {TrackedAssetEventMetadata}
     * @memberof SeededTrackedAssetEvent
     */
    metadata?: TrackedAssetEventMetadata;
}

/**
 * Check if a given object implements the SeededTrackedAssetEvent interface.
 */
export function instanceOfSeededTrackedAssetEvent(value: object): boolean {
    if (!('asset' in value)) return false;
    if (!('identifierDescriptionPair' in value)) return false;
    return true;
}

export function SeededTrackedAssetEventFromJSON(json: any): SeededTrackedAssetEvent {
    return SeededTrackedAssetEventFromJSONTyped(json, false);
}

export function SeededTrackedAssetEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedAssetEvent {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': ReferencedAssetFromJSON(json['asset']),
        'identifierDescriptionPair': TrackedAssetEventIdentifierDescriptionPairsFromJSON(json['identifier_description_pair']),
        'metadata': json['metadata'] == null ? undefined : TrackedAssetEventMetadataFromJSON(json['metadata']),
    };
}

export function SeededTrackedAssetEventToJSON(value?: SeededTrackedAssetEvent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'asset': ReferencedAssetToJSON(value['asset']),
        'identifier_description_pair': TrackedAssetEventIdentifierDescriptionPairsToJSON(value['identifierDescriptionPair']),
        'metadata': TrackedAssetEventMetadataToJSON(value['metadata']),
    };
}

