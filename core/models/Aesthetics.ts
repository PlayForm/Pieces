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
import type { Font } from "./Font.tsx";
import { FontFromJSON, FontToJSON } from "./Font.tsx";
import type { Theme } from "./Theme.tsx";
import { ThemeFromJSON, ThemeToJSON } from "./Theme.tsx";

/**
 * These are aesthetics properties that will ensure the darkmode + font size and other aesthetics properties persist:)
 * @export
 * @interface Aesthetics
 */
export interface Aesthetics {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Aesthetics
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Theme}
	 * @memberof Aesthetics
	 */
	theme: Theme;
	/**
	 *
	 * @type {Font}
	 * @memberof Aesthetics
	 */
	font: Font;
}

/**
 * Check if a given object implements the Aesthetics interface.
 */
export function instanceOfAesthetics(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "theme" in value;
	isInstance = isInstance && "font" in value;

	return isInstance;
}

export function AestheticsFromJSON(json: any): Aesthetics {
	return AestheticsFromJSONTyped(json, false);
}

export function AestheticsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Aesthetics {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		theme: ThemeFromJSON(json["theme"]),
		font: FontFromJSON(json["font"]),
	};
}

export function AestheticsToJSON(value?: Aesthetics | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		theme: ThemeToJSON(value.theme),
		font: FontToJSON(value.font),
	};
}
