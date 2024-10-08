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
import type { QGPTQuestionInput } from "./QGPTQuestionInput.tsx";
import {
	QGPTQuestionInputFromJSON,
	QGPTQuestionInputToJSON,
} from "./QGPTQuestionInput.tsx";
import type { QGPTRelevanceInput } from "./QGPTRelevanceInput.tsx";
import {
	QGPTRelevanceInputFromJSON,
	QGPTRelevanceInputToJSON,
} from "./QGPTRelevanceInput.tsx";

/**
 * This is the input for the /qgpt/stream endpoint.
 * @export
 * @interface QGPTStreamInput
 */
export interface QGPTStreamInput {
	/**
	 *
	 * @type {QGPTRelevanceInput}
	 * @memberof QGPTStreamInput
	 */
	relevance?: QGPTRelevanceInput;
	/**
	 *
	 * @type {QGPTQuestionInput}
	 * @memberof QGPTStreamInput
	 */
	question?: QGPTQuestionInput;
	/**
	 * This is an optional Id you can use to identify the result from your request.
	 * @type {string}
	 * @memberof QGPTStreamInput
	 */
	request?: string;
	/**
	 * This is the ID of a predefined persisted conversation, if this is not present we will create a new conversation for the input/output.(in the case of a question)
	 * @type {string}
	 * @memberof QGPTStreamInput
	 */
	conversation?: string;
	/**
	 * This will stop the output of the current LLM
	 * @type {boolean}
	 * @memberof QGPTStreamInput
	 */
	stop?: boolean;
	/**
	 * This will fully reset all current Activity within the QGPT stream Flows.
	 * @type {boolean}
	 * @memberof QGPTStreamInput
	 */
	reset?: boolean;
	/**
	 * This will let us know if we want to run the agent routing as well, this is default to true. However if set to false you will save on processing and you will recieve null for the agentRoutes class on the QGPTStreamOutput.
	 * @type {boolean}
	 * @memberof QGPTStreamInput
	 */
	agent?: boolean;
}

/**
 * Check if a given object implements the QGPTStreamInput interface.
 */
export function instanceOfQGPTStreamInput(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function QGPTStreamInputFromJSON(json: any): QGPTStreamInput {
	return QGPTStreamInputFromJSONTyped(json, false);
}

export function QGPTStreamInputFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTStreamInput {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		relevance: exists(json, "relevance")
			? QGPTRelevanceInputFromJSON(json["relevance"])
			: undefined,
		question: exists(json, "question")
			? QGPTQuestionInputFromJSON(json["question"])
			: undefined,
		request: exists(json, "request") ? json["request"] : undefined,
		conversation: exists(json, "conversation")
			? json["conversation"]
			: undefined,
		stop: exists(json, "stop") ? json["stop"] : undefined,
		reset: exists(json, "reset") ? json["reset"] : undefined,
		agent: exists(json, "agent") ? json["agent"] : undefined,
	};
}

export function QGPTStreamInputToJSON(value?: QGPTStreamInput | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		relevance: QGPTRelevanceInputToJSON(value.relevance),
		question: QGPTQuestionInputToJSON(value.question),
		request: value.request,
		conversation: value.conversation,
		stop: value.stop,
		reset: value.reset,
		agent: value.agent,
	};
}
