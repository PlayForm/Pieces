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
	FlattenedConversationFromJSON,
	FlattenedConversationToJSON,
	type FlattenedConversation,
} from "./FlattenedConversation.tsx";

/**
 * This is a DAG-Safe Minimal version of a Conversation.
 * @export
 * @interface ReferencedConversation
 */
export interface ReferencedConversation {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ReferencedConversation
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof ReferencedConversation
	 */
	id: string;
	/**
	 *
	 * @type {FlattenedConversation}
	 * @memberof ReferencedConversation
	 */
	reference?: FlattenedConversation;
}

/**
 * Check if a given object implements the ReferencedConversation interface.
 */
export function instanceOfReferencedConversation(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;

	return isInstance;
}

export function ReferencedConversationFromJSON(
	json: any,
): ReferencedConversation {
	return ReferencedConversationFromJSONTyped(json, false);
}

export function ReferencedConversationFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ReferencedConversation {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		reference: exists(json, "reference")
			? FlattenedConversationFromJSON(json["reference"])
			: undefined,
	};
}

export function ReferencedConversationToJSON(
	value?: ReferencedConversation | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		reference: FlattenedConversationToJSON(value.reference),
	};
}
