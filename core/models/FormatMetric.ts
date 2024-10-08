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
import type { ClassificationGenericEnum } from "./ClassificationGenericEnum.tsx";
import {
	ClassificationGenericEnumFromJSON,
	ClassificationGenericEnumToJSON,
} from "./ClassificationGenericEnum.tsx";
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

/**
 * FormatMetric
 *
 * This is a model that will represent the about of specific formats. ie Generic: 'CODE' specific: 'DART' identifiers: ['FormatUID1, 'FormatUID2']
 * @export
 * @interface FormatMetric
 */
export interface FormatMetric {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FormatMetric
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {ClassificationGenericEnum}
	 * @memberof FormatMetric
	 */
	generic: ClassificationGenericEnum;
	/**
	 *
	 * @type {ClassificationSpecificEnum}
	 * @memberof FormatMetric
	 */
	specific: ClassificationSpecificEnum;
	/**
	 * this is a list of format ids
	 * @type {Array<string>}
	 * @memberof FormatMetric
	 */
	identifiers: string[];
}

/**
 * Check if a given object implements the FormatMetric interface.
 */
export function instanceOfFormatMetric(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "generic" in value;
	isInstance = isInstance && "specific" in value;
	isInstance = isInstance && "identifiers" in value;

	return isInstance;
}

export function FormatMetricFromJSON(json: any): FormatMetric {
	return FormatMetricFromJSONTyped(json, false);
}

export function FormatMetricFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FormatMetric {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		generic: ClassificationGenericEnumFromJSON(json["generic"]),
		specific: ClassificationSpecificEnumFromJSON(json["specific"]),
		identifiers: json["identifiers"],
	};
}

export function FormatMetricToJSON(value?: FormatMetric | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		generic: ClassificationGenericEnumToJSON(value.generic),
		specific: ClassificationSpecificEnumToJSON(value.specific),
		identifiers: value.identifiers,
	};
}
