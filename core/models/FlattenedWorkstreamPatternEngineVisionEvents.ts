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
	ReferencedWorkstreamPatternEngineVisionEventFromJSON,
	ReferencedWorkstreamPatternEngineVisionEventToJSON,
	type ReferencedWorkstreamPatternEngineVisionEvent,
} from "./ReferencedWorkstreamPatternEngineVisionEvent.tsx";

/**
 * This is a plural snapshot of all of the events within WPE qdrant(Referenced)
 * @export
 * @interface FlattenedWorkstreamPatternEngineVisionEvents
 */
export interface FlattenedWorkstreamPatternEngineVisionEvents {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FlattenedWorkstreamPatternEngineVisionEvents
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<ReferencedWorkstreamPatternEngineVisionEvent>}
	 * @memberof FlattenedWorkstreamPatternEngineVisionEvents
	 */
	iterable: ReferencedWorkstreamPatternEngineVisionEvent[];
}

/**
 * Check if a given object implements the FlattenedWorkstreamPatternEngineVisionEvents interface.
 */
export function instanceOfFlattenedWorkstreamPatternEngineVisionEvents(
	value: object,
): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function FlattenedWorkstreamPatternEngineVisionEventsFromJSON(
	json: any,
): FlattenedWorkstreamPatternEngineVisionEvents {
	return FlattenedWorkstreamPatternEngineVisionEventsFromJSONTyped(
		json,
		false,
	);
}

export function FlattenedWorkstreamPatternEngineVisionEventsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FlattenedWorkstreamPatternEngineVisionEvents {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(
			ReferencedWorkstreamPatternEngineVisionEventFromJSON,
		),
	};
}

export function FlattenedWorkstreamPatternEngineVisionEventsToJSON(
	value?: FlattenedWorkstreamPatternEngineVisionEvents | null,
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
			ReferencedWorkstreamPatternEngineVisionEventToJSON,
		),
	};
}
