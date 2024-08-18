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
 * This task is for commenting a bit of code.
 *
 * This is a class so that we can add optional properties in the future.
 *
 * Note: the snippet && language that needs to be commented should be within the QGPTQuestionInput.relevant
 * @export
 * @interface QGPTTaskPipelineForCodeCommentation
 */
export interface QGPTTaskPipelineForCodeCommentation {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTTaskPipelineForCodeCommentation
	 */
	schema?: EmbeddedModelSchema;
}

/**
 * Check if a given object implements the QGPTTaskPipelineForCodeCommentation interface.
 */
export function instanceOfQGPTTaskPipelineForCodeCommentation(
	_value: object,
): boolean {
	const isInstance = true;

	return isInstance;
}

export function QGPTTaskPipelineForCodeCommentationFromJSON(
	json: any,
): QGPTTaskPipelineForCodeCommentation {
	return QGPTTaskPipelineForCodeCommentationFromJSONTyped(json, false);
}

export function QGPTTaskPipelineForCodeCommentationFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTTaskPipelineForCodeCommentation {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
	};
}

export function QGPTTaskPipelineForCodeCommentationToJSON(
	value?: QGPTTaskPipelineForCodeCommentation | null,
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
