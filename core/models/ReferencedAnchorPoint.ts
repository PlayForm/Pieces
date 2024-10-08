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
import type { FlattenedAnchorPoint } from "./FlattenedAnchorPoint.tsx";
import {
	FlattenedAnchorPointFromJSON,
	FlattenedAnchorPointToJSON,
} from "./FlattenedAnchorPoint.tsx";

/**
 *
 * @export
 * @interface ReferencedAnchorPoint
 */
export interface ReferencedAnchorPoint {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ReferencedAnchorPoint
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof ReferencedAnchorPoint
	 */
	id: string;
	/**
	 *
	 * @type {FlattenedAnchorPoint}
	 * @memberof ReferencedAnchorPoint
	 */
	reference?: FlattenedAnchorPoint;
}

/**
 * Check if a given object implements the ReferencedAnchorPoint interface.
 */
export function instanceOfReferencedAnchorPoint(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;

	return isInstance;
}

export function ReferencedAnchorPointFromJSON(
	json: any,
): ReferencedAnchorPoint {
	return ReferencedAnchorPointFromJSONTyped(json, false);
}

export function ReferencedAnchorPointFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ReferencedAnchorPoint {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		reference: exists(json, "reference")
			? FlattenedAnchorPointFromJSON(json["reference"])
			: undefined,
	};
}

export function ReferencedAnchorPointToJSON(
	value?: ReferencedAnchorPoint | null,
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
		reference: FlattenedAnchorPointToJSON(value.reference),
	};
}
