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
 * This is a returnable for the metrics/formats/ordered
 * @export
 * @interface OrderedMetrics
 */
export interface OrderedMetrics {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof OrderedMetrics
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof OrderedMetrics
	 */
	ordered: string[];
}

/**
 * Check if a given object implements the OrderedMetrics interface.
 */
export function instanceOfOrderedMetrics(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "ordered" in value;

	return isInstance;
}

export function OrderedMetricsFromJSON(json: any): OrderedMetrics {
	return OrderedMetricsFromJSONTyped(json, false);
}

export function OrderedMetricsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): OrderedMetrics {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		ordered: json["ordered"],
	};
}

export function OrderedMetricsToJSON(value?: OrderedMetrics | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		ordered: value.ordered,
	};
}
