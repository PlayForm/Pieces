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
import type { SearchedWebsite } from "./SearchedWebsite.tsx";
import {
	SearchedWebsiteFromJSON,
	SearchedWebsiteToJSON,
} from "./SearchedWebsite.tsx";

/**
 * This is the plural Model used to return many SearchedWebsite.
 * @export
 * @interface SearchedWebsites
 */
export interface SearchedWebsites {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SearchedWebsites
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<SearchedWebsite>}
	 * @memberof SearchedWebsites
	 */
	iterable: SearchedWebsite[];
}

/**
 * Check if a given object implements the SearchedWebsites interface.
 */
export function instanceOfSearchedWebsites(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function SearchedWebsitesFromJSON(json: any): SearchedWebsites {
	return SearchedWebsitesFromJSONTyped(json, false);
}

export function SearchedWebsitesFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SearchedWebsites {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(SearchedWebsiteFromJSON),
	};
}

export function SearchedWebsitesToJSON(value?: SearchedWebsites | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(SearchedWebsiteToJSON),
	};
}
