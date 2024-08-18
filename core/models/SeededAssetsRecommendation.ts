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
import type { Assets } from "./Assets.tsx";
import { AssetsFromJSON, AssetsToJSON } from "./Assets.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { InteractedAssets } from "./InteractedAssets.tsx";
import {
	InteractedAssetsFromJSON,
	InteractedAssetsToJSON,
} from "./InteractedAssets.tsx";

/**
 * This is the input data model for the /assets/recommend [GET] endpoint. It includes both a list of assets but also
 * @export
 * @interface SeededAssetsRecommendation
 */
export interface SeededAssetsRecommendation {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededAssetsRecommendation
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Assets}
	 * @memberof SeededAssetsRecommendation
	 */
	assets: Assets;
	/**
	 *
	 * @type {InteractedAssets}
	 * @memberof SeededAssetsRecommendation
	 */
	interactions: InteractedAssets;
}

/**
 * Check if a given object implements the SeededAssetsRecommendation interface.
 */
export function instanceOfSeededAssetsRecommendation(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "assets" in value;
	isInstance = isInstance && "interactions" in value;

	return isInstance;
}

export function SeededAssetsRecommendationFromJSON(
	json: any,
): SeededAssetsRecommendation {
	return SeededAssetsRecommendationFromJSONTyped(json, false);
}

export function SeededAssetsRecommendationFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededAssetsRecommendation {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		assets: AssetsFromJSON(json["assets"]),
		interactions: InteractedAssetsFromJSON(json["interactions"]),
	};
}

export function SeededAssetsRecommendationToJSON(
	value?: SeededAssetsRecommendation | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		assets: AssetsToJSON(value.assets),
		interactions: InteractedAssetsToJSON(value.interactions),
	};
}
