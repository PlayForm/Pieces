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
 * *****NOTE:***** This is the basic referencedModel, for Now since we dont have a FlattenedModel, im going to simply not include the reference, because I do NOT want to attach a Model here (would cause breaking changes if we switched from a Model -> a flattenedModel). and (2) we are under going Model changes to the Model, so would cause issues.
 * @export
 * @interface ReferencedModel
 */
export interface ReferencedModel {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ReferencedModel
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof ReferencedModel
	 */
	id: string;
}

/**
 * Check if a given object implements the ReferencedModel interface.
 */
export function instanceOfReferencedModel(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;

	return isInstance;
}

export function ReferencedModelFromJSON(json: any): ReferencedModel {
	return ReferencedModelFromJSONTyped(json, false);
}

export function ReferencedModelFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ReferencedModel {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
	};
}

export function ReferencedModelToJSON(value?: ReferencedModel | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
	};
}
