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
import type { FlattenedDistribution } from "./FlattenedDistribution.tsx";
import {
	FlattenedDistributionFromJSON,
	FlattenedDistributionToJSON,
} from "./FlattenedDistribution.tsx";

/**
 *
 * @export
 * @interface ReferencedDistribution
 */
export interface ReferencedDistribution {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ReferencedDistribution
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof ReferencedDistribution
	 */
	id: string;
	/**
	 *
	 * @type {FlattenedDistribution}
	 * @memberof ReferencedDistribution
	 */
	reference?: FlattenedDistribution;
}

/**
 * Check if a given object implements the ReferencedDistribution interface.
 */
export function instanceOfReferencedDistribution(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;

	return isInstance;
}

export function ReferencedDistributionFromJSON(
	json: any,
): ReferencedDistribution {
	return ReferencedDistributionFromJSONTyped(json, false);
}

export function ReferencedDistributionFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ReferencedDistribution {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		reference: exists(json, "reference")
			? FlattenedDistributionFromJSON(json["reference"])
			: undefined,
	};
}

export function ReferencedDistributionToJSON(
	value?: ReferencedDistribution | null,
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
		reference: FlattenedDistributionToJSON(value.reference),
	};
}
