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
 * This is the input model for '/machine_learning/text/technical_language/parsers/segmentation'
 *
 * This will take the unsegmentedText here!
 * @export
 * @interface UnsegmentedTechnicalLanguage
 */
export interface UnsegmentedTechnicalLanguage {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof UnsegmentedTechnicalLanguage
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof UnsegmentedTechnicalLanguage
	 */
	value: string;
}

/**
 * Check if a given object implements the UnsegmentedTechnicalLanguage interface.
 */
export function instanceOfUnsegmentedTechnicalLanguage(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "value" in value;

	return isInstance;
}

export function UnsegmentedTechnicalLanguageFromJSON(
	json: any,
): UnsegmentedTechnicalLanguage {
	return UnsegmentedTechnicalLanguageFromJSONTyped(json, false);
}

export function UnsegmentedTechnicalLanguageFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): UnsegmentedTechnicalLanguage {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		value: json["value"],
	};
}

export function UnsegmentedTechnicalLanguageToJSON(
	value?: UnsegmentedTechnicalLanguage | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		value: value.value,
	};
}
