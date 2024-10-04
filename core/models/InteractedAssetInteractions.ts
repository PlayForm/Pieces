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

/**
 *
 * @export
 * @interface InteractedAssetInteractions
 */
export interface InteractedAssetInteractions {
	/**
	 * https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
	 * @type {string}
	 * @memberof InteractedAssetInteractions
	 */
	viewed: string;
	/**
	 * If the user touched or panned over the asset.
	 * @type {boolean}
	 * @memberof InteractedAssetInteractions
	 */
	touched?: boolean;
	/**
	 * If the user scrolled over the asset.
	 * @type {boolean}
	 * @memberof InteractedAssetInteractions
	 */
	scrolled?: boolean;
}

/**
 * Check if a given object implements the InteractedAssetInteractions interface.
 */
export function instanceOfInteractedAssetInteractions(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "viewed" in value;

	return isInstance;
}

export function InteractedAssetInteractionsFromJSON(
	json: any,
): InteractedAssetInteractions {
	return InteractedAssetInteractionsFromJSONTyped(json, false);
}

export function InteractedAssetInteractionsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): InteractedAssetInteractions {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		viewed: json["viewed"],
		touched: exists(json, "touched") ? json["touched"] : undefined,
		scrolled: exists(json, "scrolled") ? json["scrolled"] : undefined,
	};
}

export function InteractedAssetInteractionsToJSON(
	value?: InteractedAssetInteractions | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		viewed: value.viewed,
		touched: value.touched,
		scrolled: value.scrolled,
	};
}
