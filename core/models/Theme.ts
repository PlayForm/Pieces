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
 * This will describe the theme that belongs to a user.
 * @export
 * @interface Theme
 */
export interface Theme {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Theme
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {boolean}
	 * @memberof Theme
	 */
	dark: boolean;
}

/**
 * Check if a given object implements the Theme interface.
 */
export function instanceOfTheme(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "dark" in value;

	return isInstance;
}

export function ThemeFromJSON(json: any): Theme {
	return ThemeFromJSONTyped(json, false);
}

export function ThemeFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Theme {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		dark: json["dark"],
	};
}

export function ThemeToJSON(value?: Theme | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		dark: value.dark,
	};
}
