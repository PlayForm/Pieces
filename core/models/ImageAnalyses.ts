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
import type { ImageAnalysis } from "./ImageAnalysis.tsx";
import {
	ImageAnalysisFromJSON,
	ImageAnalysisToJSON,
} from "./ImageAnalysis.tsx";

/**
 *
 * @export
 * @interface ImageAnalyses
 */
export interface ImageAnalyses {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ImageAnalyses
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<ImageAnalysis>}
	 * @memberof ImageAnalyses
	 */
	iterable: ImageAnalysis[];
}

/**
 * Check if a given object implements the ImageAnalyses interface.
 */
export function instanceOfImageAnalyses(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function ImageAnalysesFromJSON(json: any): ImageAnalyses {
	return ImageAnalysesFromJSONTyped(json, false);
}

export function ImageAnalysesFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ImageAnalyses {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(ImageAnalysisFromJSON),
	};
}

export function ImageAnalysesToJSON(value?: ImageAnalyses | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(ImageAnalysisToJSON),
	};
}
