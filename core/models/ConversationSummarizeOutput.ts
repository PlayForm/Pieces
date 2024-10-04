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
import {
	ReferencedAnnotationFromJSON,
	ReferencedAnnotationToJSON,
	type ReferencedAnnotation,
} from "./ReferencedAnnotation.tsx";
import {
	ReferencedConversationFromJSON,
	ReferencedConversationToJSON,
	type ReferencedConversation,
} from "./ReferencedConversation.tsx";

/**
 * This is the output model for "/conversation/{conversation}/summarize
 * @export
 * @interface ConversationSummarizeOutput
 */
export interface ConversationSummarizeOutput {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ConversationSummarizeOutput
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {ReferencedConversation}
	 * @memberof ConversationSummarizeOutput
	 */
	conversation: ReferencedConversation;
	/**
	 *
	 * @type {ReferencedAnnotation}
	 * @memberof ConversationSummarizeOutput
	 */
	annotation: ReferencedAnnotation;
}

/**
 * Check if a given object implements the ConversationSummarizeOutput interface.
 */
export function instanceOfConversationSummarizeOutput(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "conversation" in value;
	isInstance = isInstance && "annotation" in value;

	return isInstance;
}

export function ConversationSummarizeOutputFromJSON(
	json: any,
): ConversationSummarizeOutput {
	return ConversationSummarizeOutputFromJSONTyped(json, false);
}

export function ConversationSummarizeOutputFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ConversationSummarizeOutput {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		conversation: ReferencedConversationFromJSON(json["conversation"]),
		annotation: ReferencedAnnotationFromJSON(json["annotation"]),
	};
}

export function ConversationSummarizeOutputToJSON(
	value?: ConversationSummarizeOutput | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		conversation: ReferencedConversationToJSON(value.conversation),
		annotation: ReferencedAnnotationToJSON(value.annotation),
	};
}
