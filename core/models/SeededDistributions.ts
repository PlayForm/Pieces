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
import type { SeededDistribution } from "./SeededDistribution.tsx";
import {
	SeededDistributionFromJSON,
	SeededDistributionToJSON,
} from "./SeededDistribution.tsx";

/**
 * This is the plural version of a SeededDistribution that is not referenced just yet.
 * @export
 * @interface SeededDistributions
 */
export interface SeededDistributions {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededDistributions
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<SeededDistribution>}
	 * @memberof SeededDistributions
	 */
	iterable: SeededDistribution[];
}

/**
 * Check if a given object implements the SeededDistributions interface.
 */
export function instanceOfSeededDistributions(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function SeededDistributionsFromJSON(json: any): SeededDistributions {
	return SeededDistributionsFromJSONTyped(json, false);
}

export function SeededDistributionsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededDistributions {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(SeededDistributionFromJSON),
	};
}

export function SeededDistributionsToJSON(
	value?: SeededDistributions | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(SeededDistributionToJSON),
	};
}
