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
import type { Model } from "./Model.tsx";
import { ModelFromJSON, ModelToJSON } from "./Model.tsx";

/**
 * This is a List of MachineLearning Models
 * @export
 * @interface Models
 */
export interface Models {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Models
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<Model>}
	 * @memberof Models
	 */
	iterable: Model[];
}

/**
 * Check if a given object implements the Models interface.
 */
export function instanceOfModels(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function ModelsFromJSON(json: any): Models {
	return ModelsFromJSONTyped(json, false);
}

export function ModelsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Models {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(ModelFromJSON),
	};
}

export function ModelsToJSON(value?: Models | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(ModelToJSON),
	};
}
