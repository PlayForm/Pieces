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
import type { ReferencedRange } from "./ReferencedRange.tsx";
import {
	ReferencedRangeFromJSON,
	ReferencedRangeToJSON,
} from "./ReferencedRange.tsx";
import type { Score } from "./Score.tsx";
import { ScoreFromJSON, ScoreToJSON } from "./Score.tsx";

/**
 * This is a DAG-Safe minimal representation of many Ranges.
 * @export
 * @interface FlattenedRanges
 */
export interface FlattenedRanges {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FlattenedRanges
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<ReferencedRange>}
	 * @memberof FlattenedRanges
	 */
	iterable: ReferencedRange[];
	/**
	 * This is a Map<String, int> where the the key is an range id.
	 * @type {{ [key: string]: number; }}
	 * @memberof FlattenedRanges
	 */
	indices?: { [key: string]: number };
	/**
	 *
	 * @type {Score}
	 * @memberof FlattenedRanges
	 */
	score?: Score;
	/**
	 *
	 * @type {boolean}
	 * @memberof FlattenedRanges
	 */
	continuous?: boolean;
}

/**
 * Check if a given object implements the FlattenedRanges interface.
 */
export function instanceOfFlattenedRanges(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function FlattenedRangesFromJSON(json: any): FlattenedRanges {
	return FlattenedRangesFromJSONTyped(json, false);
}

export function FlattenedRangesFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FlattenedRanges {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(ReferencedRangeFromJSON),
		indices: exists(json, "indices") ? json["indices"] : undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
		continuous: exists(json, "continuous") ? json["continuous"] : undefined,
	};
}

export function FlattenedRangesToJSON(value?: FlattenedRanges | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(ReferencedRangeToJSON),
		indices: value.indices,
		score: ScoreToJSON(value.score),
		continuous: value.continuous,
	};
}
