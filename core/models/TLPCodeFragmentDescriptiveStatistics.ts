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
 * Model for ML big query Data collection.
 * @export
 * @interface TLPCodeFragmentDescriptiveStatistics
 */
export interface TLPCodeFragmentDescriptiveStatistics {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof TLPCodeFragmentDescriptiveStatistics
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof TLPCodeFragmentDescriptiveStatistics
	 */
	user: string;
	/**
	 *
	 * @type {string}
	 * @memberof TLPCodeFragmentDescriptiveStatistics
	 */
	os: string;
	/**
	 *
	 * @type {string}
	 * @memberof TLPCodeFragmentDescriptiveStatistics
	 */
	language: string;
	/**
	 *
	 * @type {number}
	 * @memberof TLPCodeFragmentDescriptiveStatistics
	 */
	length: number;
	/**
	 *
	 * @type {string}
	 * @memberof TLPCodeFragmentDescriptiveStatistics
	 */
	ast: string;
	/**
	 *
	 * @type {string}
	 * @memberof TLPCodeFragmentDescriptiveStatistics
	 */
	timestamp: string;
	/**
	 *
	 * @type {string}
	 * @memberof TLPCodeFragmentDescriptiveStatistics
	 */
	asset: string;
	/**
	 * this is the application in which this was created from.
	 * @type {string}
	 * @memberof TLPCodeFragmentDescriptiveStatistics
	 */
	context: string;
	/**
	 * this is the value of the snippet
	 * @type {string}
	 * @memberof TLPCodeFragmentDescriptiveStatistics
	 */
	snippet: string;
}

/**
 * Check if a given object implements the TLPCodeFragmentDescriptiveStatistics interface.
 */
export function instanceOfTLPCodeFragmentDescriptiveStatistics(
	value: object,
): boolean {
	let isInstance = true;
	isInstance = isInstance && "user" in value;
	isInstance = isInstance && "os" in value;
	isInstance = isInstance && "language" in value;
	isInstance = isInstance && "length" in value;
	isInstance = isInstance && "ast" in value;
	isInstance = isInstance && "timestamp" in value;
	isInstance = isInstance && "asset" in value;
	isInstance = isInstance && "context" in value;
	isInstance = isInstance && "snippet" in value;

	return isInstance;
}

export function TLPCodeFragmentDescriptiveStatisticsFromJSON(
	json: any,
): TLPCodeFragmentDescriptiveStatistics {
	return TLPCodeFragmentDescriptiveStatisticsFromJSONTyped(json, false);
}

export function TLPCodeFragmentDescriptiveStatisticsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TLPCodeFragmentDescriptiveStatistics {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		user: json["user"],
		os: json["os"],
		language: json["language"],
		length: json["length"],
		ast: json["ast"],
		timestamp: json["timestamp"],
		asset: json["asset"],
		context: json["context"],
		snippet: json["snippet"],
	};
}

export function TLPCodeFragmentDescriptiveStatisticsToJSON(
	value?: TLPCodeFragmentDescriptiveStatistics | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		user: value.user,
		os: value.os,
		language: value.language,
		length: value.length,
		ast: value.ast,
		timestamp: value.timestamp,
		asset: value.asset,
		context: value.context,
		snippet: value.snippet,
	};
}
