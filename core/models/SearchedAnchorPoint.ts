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
import type { AnchorPoint } from "./AnchorPoint.tsx";
import { AnchorPointFromJSON, AnchorPointToJSON } from "./AnchorPoint.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";

/**
 * This is used for the AnchorPoints searching endpoint.
 *
 * point here is only provided if transferables are set to true.
 *
 * temporal: if this is provided this means that their material matched the input via a timestamp.
 *
 * TODO will want to consider returning related materials to this material potentially both associated/ and not associated materials
 * ie suggestion: WorkstreamSuggestions
 * @export
 * @interface SearchedAnchorPoint
 */
export interface SearchedAnchorPoint {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SearchedAnchorPoint
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {AnchorPoint}
	 * @memberof SearchedAnchorPoint
	 */
	point?: AnchorPoint;
	/**
	 *
	 * @type {boolean}
	 * @memberof SearchedAnchorPoint
	 */
	exact: boolean;
	/**
	 *
	 * @type {number}
	 * @memberof SearchedAnchorPoint
	 */
	similarity: number;
	/**
	 *
	 * @type {boolean}
	 * @memberof SearchedAnchorPoint
	 */
	temporal?: boolean;
	/**
	 * This is the uuid of the anchorPoint.
	 * @type {string}
	 * @memberof SearchedAnchorPoint
	 */
	identifier: string;
}

/**
 * Check if a given object implements the SearchedAnchorPoint interface.
 */
export function instanceOfSearchedAnchorPoint(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "exact" in value;
	isInstance = isInstance && "similarity" in value;
	isInstance = isInstance && "identifier" in value;

	return isInstance;
}

export function SearchedAnchorPointFromJSON(json: any): SearchedAnchorPoint {
	return SearchedAnchorPointFromJSONTyped(json, false);
}

export function SearchedAnchorPointFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SearchedAnchorPoint {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		point: exists(json, "point")
			? AnchorPointFromJSON(json["point"])
			: undefined,
		exact: json["exact"],
		similarity: json["similarity"],
		temporal: exists(json, "temporal") ? json["temporal"] : undefined,
		identifier: json["identifier"],
	};
}

export function SearchedAnchorPointToJSON(
	value?: SearchedAnchorPoint | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		point: AnchorPointToJSON(value.point),
		exact: value.exact,
		similarity: value.similarity,
		temporal: value.temporal,
		identifier: value.identifier,
	};
}
