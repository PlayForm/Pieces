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
import type { SeededTrackedInteractionEventIdentifierDescriptionPairs } from "./SeededTrackedInteractionEventIdentifierDescriptionPairs.tsx";
import {
	SeededTrackedInteractionEventIdentifierDescriptionPairsFromJSON,
	SeededTrackedInteractionEventIdentifierDescriptionPairsToJSON,
} from "./SeededTrackedInteractionEventIdentifierDescriptionPairs.tsx";

/**
 * This is a model that will hold relavent information in relation to an interaction(ONLY CLICK/TAP) analytics event(usage). If you want to register an event that relates to an interaction with the key then register a Keyboard Event.
 *
 * @export
 * @interface SeededTrackedInteractionEvent
 */
export interface SeededTrackedInteractionEvent {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededTrackedInteractionEvent
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * These need structure
	 * @type {string}
	 * @memberof SeededTrackedInteractionEvent
	 */
	description: string;
	/**
	 *
	 * @type {string}
	 * @memberof SeededTrackedInteractionEvent
	 */
	element?: string;
	/**
	 *
	 * @type {SeededTrackedInteractionEventIdentifierDescriptionPairs}
	 * @memberof SeededTrackedInteractionEvent
	 */
	identifierDescriptionPair?: SeededTrackedInteractionEventIdentifierDescriptionPairs;
}

/**
 * Check if a given object implements the SeededTrackedInteractionEvent interface.
 */
export function instanceOfSeededTrackedInteractionEvent(
	value: object,
): boolean {
	let isInstance = true;
	isInstance = isInstance && "description" in value;

	return isInstance;
}

export function SeededTrackedInteractionEventFromJSON(
	json: any,
): SeededTrackedInteractionEvent {
	return SeededTrackedInteractionEventFromJSONTyped(json, false);
}

export function SeededTrackedInteractionEventFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededTrackedInteractionEvent {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		description: json["description"],
		element: exists(json, "element") ? json["element"] : undefined,
		identifierDescriptionPair: exists(json, "identifier_description_pair")
			? SeededTrackedInteractionEventIdentifierDescriptionPairsFromJSON(
					json["identifier_description_pair"],
				)
			: undefined,
	};
}

export function SeededTrackedInteractionEventToJSON(
	value?: SeededTrackedInteractionEvent | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		description: value.description,
		element: value.element,
		identifier_description_pair:
			SeededTrackedInteractionEventIdentifierDescriptionPairsToJSON(
				value.identifierDescriptionPair,
			),
	};
}
