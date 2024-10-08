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
 * This is a specific model for a given WPE qdrant source.
 *
 * note: application is optional b/c we may want a network sorce in the future
 * TODO: think about adding an enum or something that will delimit the type of processor(vision/filewatcher/network/audio)
 *
 * TODO: in the future we can add tabs/filepaths to this model here.
 * TODO: Enum for source/processor ? i.e. WorkstreamPatternEngineProcessorEnum.VISION, WorkstreamPatternEngineProcessorEnum.NETWORK, WorkstreamPatternEngineProcessorEnum.FILE_IO, WorkstreamPatternEngineProcessorEnum.AUDIO, etc.
 * @export
 * @interface WorkstreamPatternEngineSource
 */
export interface WorkstreamPatternEngineSource {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof WorkstreamPatternEngineSource
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * This is the name of the window(foreground window)/application.(this will always be present)
	 * @type {string}
	 * @memberof WorkstreamPatternEngineSource
	 */
	name: string;
}

/**
 * Check if a given object implements the WorkstreamPatternEngineSource interface.
 */
export function instanceOfWorkstreamPatternEngineSource(
	value: object,
): boolean {
	let isInstance = true;
	isInstance = isInstance && "name" in value;

	return isInstance;
}

export function WorkstreamPatternEngineSourceFromJSON(
	json: any,
): WorkstreamPatternEngineSource {
	return WorkstreamPatternEngineSourceFromJSONTyped(json, false);
}

export function WorkstreamPatternEngineSourceFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): WorkstreamPatternEngineSource {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		name: json["name"],
	};
}

export function WorkstreamPatternEngineSourceToJSON(
	value?: WorkstreamPatternEngineSource | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		name: value.name,
	};
}
