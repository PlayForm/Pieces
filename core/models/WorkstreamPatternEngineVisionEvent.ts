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
import type { WorkstreamPatternEngineSource } from "./WorkstreamPatternEngineSource.tsx";
import {
	WorkstreamPatternEngineSourceFromJSON,
	WorkstreamPatternEngineSourceToJSON,
} from "./WorkstreamPatternEngineSource.tsx";
import type { WorkstreamPatternEngineVisionEventTextualValue } from "./WorkstreamPatternEngineVisionEventTextualValue.tsx";
import {
	WorkstreamPatternEngineVisionEventTextualValueFromJSON,
	WorkstreamPatternEngineVisionEventTextualValueToJSON,
} from "./WorkstreamPatternEngineVisionEventTextualValue.tsx";

/**
 * This will return a specific event for the WPE.
 *
 * note: value is nullable here because we may want to pass in transferables:true/false
 * @export
 * @interface WorkstreamPatternEngineVisionEvent
 */
export interface WorkstreamPatternEngineVisionEvent {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof WorkstreamPatternEngineVisionEvent
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof WorkstreamPatternEngineVisionEvent
	 */
	id: string;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof WorkstreamPatternEngineVisionEvent
	 */
	created: GroupedTimestamp;
	/**
	 *
	 * @type {WorkstreamPatternEngineSource}
	 * @memberof WorkstreamPatternEngineVisionEvent
	 */
	source?: WorkstreamPatternEngineSource;
	/**
	 *
	 * @type {WorkstreamPatternEngineVisionEventTextualValue}
	 * @memberof WorkstreamPatternEngineVisionEvent
	 */
	textual?: WorkstreamPatternEngineVisionEventTextualValue;
}

/**
 * Check if a given object implements the WorkstreamPatternEngineVisionEvent interface.
 */
export function instanceOfWorkstreamPatternEngineVisionEvent(
	value: object,
): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "created" in value;

	return isInstance;
}

export function WorkstreamPatternEngineVisionEventFromJSON(
	json: any,
): WorkstreamPatternEngineVisionEvent {
	return WorkstreamPatternEngineVisionEventFromJSONTyped(json, false);
}

export function WorkstreamPatternEngineVisionEventFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): WorkstreamPatternEngineVisionEvent {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		created: GroupedTimestampFromJSON(json["created"]),
		source: exists(json, "source")
			? WorkstreamPatternEngineSourceFromJSON(json["source"])
			: undefined,
		textual: exists(json, "textual")
			? WorkstreamPatternEngineVisionEventTextualValueFromJSON(
					json["textual"],
				)
			: undefined,
	};
}

export function WorkstreamPatternEngineVisionEventToJSON(
	value?: WorkstreamPatternEngineVisionEvent | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		created: GroupedTimestampToJSON(value.created),
		source: WorkstreamPatternEngineSourceToJSON(value.source),
		textual: WorkstreamPatternEngineVisionEventTextualValueToJSON(
			value.textual,
		),
	};
}
