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
 * This type of conversation is reccomended to be provided when a user want generate code w/ context provided.
 *
 * This is a class so that we can add optional properties in the future.
 * @export
 * @interface QGPTConversationPipelineForContextualizedCodeGeneration
 */
export interface QGPTConversationPipelineForContextualizedCodeGeneration {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTConversationPipelineForContextualizedCodeGeneration
	 */
	schema?: EmbeddedModelSchema;
}

/**
 * Check if a given object implements the QGPTConversationPipelineForContextualizedCodeGeneration interface.
 */
export function instanceOfQGPTConversationPipelineForContextualizedCodeGeneration(
	_value: object,
): boolean {
	const isInstance = true;

	return isInstance;
}

export function QGPTConversationPipelineForContextualizedCodeGenerationFromJSON(
	json: any,
): QGPTConversationPipelineForContextualizedCodeGeneration {
	return QGPTConversationPipelineForContextualizedCodeGenerationFromJSONTyped(
		json,
		false,
	);
}

export function QGPTConversationPipelineForContextualizedCodeGenerationFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTConversationPipelineForContextualizedCodeGeneration {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
	};
}

export function QGPTConversationPipelineForContextualizedCodeGenerationToJSON(
	value?: QGPTConversationPipelineForContextualizedCodeGeneration | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
	};
}
