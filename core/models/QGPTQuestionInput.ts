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
import type { FlattenedConversationMessages } from "./FlattenedConversationMessages.tsx";
import {
	FlattenedConversationMessagesFromJSON,
	FlattenedConversationMessagesToJSON,
} from "./FlattenedConversationMessages.tsx";
import type { QGPTPromptPipeline } from "./QGPTPromptPipeline.tsx";
import {
	QGPTPromptPipelineFromJSON,
	QGPTPromptPipelineToJSON,
} from "./QGPTPromptPipeline.tsx";
import type { RelevantQGPTSeeds } from "./RelevantQGPTSeeds.tsx";
import {
	RelevantQGPTSeedsFromJSON,
	RelevantQGPTSeedsToJSON,
} from "./RelevantQGPTSeeds.tsx";
import type { TemporalRangeGrounding } from "./TemporalRangeGrounding.tsx";
import {
	TemporalRangeGroundingFromJSON,
	TemporalRangeGroundingToJSON,
} from "./TemporalRangeGrounding.tsx";

/**
 * This is the body input for the /code_gpt/question.
 *
 * Note:
 * - each relevant seed, must require at minimum a Seed or an id used from the /code_gpt/relevance endpoint or we will throw an error.
 * @export
 * @interface QGPTQuestionInput
 */
export interface QGPTQuestionInput {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTQuestionInput
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {RelevantQGPTSeeds}
	 * @memberof QGPTQuestionInput
	 */
	relevant: RelevantQGPTSeeds;
	/**
	 * This is the user asked question.
	 * @type {string}
	 * @memberof QGPTQuestionInput
	 */
	query: string;
	/**
	 * optional application id
	 * @type {string}
	 * @memberof QGPTQuestionInput
	 */
	application?: string;
	/**
	 * optional model id
	 * @type {string}
	 * @memberof QGPTQuestionInput
	 */
	model?: string;
	/**
	 *
	 * @type {FlattenedConversationMessages}
	 * @memberof QGPTQuestionInput
	 */
	messages?: FlattenedConversationMessages;
	/**
	 *
	 * @type {QGPTPromptPipeline}
	 * @memberof QGPTQuestionInput
	 */
	pipeline?: QGPTPromptPipeline;
	/**
	 *
	 * @type {TemporalRangeGrounding}
	 * @memberof QGPTQuestionInput
	 */
	temporal?: TemporalRangeGrounding;
}

/**
 * Check if a given object implements the QGPTQuestionInput interface.
 */
export function instanceOfQGPTQuestionInput(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "relevant" in value;
	isInstance = isInstance && "query" in value;

	return isInstance;
}

export function QGPTQuestionInputFromJSON(json: any): QGPTQuestionInput {
	return QGPTQuestionInputFromJSONTyped(json, false);
}

export function QGPTQuestionInputFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTQuestionInput {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		relevant: RelevantQGPTSeedsFromJSON(json["relevant"]),
		query: json["query"],
		application: exists(json, "application")
			? json["application"]
			: undefined,
		model: exists(json, "model") ? json["model"] : undefined,
		messages: exists(json, "messages")
			? FlattenedConversationMessagesFromJSON(json["messages"])
			: undefined,
		pipeline: exists(json, "pipeline")
			? QGPTPromptPipelineFromJSON(json["pipeline"])
			: undefined,
		temporal: exists(json, "temporal")
			? TemporalRangeGroundingFromJSON(json["temporal"])
			: undefined,
	};
}

export function QGPTQuestionInputToJSON(value?: QGPTQuestionInput | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		relevant: RelevantQGPTSeedsToJSON(value.relevant),
		query: value.query,
		application: value.application,
		model: value.model,
		messages: FlattenedConversationMessagesToJSON(value.messages),
		pipeline: QGPTPromptPipelineToJSON(value.pipeline),
		temporal: TemporalRangeGroundingToJSON(value.temporal),
	};
}
