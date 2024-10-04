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
 * This task is for explaining a bit of code.
 *
 * This is a class so that we can add optional properties in the future.
 *
 * Note: the snippet && language that needs to be explaned should be within the QGPTQuestionInput.relevant
 * @export
 * @interface QGPTTaskPipelineForCodeExplanation
 */
export interface QGPTTaskPipelineForCodeExplanation {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTTaskPipelineForCodeExplanation
	 */
	schema?: EmbeddedModelSchema;
}

/**
 * Check if a given object implements the QGPTTaskPipelineForCodeExplanation interface.
 */
export function instanceOfQGPTTaskPipelineForCodeExplanation(
	_value: object,
): boolean {
	const isInstance = true;

	return isInstance;
}

export function QGPTTaskPipelineForCodeExplanationFromJSON(
	json: any,
): QGPTTaskPipelineForCodeExplanation {
	return QGPTTaskPipelineForCodeExplanationFromJSONTyped(json, false);
}

export function QGPTTaskPipelineForCodeExplanationFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTTaskPipelineForCodeExplanation {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
	};
}

export function QGPTTaskPipelineForCodeExplanationToJSON(
	value?: QGPTTaskPipelineForCodeExplanation | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
	};
}
