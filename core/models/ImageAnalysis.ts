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
import type { OCRAnalysis } from "./OCRAnalysis.tsx";
import { OCRAnalysisFromJSON, OCRAnalysisToJSON } from "./OCRAnalysis.tsx";

/**
 * This is a model that represents all the information collected during the processing of an image.
 * @export
 * @interface ImageAnalysis
 */
export interface ImageAnalysis {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ImageAnalysis
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * this is a uuid that represents a imageAnalysis.
	 * @type {string}
	 * @memberof ImageAnalysis
	 */
	id: string;
	/**
	 * this is a reference to the analysis.
	 * @type {string}
	 * @memberof ImageAnalysis
	 */
	analysis: string;
	/**
	 *
	 * @type {OCRAnalysis}
	 * @memberof ImageAnalysis
	 */
	ocr?: OCRAnalysis;
}

/**
 * Check if a given object implements the ImageAnalysis interface.
 */
export function instanceOfImageAnalysis(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "analysis" in value;

	return isInstance;
}

export function ImageAnalysisFromJSON(json: any): ImageAnalysis {
	return ImageAnalysisFromJSONTyped(json, false);
}

export function ImageAnalysisFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ImageAnalysis {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		analysis: json["analysis"],
		ocr: exists(json, "ocr") ? OCRAnalysisFromJSON(json["ocr"]) : undefined,
	};
}

export function ImageAnalysisToJSON(value?: ImageAnalysis | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		analysis: value.analysis,
		ocr: OCRAnalysisToJSON(value.ocr),
	};
}
