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
	QGPTStreamedOutputExtractedTextualMaterialsFromJSON,
	QGPTStreamedOutputExtractedTextualMaterialsToJSON,
	type QGPTStreamedOutputExtractedTextualMaterials,
} from "./QGPTStreamedOutputExtractedTextualMaterials.tsx";

/**
 * This is used as an object that will return some of the extracted materials from both
 * the message w/ compeleted/ or stopped
 *
 * as well as the context(if using WorkstreamContext)
 * @export
 * @interface QGPTStreamedOutputExtractedMaterials
 */
export interface QGPTStreamedOutputExtractedMaterials {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTStreamedOutputExtractedMaterials
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {QGPTStreamedOutputExtractedTextualMaterials}
	 * @memberof QGPTStreamedOutputExtractedMaterials
	 */
	textual?: QGPTStreamedOutputExtractedTextualMaterials;
}

/**
 * Check if a given object implements the QGPTStreamedOutputExtractedMaterials interface.
 */
export function instanceOfQGPTStreamedOutputExtractedMaterials(
	_value: object,
): boolean {
	const isInstance = true;

	return isInstance;
}

export function QGPTStreamedOutputExtractedMaterialsFromJSON(
	json: any,
): QGPTStreamedOutputExtractedMaterials {
	return QGPTStreamedOutputExtractedMaterialsFromJSONTyped(json, false);
}

export function QGPTStreamedOutputExtractedMaterialsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTStreamedOutputExtractedMaterials {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		textual: exists(json, "textual")
			? QGPTStreamedOutputExtractedTextualMaterialsFromJSON(
					json["textual"],
				)
			: undefined,
	};
}

export function QGPTStreamedOutputExtractedMaterialsToJSON(
	value?: QGPTStreamedOutputExtractedMaterials | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		textual: QGPTStreamedOutputExtractedTextualMaterialsToJSON(
			value.textual,
		),
	};
}
