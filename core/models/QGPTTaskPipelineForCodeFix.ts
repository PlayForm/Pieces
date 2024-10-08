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
 * This task is for fixing a bit of code.
 *
 * This is a class so that we can add optional properties in the future.
 *
 * Note: the snippet && language that needs to be fixed should be within the QGPTQuestionInput.relevant.
 * @export
 * @interface QGPTTaskPipelineForCodeFix
 */
export interface QGPTTaskPipelineForCodeFix {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTTaskPipelineForCodeFix
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * This is the error message provided from the IDE, that we can use to provide the solution.
	 * @type {string}
	 * @memberof QGPTTaskPipelineForCodeFix
	 */
	error?: string;
}

/**
 * Check if a given object implements the QGPTTaskPipelineForCodeFix interface.
 */
export function instanceOfQGPTTaskPipelineForCodeFix(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function QGPTTaskPipelineForCodeFixFromJSON(
	json: any,
): QGPTTaskPipelineForCodeFix {
	return QGPTTaskPipelineForCodeFixFromJSONTyped(json, false);
}

export function QGPTTaskPipelineForCodeFixFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTTaskPipelineForCodeFix {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		error: exists(json, "error") ? json["error"] : undefined,
	};
}

export function QGPTTaskPipelineForCodeFixToJSON(
	value?: QGPTTaskPipelineForCodeFix | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		error: value.error,
	};
}
