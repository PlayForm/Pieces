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
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
	type EmbeddedModelSchema,
} from "./EmbeddedModelSchema.tsx";
import {
	SeededDiscoverableAssetFromJSON,
	SeededDiscoverableAssetToJSON,
	type SeededDiscoverableAsset,
} from "./SeededDiscoverableAsset.tsx";
import {
	TLPDirectedDiscoveryFiltersFromJSON,
	TLPDirectedDiscoveryFiltersToJSON,
	type TLPDirectedDiscoveryFilters,
} from "./TLPDirectedDiscoveryFilters.tsx";

/**
 * Assumption: filters imposed in this model can be overwritten by passing them in SeededDiscoverableAsset
 * @export
 * @interface SeededDiscoverableAssets
 */
export interface SeededDiscoverableAssets {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededDiscoverableAssets
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * application id.
	 * @type {string}
	 * @memberof SeededDiscoverableAssets
	 */
	application: string;
	/**
	 * This is an iterable of already snippitized snippets that we will compare && cluster.
	 * @type {Array<SeededDiscoverableAsset>}
	 * @memberof SeededDiscoverableAssets
	 */
	iterable: SeededDiscoverableAsset[];
	/**
	 *
	 * @type {TLPDirectedDiscoveryFilters}
	 * @memberof SeededDiscoverableAssets
	 */
	filters?: TLPDirectedDiscoveryFilters;
}

/**
 * Check if a given object implements the SeededDiscoverableAssets interface.
 */
export function instanceOfSeededDiscoverableAssets(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "application" in value;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function SeededDiscoverableAssetsFromJSON(
	json: any,
): SeededDiscoverableAssets {
	return SeededDiscoverableAssetsFromJSONTyped(json, false);
}

export function SeededDiscoverableAssetsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededDiscoverableAssets {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		application: json["application"],
		iterable: (json["iterable"] as any[]).map(
			SeededDiscoverableAssetFromJSON,
		),
		filters: exists(json, "filters")
			? TLPDirectedDiscoveryFiltersFromJSON(json["filters"])
			: undefined,
	};
}

export function SeededDiscoverableAssetsToJSON(
	value?: SeededDiscoverableAssets | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		application: value.application,
		iterable: (value.iterable as any[]).map(SeededDiscoverableAssetToJSON),
		filters: TLPDirectedDiscoveryFiltersToJSON(value.filters),
	};
}
