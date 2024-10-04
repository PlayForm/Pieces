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
	ReferencedAssetFromJSON,
	ReferencedAssetToJSON,
	type ReferencedAsset,
} from "./ReferencedAsset.tsx";
import { ScoreFromJSON, ScoreToJSON, type Score } from "./Score.tsx";

/**
 * A collection of Assets specific to the authenticated user. [DAG Compatible - Directed Acyclic Graph Data Structure]
 *
 * FlattenedAssets prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.
 *
 * i.e. Asset asset = FlattenedAssets.iterable[0] => Format format = asset.preview => String id = format.asset => String id
 * @export
 * @interface FlattenedAssets
 */
export interface FlattenedAssets {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FlattenedAssets
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<ReferencedAsset>}
	 * @memberof FlattenedAssets
	 */
	iterable?: ReferencedAsset[];
	/**
	 * This is a Map<String, int> where the the key is an asset id.
	 * @type {{ [key: string]: number; }}
	 * @memberof FlattenedAssets
	 */
	indices?: { [key: string]: number };
	/**
	 *
	 * @type {Score}
	 * @memberof FlattenedAssets
	 */
	score?: Score;
}

/**
 * Check if a given object implements the FlattenedAssets interface.
 */
export function instanceOfFlattenedAssets(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function FlattenedAssetsFromJSON(json: any): FlattenedAssets {
	return FlattenedAssetsFromJSONTyped(json, false);
}

export function FlattenedAssetsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FlattenedAssets {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: exists(json, "iterable")
			? (json["iterable"] as any[]).map(ReferencedAssetFromJSON)
			: undefined,
		indices: exists(json, "indices") ? json["indices"] : undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
	};
}

export function FlattenedAssetsToJSON(value?: FlattenedAssets | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable:
			value.iterable === undefined
				? undefined
				: (value.iterable as any[]).map(ReferencedAssetToJSON),
		indices: value.indices,
		score: ScoreToJSON(value.score),
	};
}
