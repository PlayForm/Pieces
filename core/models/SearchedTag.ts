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
import type { Tag } from "./Tag.tsx";
import { TagFromJSON, TagToJSON } from "./Tag.tsx";

/**
 * This is used for the Tags searching endpoint.
 *
 * tag here is only provided if transferables are set to true.
 *
 * temporal: if this is provided this means that their material matched the input via a timestamp.
 *
 * TODO will want to consider returning related materials to this material potentially both associated/ and not associated materials
 * ie suggestion: WorkstreamSuggestions
 * @export
 * @interface SearchedTag
 */
export interface SearchedTag {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SearchedTag
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Tag}
	 * @memberof SearchedTag
	 */
	tag?: Tag;
	/**
	 *
	 * @type {boolean}
	 * @memberof SearchedTag
	 */
	exact: boolean;
	/**
	 *
	 * @type {number}
	 * @memberof SearchedTag
	 */
	similarity: number;
	/**
	 *
	 * @type {boolean}
	 * @memberof SearchedTag
	 */
	temporal?: boolean;
	/**
	 * This is the uuid of the tag.
	 * @type {string}
	 * @memberof SearchedTag
	 */
	identifier: string;
}

/**
 * Check if a given object implements the SearchedTag interface.
 */
export function instanceOfSearchedTag(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "exact" in value;
	isInstance = isInstance && "similarity" in value;
	isInstance = isInstance && "identifier" in value;

	return isInstance;
}

export function SearchedTagFromJSON(json: any): SearchedTag {
	return SearchedTagFromJSONTyped(json, false);
}

export function SearchedTagFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SearchedTag {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		tag: exists(json, "tag") ? TagFromJSON(json["tag"]) : undefined,
		exact: json["exact"],
		similarity: json["similarity"],
		temporal: exists(json, "temporal") ? json["temporal"] : undefined,
		identifier: json["identifier"],
	};
}

export function SearchedTagToJSON(value?: SearchedTag | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		tag: TagToJSON(value.tag),
		exact: value.exact,
		similarity: value.similarity,
		temporal: value.temporal,
		identifier: value.identifier,
	};
}
