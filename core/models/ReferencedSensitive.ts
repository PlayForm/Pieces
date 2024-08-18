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
import type { FlattenedSensitive } from "./FlattenedSensitive.tsx";
import {
	FlattenedSensitiveFromJSON,
	FlattenedSensitiveToJSON,
} from "./FlattenedSensitive.tsx";

/**
 * A reference to a sensitive which at minimum must have the Sensitive id. But in the case of a hydrated client API it may have a populated reference of type Sensitive.
 * @export
 * @interface ReferencedSensitive
 */
export interface ReferencedSensitive {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ReferencedSensitive
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof ReferencedSensitive
	 */
	id: string;
	/**
	 *
	 * @type {FlattenedSensitive}
	 * @memberof ReferencedSensitive
	 */
	reference?: FlattenedSensitive;
}

/**
 * Check if a given object implements the ReferencedSensitive interface.
 */
export function instanceOfReferencedSensitive(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;

	return isInstance;
}

export function ReferencedSensitiveFromJSON(json: any): ReferencedSensitive {
	return ReferencedSensitiveFromJSONTyped(json, false);
}

export function ReferencedSensitiveFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ReferencedSensitive {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		reference: exists(json, "reference")
			? FlattenedSensitiveFromJSON(json["reference"])
			: undefined,
	};
}

export function ReferencedSensitiveToJSON(
	value?: ReferencedSensitive | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		reference: FlattenedSensitiveToJSON(value.reference),
	};
}
