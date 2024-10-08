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
import type { Format } from "./Format.tsx";
import { FormatFromJSON, FormatToJSON } from "./Format.tsx";
import type { Model } from "./Model.tsx";
import { ModelFromJSON, ModelToJSON } from "./Model.tsx";

/**
 * This is the data collected during the ocr analysis of an image.
 * @export
 * @interface OCRAnalysis
 */
export interface OCRAnalysis {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof OCRAnalysis
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof OCRAnalysis
	 */
	id: string;
	/**
	 *
	 * @type {Format}
	 * @memberof OCRAnalysis
	 */
	raw: Format;
	/**
	 *
	 * @type {Format}
	 * @memberof OCRAnalysis
	 */
	hocr: Format;
	/**
	 * this is a reference the the imageAnalysis.
	 * @type {string}
	 * @memberof OCRAnalysis
	 */
	image: string;
	/**
	 *
	 * @type {Model}
	 * @memberof OCRAnalysis
	 */
	model: Model;
}

/**
 * Check if a given object implements the OCRAnalysis interface.
 */
export function instanceOfOCRAnalysis(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "raw" in value;
	isInstance = isInstance && "hocr" in value;
	isInstance = isInstance && "image" in value;
	isInstance = isInstance && "model" in value;

	return isInstance;
}

export function OCRAnalysisFromJSON(json: any): OCRAnalysis {
	return OCRAnalysisFromJSONTyped(json, false);
}

export function OCRAnalysisFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): OCRAnalysis {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		raw: FormatFromJSON(json["raw"]),
		hocr: FormatFromJSON(json["hocr"]),
		image: json["image"],
		model: ModelFromJSON(json["model"]),
	};
}

export function OCRAnalysisToJSON(value?: OCRAnalysis | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		raw: FormatToJSON(value.raw),
		hocr: FormatToJSON(value.hocr),
		image: value.image,
		model: ModelToJSON(value.model),
	};
}
