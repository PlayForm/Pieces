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
import type { QGPTConversationPipeline } from "./QGPTConversationPipeline.tsx";
import {
	QGPTConversationPipelineFromJSON,
	QGPTConversationPipelineToJSON,
} from "./QGPTConversationPipeline.tsx";
import type { QGPTTaskPipeline } from "./QGPTTaskPipeline.tsx";
import {
	QGPTTaskPipelineFromJSON,
	QGPTTaskPipelineToJSON,
} from "./QGPTTaskPipeline.tsx";

/**
 * This is a model related to switching between different prompts based on if we are dealing with
 * various tasks or if we are attempting to converse with LLMs via conversation.
 *
 * You will have 2 options-
 *
 * 1) task- This is specifically for 1 off task operations for instance explaning a bit of code
 * 2) conversation- This is specifically for conversing with our LLMs, will provide better results && high fedility
 *               responses for instance contextualize code conversations.
 * @export
 * @interface QGPTPromptPipeline
 */
export interface QGPTPromptPipeline {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTPromptPipeline
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {QGPTTaskPipeline}
	 * @memberof QGPTPromptPipeline
	 */
	task?: QGPTTaskPipeline;
	/**
	 *
	 * @type {QGPTConversationPipeline}
	 * @memberof QGPTPromptPipeline
	 */
	conversation?: QGPTConversationPipeline;
}

/**
 * Check if a given object implements the QGPTPromptPipeline interface.
 */
export function instanceOfQGPTPromptPipeline(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function QGPTPromptPipelineFromJSON(json: any): QGPTPromptPipeline {
	return QGPTPromptPipelineFromJSONTyped(json, false);
}

export function QGPTPromptPipelineFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTPromptPipeline {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		task: exists(json, "task")
			? QGPTTaskPipelineFromJSON(json["task"])
			: undefined,
		conversation: exists(json, "conversation")
			? QGPTConversationPipelineFromJSON(json["conversation"])
			: undefined,
	};
}

export function QGPTPromptPipelineToJSON(
	value?: QGPTPromptPipeline | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		task: QGPTTaskPipelineToJSON(value.task),
		conversation: QGPTConversationPipelineToJSON(value.conversation),
	};
}
