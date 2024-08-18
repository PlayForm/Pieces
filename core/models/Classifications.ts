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
 * This is a plural representation of a Classification
 * @export
 * @interface Classifications
 */
export interface Classifications {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Classifications
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<Classification>}
	 * @memberof Classifications
	 */
	iterable: Classification[];
}

/**
 * Check if a given object implements the Classifications interface.
 */
export function instanceOfClassifications(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function ClassificationsFromJSON(json: any): Classifications {
	return ClassificationsFromJSONTyped(json, false);
}

export function ClassificationsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Classifications {
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

export function ClassificationsToJSON(value?: Classifications | null): any {
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
