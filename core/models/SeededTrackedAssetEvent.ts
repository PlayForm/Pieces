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

import { exists } from "../runtime.ts";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { ReferencedAsset } from "./ReferencedAsset.tsx";
import {
	ReferencedAssetFromJSON,
	ReferencedAssetToJSON,
} from "./ReferencedAsset.tsx";
import type { TrackedAssetEventIdentifierDescriptionPairs } from "./TrackedAssetEventIdentifierDescriptionPairs.tsx";
import {
	TrackedAssetEventIdentifierDescriptionPairsFromJSON,
	TrackedAssetEventIdentifierDescriptionPairsToJSON,
} from "./TrackedAssetEventIdentifierDescriptionPairs.tsx";
import type { TrackedAssetEventMetadata } from "./TrackedAssetEventMetadata.tsx";
import {
	TrackedAssetEventMetadataFromJSON,
	TrackedAssetEventMetadataToJSON,
} from "./TrackedAssetEventMetadata.tsx";

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
	let isInstance = true;
	isInstance = isInstance && "asset" in value;
	isInstance = isInstance && "identifierDescriptionPair" in value;

	return isInstance;
}

export function SeededTrackedAssetEventFromJSON(
	json: any,
): SeededTrackedAssetEvent {
	return SeededTrackedAssetEventFromJSONTyped(json, false);
}

export function SeededTrackedAssetEventFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededTrackedAssetEvent {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		asset: ReferencedAssetFromJSON(json["asset"]),
		identifierDescriptionPair:
			TrackedAssetEventIdentifierDescriptionPairsFromJSON(
				json["identifier_description_pair"],
			),
		metadata: exists(json, "metadata")
			? TrackedAssetEventMetadataFromJSON(json["metadata"])
			: undefined,
	};
}

export function SeededTrackedAssetEventToJSON(
	value?: SeededTrackedAssetEvent | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		asset: ReferencedAssetToJSON(value.asset),
		identifier_description_pair:
			TrackedAssetEventIdentifierDescriptionPairsToJSON(
				value.identifierDescriptionPair,
			),
		metadata: TrackedAssetEventMetadataToJSON(value.metadata),
	};
}
