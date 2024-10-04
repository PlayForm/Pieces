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
	FlattenedOCRAnalysisFromJSON,
	FlattenedOCRAnalysisToJSON,
	type FlattenedOCRAnalysis,
} from "./FlattenedOCRAnalysis.tsx";

/**
 *
 * @export
 * @interface FlattenedImageAnalysis
 */
export interface FlattenedImageAnalysis {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FlattenedImageAnalysis
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof FlattenedImageAnalysis
	 */
	id: string;
	/**
	 *
	 * @type {FlattenedOCRAnalysis}
	 * @memberof FlattenedImageAnalysis
	 */
	ocr?: FlattenedOCRAnalysis;
	/**
	 * this is a reference to our (parent)analysis
	 * @type {string}
	 * @memberof FlattenedImageAnalysis
	 */
	analysis: string;
}

/**
 * Check if a given object implements the FlattenedImageAnalysis interface.
 */
export function instanceOfFlattenedImageAnalysis(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "analysis" in value;

	return isInstance;
}

export function FlattenedImageAnalysisFromJSON(
	json: any,
): FlattenedImageAnalysis {
	return FlattenedImageAnalysisFromJSONTyped(json, false);
}

export function FlattenedImageAnalysisFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FlattenedImageAnalysis {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		ocr: exists(json, "ocr")
			? FlattenedOCRAnalysisFromJSON(json["ocr"])
			: undefined,
		analysis: json["analysis"],
	};
}

export function FlattenedImageAnalysisToJSON(
	value?: FlattenedImageAnalysis | null,
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
		ocr: FlattenedOCRAnalysisToJSON(value.ocr),
		analysis: value.analysis,
	};
}
