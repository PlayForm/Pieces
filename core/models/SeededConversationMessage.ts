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
	ConversationMessageSentimentEnumFromJSON,
	ConversationMessageSentimentEnumToJSON,
	type ConversationMessageSentimentEnum,
} from "./ConversationMessageSentimentEnum.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
	type EmbeddedModelSchema,
} from "./EmbeddedModelSchema.tsx";
import {
	FragmentFormatFromJSON,
	FragmentFormatToJSON,
	type FragmentFormat,
} from "./FragmentFormat.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
	type GroupedTimestamp,
} from "./GroupedTimestamp.tsx";
import { ModelFromJSON, ModelToJSON, type Model } from "./Model.tsx";
import {
	QGPTConversationMessageRoleEnumFromJSON,
	QGPTConversationMessageRoleEnumToJSON,
	type QGPTConversationMessageRoleEnum,
} from "./QGPTConversationMessageRoleEnum.tsx";
import {
	ReferencedConversationFromJSON,
	ReferencedConversationToJSON,
	type ReferencedConversation,
} from "./ReferencedConversation.tsx";

/**
 * This is a seeded version of a ConversationMessage.
 *
 * conversation is optional, this is because it can be used within the SeededConversation, however if this is passed into the /messages/create w/o a conversation uuid then we will throw an error.
 * @export
 * @interface SeededConversationMessage
 */
export interface SeededConversationMessage {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededConversationMessage
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof SeededConversationMessage
	 */
	created?: GroupedTimestamp;
	/**
	 *
	 * @type {Model}
	 * @memberof SeededConversationMessage
	 */
	model?: Model;
	/**
	 *
	 * @type {FragmentFormat}
	 * @memberof SeededConversationMessage
	 */
	fragment: FragmentFormat;
	/**
	 *
	 * @type {ReferencedConversation}
	 * @memberof SeededConversationMessage
	 */
	conversation?: ReferencedConversation;
	/**
	 *
	 * @type {ConversationMessageSentimentEnum}
	 * @memberof SeededConversationMessage
	 */
	sentiment?: ConversationMessageSentimentEnum;
	/**
	 *
	 * @type {QGPTConversationMessageRoleEnum}
	 * @memberof SeededConversationMessage
	 */
	role: QGPTConversationMessageRoleEnum;
}

/**
 * Check if a given object implements the SeededConversationMessage interface.
 */
export function instanceOfSeededConversationMessage(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "fragment" in value;
	isInstance = isInstance && "role" in value;

	return isInstance;
}

export function SeededConversationMessageFromJSON(
	json: any,
): SeededConversationMessage {
	return SeededConversationMessageFromJSONTyped(json, false);
}

export function SeededConversationMessageFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededConversationMessage {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		created: exists(json, "created")
			? GroupedTimestampFromJSON(json["created"])
			: undefined,
		model: exists(json, "model") ? ModelFromJSON(json["model"]) : undefined,
		fragment: FragmentFormatFromJSON(json["fragment"]),
		conversation: exists(json, "conversation")
			? ReferencedConversationFromJSON(json["conversation"])
			: undefined,
		sentiment: exists(json, "sentiment")
			? ConversationMessageSentimentEnumFromJSON(json["sentiment"])
			: undefined,
		role: QGPTConversationMessageRoleEnumFromJSON(json["role"]),
	};
}

export function SeededConversationMessageToJSON(
	value?: SeededConversationMessage | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		created: GroupedTimestampToJSON(value.created),
		model: ModelToJSON(value.model),
		fragment: FragmentFormatToJSON(value.fragment),
		conversation: ReferencedConversationToJSON(value.conversation),
		sentiment: ConversationMessageSentimentEnumToJSON(value.sentiment),
		role: QGPTConversationMessageRoleEnumToJSON(value.role),
	};
}
