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
import type { ClassificationSpecificEnum } from "./ClassificationSpecificEnum.tsx";
import {
	ClassificationSpecificEnumFromJSON,
	ClassificationSpecificEnumToJSON,
} from "./ClassificationSpecificEnum.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { Format } from "./Format.tsx";
import { FormatFromJSON, FormatToJSON } from "./Format.tsx";

/**
 * This is a model that will represent the miminum properties required to update the classification of this format.
 * @export
 * @interface FormatReclassification
 */
export interface FormatReclassification {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FormatReclassification
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {ClassificationSpecificEnum}
	 * @memberof FormatReclassification
	 */
	ext: ClassificationSpecificEnum;
	/**
	 *
	 * @type {Format}
	 * @memberof FormatReclassification
	 */
	format: Format;
}

/**
 * Check if a given object implements the FormatReclassification interface.
 */
export function instanceOfFormatReclassification(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "ext" in value;
	isInstance = isInstance && "format" in value;

	return isInstance;
}

export function FormatReclassificationFromJSON(
	json: any,
): FormatReclassification {
	return FormatReclassificationFromJSONTyped(json, false);
}

export function FormatReclassificationFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FormatReclassification {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		ext: ClassificationSpecificEnumFromJSON(json["ext"]),
		format: FormatFromJSON(json["format"]),
	};
}

export function FormatReclassificationToJSON(
	value?: FormatReclassification | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		ext: ClassificationSpecificEnumToJSON(value.ext),
		format: FormatToJSON(value.format),
	};
}
