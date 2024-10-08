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
import type { FlattenedActivity } from "./FlattenedActivity.tsx";
import {
	FlattenedActivityFromJSON,
	FlattenedActivityToJSON,
} from "./FlattenedActivity.tsx";

/**
 *
 * @export
 * @interface ReferencedActivity
 */
export interface ReferencedActivity {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ReferencedActivity
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof ReferencedActivity
	 */
	id: string;
	/**
	 *
	 * @type {FlattenedActivity}
	 * @memberof ReferencedActivity
	 */
	reference?: FlattenedActivity;
}

/**
 * Check if a given object implements the ReferencedActivity interface.
 */
export function instanceOfReferencedActivity(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;

	return isInstance;
}

export function ReferencedActivityFromJSON(json: any): ReferencedActivity {
	return ReferencedActivityFromJSONTyped(json, false);
}

export function ReferencedActivityFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ReferencedActivity {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		reference: exists(json, "reference")
			? FlattenedActivityFromJSON(json["reference"])
			: undefined,
	};
}

export function ReferencedActivityToJSON(
	value?: ReferencedActivity | null,
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
		reference: FlattenedActivityToJSON(value.reference),
	};
}
