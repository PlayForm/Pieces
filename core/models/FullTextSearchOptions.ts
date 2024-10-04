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

/**
 * similarity: you will want to pass in a value from 0-1. (where 1 is exact and 0 is everything)
 *
 * exact: (optional) this will default to false, which will run a fuzzy search, unless set to true.
 * @export
 * @interface FullTextSearchOptions
 */
export interface FullTextSearchOptions {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FullTextSearchOptions
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {number}
	 * @memberof FullTextSearchOptions
	 */
	similarity?: number | null;
	/**
	 *
	 * @type {boolean}
	 * @memberof FullTextSearchOptions
	 */
	exact?: boolean;
}

/**
 * Check if a given object implements the FullTextSearchOptions interface.
 */
export function instanceOfFullTextSearchOptions(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function FullTextSearchOptionsFromJSON(
	json: any,
): FullTextSearchOptions {
	return FullTextSearchOptionsFromJSONTyped(json, false);
}

export function FullTextSearchOptionsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FullTextSearchOptions {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		similarity: exists(json, "similarity") ? json["similarity"] : undefined,
		exact: exists(json, "exact") ? json["exact"] : undefined,
	};
}

export function FullTextSearchOptionsToJSON(
	value?: FullTextSearchOptions | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		similarity: value.similarity,
		exact: value.exact,
	};
}
