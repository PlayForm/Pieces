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
import type { TLPCodeProcessing } from "./TLPCodeProcessing.tsx";
import {
	TLPCodeProcessingFromJSON,
	TLPCodeProcessingToJSON,
} from "./TLPCodeProcessing.tsx";

/**
 *
 * @export
 * @interface TLPMachineLearningProcessingEvent
 */
export interface TLPMachineLearningProcessingEvent {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof TLPMachineLearningProcessingEvent
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {TLPCodeProcessing}
	 * @memberof TLPMachineLearningProcessingEvent
	 */
	code?: TLPCodeProcessing;
}

/**
 * Check if a given object implements the TLPMachineLearningProcessingEvent interface.
 */
export function instanceOfTLPMachineLearningProcessingEvent(
	_value: object,
): boolean {
	const isInstance = true;

	return isInstance;
}

export function TLPMachineLearningProcessingEventFromJSON(
	json: any,
): TLPMachineLearningProcessingEvent {
	return TLPMachineLearningProcessingEventFromJSONTyped(json, false);
}

export function TLPMachineLearningProcessingEventFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TLPMachineLearningProcessingEvent {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		code: exists(json, "code")
			? TLPCodeProcessingFromJSON(json["code"])
			: undefined,
	};
}

export function TLPMachineLearningProcessingEventToJSON(
	value?: TLPMachineLearningProcessingEvent | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		code: TLPCodeProcessingToJSON(value.code),
	};
}
