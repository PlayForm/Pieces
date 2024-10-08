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
import type { AnonymousTemporalRange } from "./AnonymousTemporalRange.tsx";
import {
	AnonymousTemporalRangeFromJSON,
	AnonymousTemporalRangeToJSON,
} from "./AnonymousTemporalRange.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";

/**
 * created: will return the materials based on if the range is satisfied w/ this created timestamp
 * ** same goes for updated
 * @export
 * @interface TemporalSearchOptions
 */
export interface TemporalSearchOptions {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof TemporalSearchOptions
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {AnonymousTemporalRange}
	 * @memberof TemporalSearchOptions
	 */
	created?: AnonymousTemporalRange;
	/**
	 *
	 * @type {AnonymousTemporalRange}
	 * @memberof TemporalSearchOptions
	 */
	updated?: AnonymousTemporalRange;
}

/**
 * Check if a given object implements the TemporalSearchOptions interface.
 */
export function instanceOfTemporalSearchOptions(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function TemporalSearchOptionsFromJSON(
	json: any,
): TemporalSearchOptions {
	return TemporalSearchOptionsFromJSONTyped(json, false);
}

export function TemporalSearchOptionsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TemporalSearchOptions {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		created: exists(json, "created")
			? AnonymousTemporalRangeFromJSON(json["created"])
			: undefined,
		updated: exists(json, "updated")
			? AnonymousTemporalRangeFromJSON(json["updated"])
			: undefined,
	};
}

export function TemporalSearchOptionsToJSON(
	value?: TemporalSearchOptions | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		created: AnonymousTemporalRangeToJSON(value.created),
		updated: AnonymousTemporalRangeToJSON(value.updated),
	};
}
