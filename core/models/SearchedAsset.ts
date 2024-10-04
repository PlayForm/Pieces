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
import { AssetFromJSON, AssetToJSON, type Asset } from "./Asset.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
	type EmbeddedModelSchema,
} from "./EmbeddedModelSchema.tsx";
import {
	SearchedMatchEnumFromJSON,
	SearchedMatchEnumToJSON,
	type SearchedMatchEnum,
} from "./SearchedMatchEnum.tsx";

/**
 * This is a modle that will represent a searched asset!
 * @export
 * @interface SearchedAsset
 */
export interface SearchedAsset {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SearchedAsset
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Asset}
	 * @memberof SearchedAsset
	 */
	asset?: Asset;
	/**
	 *
	 * @type {boolean}
	 * @memberof SearchedAsset
	 */
	exact: boolean;
	/**
	 *
	 * @type {number}
	 * @memberof SearchedAsset
	 */
	score: number;
	/**
	 *
	 * @type {SearchedMatchEnum}
	 * @memberof SearchedAsset
	 */
	match: SearchedMatchEnum;
	/**
	 * This is the uuid of the asset.
	 * @type {string}
	 * @memberof SearchedAsset
	 */
	identifier: string;
	/**
	 * If this is a pseudo asset that was also returned.
	 * @type {boolean}
	 * @memberof SearchedAsset
	 */
	pseudo?: boolean;
}

/**
 * Check if a given object implements the SearchedAsset interface.
 */
export function instanceOfSearchedAsset(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "exact" in value;
	isInstance = isInstance && "score" in value;
	isInstance = isInstance && "match" in value;
	isInstance = isInstance && "identifier" in value;

	return isInstance;
}

export function SearchedAssetFromJSON(json: any): SearchedAsset {
	return SearchedAssetFromJSONTyped(json, false);
}

export function SearchedAssetFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SearchedAsset {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		asset: exists(json, "asset") ? AssetFromJSON(json["asset"]) : undefined,
		exact: json["exact"],
		score: json["score"],
		match: SearchedMatchEnumFromJSON(json["match"]),
		identifier: json["identifier"],
		pseudo: exists(json, "pseudo") ? json["pseudo"] : undefined,
	};
}

export function SearchedAssetToJSON(value?: SearchedAsset | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		asset: AssetToJSON(value.asset),
		exact: value.exact,
		score: value.score,
		match: SearchedMatchEnumToJSON(value.match),
		identifier: value.identifier,
		pseudo: value.pseudo,
	};
}
