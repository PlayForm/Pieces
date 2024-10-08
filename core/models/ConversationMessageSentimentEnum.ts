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

/**
 * This will describe the sentiment of a specific message ie if the message was liked/disliked/reported
 * @export
 */
export const ConversationMessageSentimentEnum = {
	Like: "LIKE",
	Dislike: "DISLIKE",
	Report: "REPORT",
} as const;
export type ConversationMessageSentimentEnum =
	(typeof ConversationMessageSentimentEnum)[keyof typeof ConversationMessageSentimentEnum];

export function ConversationMessageSentimentEnumFromJSON(
	json: any,
): ConversationMessageSentimentEnum {
	return ConversationMessageSentimentEnumFromJSONTyped(json, false);
}

export function ConversationMessageSentimentEnumFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ConversationMessageSentimentEnum {
	return json as ConversationMessageSentimentEnum;
}

export function ConversationMessageSentimentEnumToJSON(
	value?: ConversationMessageSentimentEnum | null,
): any {
	return value as any;
}
