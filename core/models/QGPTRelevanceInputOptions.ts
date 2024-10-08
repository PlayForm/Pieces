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
import type { QGPTPromptPipeline } from "./QGPTPromptPipeline.tsx";
import {
	QGPTPromptPipelineFromJSON,
	QGPTPromptPipelineToJSON,
} from "./QGPTPromptPipeline.tsx";

/**
 *
 * @export
 * @interface QGPTRelevanceInputOptions
 */
export interface QGPTRelevanceInputOptions {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTRelevanceInputOptions
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * This is an optional boolen that will tell us to use our entire snippet database as the sample.
	 * @type {boolean}
	 * @memberof QGPTRelevanceInputOptions
	 */
	database?: boolean;
	/**
	 * This is an optional boolean, that will let the serve know if you want to combine the 2 endpointsboth relevance && the Question endpoint to return the final results.
	 * @type {boolean}
	 * @memberof QGPTRelevanceInputOptions
	 */
	question?: boolean;
	/**
	 *
	 * @type {QGPTPromptPipeline}
	 * @memberof QGPTRelevanceInputOptions
	 */
	pipeline?: QGPTPromptPipeline;
}

/**
 * Check if a given object implements the QGPTRelevanceInputOptions interface.
 */
export function instanceOfQGPTRelevanceInputOptions(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function QGPTRelevanceInputOptionsFromJSON(
	json: any,
): QGPTRelevanceInputOptions {
	return QGPTRelevanceInputOptionsFromJSONTyped(json, false);
}

export function QGPTRelevanceInputOptionsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTRelevanceInputOptions {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		database: exists(json, "database") ? json["database"] : undefined,
		question: exists(json, "question") ? json["question"] : undefined,
		pipeline: exists(json, "pipeline")
			? QGPTPromptPipelineFromJSON(json["pipeline"])
			: undefined,
	};
}

export function QGPTRelevanceInputOptionsToJSON(
	value?: QGPTRelevanceInputOptions | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		database: value.database,
		question: value.question,
		pipeline: QGPTPromptPipelineToJSON(value.pipeline),
	};
}
