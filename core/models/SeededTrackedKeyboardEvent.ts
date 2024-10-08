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
import type { SeededTrackedKeyboardEventIdentifierDescriptionPairs } from "./SeededTrackedKeyboardEventIdentifierDescriptionPairs.tsx";
import {
	SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSON,
	SeededTrackedKeyboardEventIdentifierDescriptionPairsToJSON,
} from "./SeededTrackedKeyboardEventIdentifierDescriptionPairs.tsx";

/**
 * This is a model that will hold relavent information in relation to a keyboard(including shortcuts) analytics event (usage).
 * @export
 * @interface SeededTrackedKeyboardEvent
 */
export interface SeededTrackedKeyboardEvent {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededTrackedKeyboardEvent
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * This also needs structure such as key vals or enums
	 * @type {string}
	 * @memberof SeededTrackedKeyboardEvent
	 */
	description: string;
	/**
	 *
	 * @type {Array<number>}
	 * @memberof SeededTrackedKeyboardEvent
	 */
	shortcut: number[];
	/**
	 *
	 * @type {SeededTrackedKeyboardEventIdentifierDescriptionPairs}
	 * @memberof SeededTrackedKeyboardEvent
	 */
	identifierDescriptionPair?: SeededTrackedKeyboardEventIdentifierDescriptionPairs;
}

/**
 * Check if a given object implements the SeededTrackedKeyboardEvent interface.
 */
export function instanceOfSeededTrackedKeyboardEvent(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "description" in value;
	isInstance = isInstance && "shortcut" in value;

	return isInstance;
}

export function SeededTrackedKeyboardEventFromJSON(
	json: any,
): SeededTrackedKeyboardEvent {
	return SeededTrackedKeyboardEventFromJSONTyped(json, false);
}

export function SeededTrackedKeyboardEventFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededTrackedKeyboardEvent {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		description: json["description"],
		shortcut: json["shortcut"],
		identifierDescriptionPair: exists(json, "identifier_description_pair")
			? SeededTrackedKeyboardEventIdentifierDescriptionPairsFromJSON(
					json["identifier_description_pair"],
				)
			: undefined,
	};
}

export function SeededTrackedKeyboardEventToJSON(
	value?: SeededTrackedKeyboardEvent | null,
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
		shortcut: value.shortcut,
		identifier_description_pair:
			SeededTrackedKeyboardEventIdentifierDescriptionPairsToJSON(
				value.identifierDescriptionPair,
			),
	};
}
