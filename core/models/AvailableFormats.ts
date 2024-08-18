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
import type { Classification } from "./Classification.tsx";
import {
	ClassificationFromJSON,
	ClassificationToJSON,
} from "./Classification.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";

/**
 * This is a specific model here used within the SeededAsset that enables us to return all the available formats on a specific seed that was passed as an input within the '/assets/draft' endpoint
 * @export
 * @interface AvailableFormats
 */
export interface AvailableFormats {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof AvailableFormats
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<Classification>}
	 * @memberof AvailableFormats
	 */
	iterable: Classification[];
}

/**
 * Check if a given object implements the AvailableFormats interface.
 */
export function instanceOfAvailableFormats(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function AvailableFormatsFromJSON(json: any): AvailableFormats {
	return AvailableFormatsFromJSONTyped(json, false);
}

export function AvailableFormatsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): AvailableFormats {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(ClassificationFromJSON),
	};
}

export function AvailableFormatsToJSON(value?: AvailableFormats | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(ClassificationToJSON),
	};
}
