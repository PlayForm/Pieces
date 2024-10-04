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

/**
 * This is a model that will hold relavent information in relation to a keyboard(including shortcuts) analytics event (usage).
 * @export
 * @interface TrackedKeyboardEvent
 */
export interface TrackedKeyboardEvent {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof TrackedKeyboardEvent
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * this is a description of the event, optional.
	 * @type {string}
	 * @memberof TrackedKeyboardEvent
	 */
	description: string;
	/**
	 * this is an array of of ascii values that represent numerics on your keyboard.
	 * @type {Array<number>}
	 * @memberof TrackedKeyboardEvent
	 */
	shortcut: number[];
}

/**
 * Check if a given object implements the TrackedKeyboardEvent interface.
 */
export function instanceOfTrackedKeyboardEvent(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "description" in value;
	isInstance = isInstance && "shortcut" in value;

	return isInstance;
}

export function TrackedKeyboardEventFromJSON(json: any): TrackedKeyboardEvent {
	return TrackedKeyboardEventFromJSONTyped(json, false);
}

export function TrackedKeyboardEventFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TrackedKeyboardEvent {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		description: json["description"],
		shortcut: json["shortcut"],
	};
}

export function TrackedKeyboardEventToJSON(
	value?: TrackedKeyboardEvent | null,
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
	};
}
