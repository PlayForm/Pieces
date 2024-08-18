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
 *
 * @export
 * @interface QGPTRepromptOutput
 */
export interface QGPTRepromptOutput {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTRepromptOutput
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof QGPTRepromptOutput
	 */
	query: string;
}

/**
 * Check if a given object implements the QGPTRepromptOutput interface.
 */
export function instanceOfQGPTRepromptOutput(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "query" in value;

	return isInstance;
}

export function QGPTRepromptOutputFromJSON(json: any): QGPTRepromptOutput {
	return QGPTRepromptOutputFromJSONTyped(json, false);
}

export function QGPTRepromptOutputFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTRepromptOutput {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		query: json["query"],
	};
}

export function QGPTRepromptOutputToJSON(
	value?: QGPTRepromptOutput | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		query: value.query,
	};
}
