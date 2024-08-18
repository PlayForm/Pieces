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
import type { QGPTQuestionAnswers } from "./QGPTQuestionAnswers.tsx";
import {
	QGPTQuestionAnswersFromJSON,
	QGPTQuestionAnswersToJSON,
} from "./QGPTQuestionAnswers.tsx";

/**
 * This is the output/returned value from the /qgpt/question endpoint. && /qgpt/followup
 *
 * This will just have a single required property. the possible answers to the question, with a score.
 * @export
 * @interface QGPTQuestionOutput
 */
export interface QGPTQuestionOutput {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTQuestionOutput
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {QGPTQuestionAnswers}
	 * @memberof QGPTQuestionOutput
	 */
	answers: QGPTQuestionAnswers;
}

/**
 * Check if a given object implements the QGPTQuestionOutput interface.
 */
export function instanceOfQGPTQuestionOutput(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "answers" in value;

	return isInstance;
}

export function QGPTQuestionOutputFromJSON(json: any): QGPTQuestionOutput {
	return QGPTQuestionOutputFromJSONTyped(json, false);
}

export function QGPTQuestionOutputFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTQuestionOutput {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		answers: QGPTQuestionAnswersFromJSON(json["answers"]),
	};
}

export function QGPTQuestionOutputToJSON(
	value?: QGPTQuestionOutput | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		answers: QGPTQuestionAnswersToJSON(value.answers),
	};
}
