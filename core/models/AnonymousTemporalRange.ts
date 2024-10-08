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
import type { GroupedTimestamp } from "./GroupedTimestamp.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
} from "./GroupedTimestamp.tsx";

/**
 * if you want a range between you can use from && to.
 *
 * if you want anything before, use to and NO from.
 *
 * if you want anything after, use from and NO to.
 * @export
 * @interface AnonymousTemporalRange
 */
export interface AnonymousTemporalRange {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof AnonymousTemporalRange
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof AnonymousTemporalRange
	 */
	from?: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof AnonymousTemporalRange
	 */
	to?: GroupedTimestamp;
	/**
	 *
	 * @type {boolean}
	 * @memberof AnonymousTemporalRange
	 */
	between?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof AnonymousTemporalRange
	 */
	continuous?: boolean;
}

/**
 * Check if a given object implements the AnonymousTemporalRange interface.
 */
export function instanceOfAnonymousTemporalRange(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function AnonymousTemporalRangeFromJSON(
	json: any,
): AnonymousTemporalRange {
	return AnonymousTemporalRangeFromJSONTyped(json, false);
}

export function AnonymousTemporalRangeFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): AnonymousTemporalRange {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		from: exists(json, "from")
			? GroupedTimestampFromJSON(json["from"])
			: undefined,
		to: exists(json, "to")
			? GroupedTimestampFromJSON(json["to"])
			: undefined,
		between: exists(json, "between") ? json["between"] : undefined,
		continuous: exists(json, "continuous") ? json["continuous"] : undefined,
	};
}

export function AnonymousTemporalRangeToJSON(
	value?: AnonymousTemporalRange | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		from: GroupedTimestampToJSON(value.from),
		to: GroupedTimestampToJSON(value.to),
		between: value.between,
		continuous: value.continuous,
	};
}
