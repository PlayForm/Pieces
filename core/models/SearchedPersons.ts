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
import type { SearchedPerson } from "./SearchedPerson.tsx";
import {
	SearchedPersonFromJSON,
	SearchedPersonToJSON,
} from "./SearchedPerson.tsx";

/**
 * This is the plural Model used to return many SearchedPerson.
 * @export
 * @interface SearchedPersons
 */
export interface SearchedPersons {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SearchedPersons
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<SearchedPerson>}
	 * @memberof SearchedPersons
	 */
	iterable: SearchedPerson[];
}

/**
 * Check if a given object implements the SearchedPersons interface.
 */
export function instanceOfSearchedPersons(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function SearchedPersonsFromJSON(json: any): SearchedPersons {
	return SearchedPersonsFromJSONTyped(json, false);
}

export function SearchedPersonsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SearchedPersons {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(SearchedPersonFromJSON),
	};
}

export function SearchedPersonsToJSON(value?: SearchedPersons | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(SearchedPersonToJSON),
	};
}
