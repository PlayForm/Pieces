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
import {
	WorkstreamPatternEngineVisionEventFromJSON,
	WorkstreamPatternEngineVisionEventToJSON,
	type WorkstreamPatternEngineVisionEvent,
} from "./WorkstreamPatternEngineVisionEvent.tsx";

/**
 * This is a plural snapshot of all of the events within WPE qdrant
 * @export
 * @interface WorkstreamPatternEngineVisionEvents
 */
export interface WorkstreamPatternEngineVisionEvents {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof WorkstreamPatternEngineVisionEvents
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<WorkstreamPatternEngineVisionEvent>}
	 * @memberof WorkstreamPatternEngineVisionEvents
	 */
	iterable: WorkstreamPatternEngineVisionEvent[];
}

/**
 * Check if a given object implements the WorkstreamPatternEngineVisionEvents interface.
 */
export function instanceOfWorkstreamPatternEngineVisionEvents(
	value: object,
): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function WorkstreamPatternEngineVisionEventsFromJSON(
	json: any,
): WorkstreamPatternEngineVisionEvents {
	return WorkstreamPatternEngineVisionEventsFromJSONTyped(json, false);
}

export function WorkstreamPatternEngineVisionEventsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): WorkstreamPatternEngineVisionEvents {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(
			WorkstreamPatternEngineVisionEventFromJSON,
		),
	};
}

export function WorkstreamPatternEngineVisionEventsToJSON(
	value?: WorkstreamPatternEngineVisionEvents | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(
			WorkstreamPatternEngineVisionEventToJSON,
		),
	};
}
