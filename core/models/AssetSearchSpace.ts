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
	FlattenedAssetsFromJSON,
	FlattenedAssetsToJSON,
	type FlattenedAssets,
} from "./FlattenedAssets.tsx";

/**
 * This is provided search spaces, This is a provided assets, TODO in the future we might want to add seeds.
 * @export
 * @interface AssetSearchSpace
 */
export interface AssetSearchSpace {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof AssetSearchSpace
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {FlattenedAssets}
	 * @memberof AssetSearchSpace
	 */
	identifers: FlattenedAssets;
}

/**
 * Check if a given object implements the AssetSearchSpace interface.
 */
export function instanceOfAssetSearchSpace(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "identifers" in value;

	return isInstance;
}

export function AssetSearchSpaceFromJSON(json: any): AssetSearchSpace {
	return AssetSearchSpaceFromJSONTyped(json, false);
}

export function AssetSearchSpaceFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): AssetSearchSpace {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		identifers: FlattenedAssetsFromJSON(json["identifers"]),
	};
}

export function AssetSearchSpaceToJSON(value?: AssetSearchSpace | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		identifers: FlattenedAssetsToJSON(value.identifers),
	};
}
