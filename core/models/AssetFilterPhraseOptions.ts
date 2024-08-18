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
import type { AnnotationTypeEnum } from "./AnnotationTypeEnum.tsx";
import {
	AnnotationTypeEnumFromJSON,
	AnnotationTypeEnumToJSON,
} from "./AnnotationTypeEnum.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";

/**
 *
 * @export
 * @interface AssetFilterPhraseOptions
 */
export interface AssetFilterPhraseOptions {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof AssetFilterPhraseOptions
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {AnnotationTypeEnum}
	 * @memberof AssetFilterPhraseOptions
	 */
	annotation?: AnnotationTypeEnum;
}

/**
 * Check if a given object implements the AssetFilterPhraseOptions interface.
 */
export function instanceOfAssetFilterPhraseOptions(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function AssetFilterPhraseOptionsFromJSON(
	json: any,
): AssetFilterPhraseOptions {
	return AssetFilterPhraseOptionsFromJSONTyped(json, false);
}

export function AssetFilterPhraseOptionsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): AssetFilterPhraseOptions {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		annotation: exists(json, "annotation")
			? AnnotationTypeEnumFromJSON(json["annotation"])
			: undefined,
	};
}

export function AssetFilterPhraseOptionsToJSON(
	value?: AssetFilterPhraseOptions | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		annotation: AnnotationTypeEnumToJSON(value.annotation),
	};
}
