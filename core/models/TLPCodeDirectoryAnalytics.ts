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
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
	type EmbeddedModelSchema,
} from "./EmbeddedModelSchema.tsx";

/**
 *
 * @export
 * @interface TLPCodeDirectoryAnalytics
 */
export interface TLPCodeDirectoryAnalytics {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof TLPCodeDirectoryAnalytics
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof TLPCodeDirectoryAnalytics
	 */
	id?: string;
}

/**
 * Check if a given object implements the TLPCodeDirectoryAnalytics interface.
 */
export function instanceOfTLPCodeDirectoryAnalytics(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function TLPCodeDirectoryAnalyticsFromJSON(
	json: any,
): TLPCodeDirectoryAnalytics {
	return TLPCodeDirectoryAnalyticsFromJSONTyped(json, false);
}

export function TLPCodeDirectoryAnalyticsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TLPCodeDirectoryAnalytics {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: exists(json, "id") ? json["id"] : undefined,
	};
}

export function TLPCodeDirectoryAnalyticsToJSON(
	value?: TLPCodeDirectoryAnalytics | null,
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
	};
}
