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

/**
 * These are the references of the formats **Only UUIDS**
 * @export
 * @interface FlattenedPreview
 */
export interface FlattenedPreview {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FlattenedPreview
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * this is a reference(uuid) to the base format
	 * @type {string}
	 * @memberof FlattenedPreview
	 */
	base: string;
	/**
	 * this is a reference(uuid) to the overlay format
	 * @type {string}
	 * @memberof FlattenedPreview
	 */
	overlay?: string;
}

/**
 * Check if a given object implements the FlattenedPreview interface.
 */
export function instanceOfFlattenedPreview(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "base" in value;

	return isInstance;
}

export function FlattenedPreviewFromJSON(json: any): FlattenedPreview {
	return FlattenedPreviewFromJSONTyped(json, false);
}

export function FlattenedPreviewFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FlattenedPreview {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		base: json["base"],
		overlay: exists(json, "overlay") ? json["overlay"] : undefined,
	};
}

export function FlattenedPreviewToJSON(value?: FlattenedPreview | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		base: value.base,
		overlay: value.overlay,
	};
}
