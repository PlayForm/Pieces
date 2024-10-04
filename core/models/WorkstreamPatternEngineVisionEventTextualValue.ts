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
	TextuallyExtractedMaterialFromJSON,
	TextuallyExtractedMaterialToJSON,
	type TextuallyExtractedMaterial,
} from "./TextuallyExtractedMaterial.tsx";
import {
	TransferableStringFromJSON,
	TransferableStringToJSON,
	type TransferableString,
} from "./TransferableString.tsx";

/**
 * note: we could add a summarize property.
 * TODO: might need an extracted bool to say to aggregate the extracted
 * @export
 * @interface WorkstreamPatternEngineVisionEventTextualValue
 */
export interface WorkstreamPatternEngineVisionEventTextualValue {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof WorkstreamPatternEngineVisionEventTextualValue
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {TransferableString}
	 * @memberof WorkstreamPatternEngineVisionEventTextualValue
	 */
	ocr?: TransferableString;
	/**
	 *
	 * @type {TextuallyExtractedMaterial}
	 * @memberof WorkstreamPatternEngineVisionEventTextualValue
	 */
	extracted?: TextuallyExtractedMaterial;
}

/**
 * Check if a given object implements the WorkstreamPatternEngineVisionEventTextualValue interface.
 */
export function instanceOfWorkstreamPatternEngineVisionEventTextualValue(
	_value: object,
): boolean {
	const isInstance = true;

	return isInstance;
}

export function WorkstreamPatternEngineVisionEventTextualValueFromJSON(
	json: any,
): WorkstreamPatternEngineVisionEventTextualValue {
	return WorkstreamPatternEngineVisionEventTextualValueFromJSONTyped(
		json,
		false,
	);
}

export function WorkstreamPatternEngineVisionEventTextualValueFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): WorkstreamPatternEngineVisionEventTextualValue {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		ocr: exists(json, "ocr")
			? TransferableStringFromJSON(json["ocr"])
			: undefined,
		extracted: exists(json, "extracted")
			? TextuallyExtractedMaterialFromJSON(json["extracted"])
			: undefined,
	};
}

export function WorkstreamPatternEngineVisionEventTextualValueToJSON(
	value?: WorkstreamPatternEngineVisionEventTextualValue | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		ocr: TransferableStringToJSON(value.ocr),
		extracted: TextuallyExtractedMaterialToJSON(value.extracted),
	};
}
