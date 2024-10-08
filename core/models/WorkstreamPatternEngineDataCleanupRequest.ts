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
 * NOTE: if we want to remove all the data the from would be unset, the to will be right now.
 *
 * from: is always in the past
 * to: is always at least before from in our time.
 * @export
 * @interface WorkstreamPatternEngineDataCleanupRequest
 */
export interface WorkstreamPatternEngineDataCleanupRequest {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof WorkstreamPatternEngineDataCleanupRequest
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<AnonymousTemporalRange>}
	 * @memberof WorkstreamPatternEngineDataCleanupRequest
	 */
	ranges?: AnonymousTemporalRange[];
}

/**
 * Check if a given object implements the WorkstreamPatternEngineDataCleanupRequest interface.
 */
export function instanceOfWorkstreamPatternEngineDataCleanupRequest(
	_value: object,
): boolean {
	const isInstance = true;

	return isInstance;
}

export function WorkstreamPatternEngineDataCleanupRequestFromJSON(
	json: any,
): WorkstreamPatternEngineDataCleanupRequest {
	return WorkstreamPatternEngineDataCleanupRequestFromJSONTyped(json, false);
}

export function WorkstreamPatternEngineDataCleanupRequestFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): WorkstreamPatternEngineDataCleanupRequest {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		ranges: exists(json, "ranges")
			? (json["ranges"] as any[]).map(AnonymousTemporalRangeFromJSON)
			: undefined,
	};
}

export function WorkstreamPatternEngineDataCleanupRequestToJSON(
	value?: WorkstreamPatternEngineDataCleanupRequest | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		ranges:
			value.ranges === undefined
				? undefined
				: (value.ranges as any[]).map(AnonymousTemporalRangeToJSON),
	};
}
