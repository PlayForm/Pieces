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
import type { FlattenedAssets } from "./FlattenedAssets.tsx";
import {
	FlattenedAssetsFromJSON,
	FlattenedAssetsToJSON,
} from "./FlattenedAssets.tsx";

/**
 * This is a model of all optional properties, that will get returned from /assets/pseudo.
 * @export
 * @interface PseudoAssets
 */
export interface PseudoAssets {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof PseudoAssets
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {FlattenedAssets}
	 * @memberof PseudoAssets
	 */
	identifiers?: FlattenedAssets;
}

/**
 * Check if a given object implements the PseudoAssets interface.
 */
export function instanceOfPseudoAssets(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function PseudoAssetsFromJSON(json: any): PseudoAssets {
	return PseudoAssetsFromJSONTyped(json, false);
}

export function PseudoAssetsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): PseudoAssets {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		identifiers: exists(json, "identifiers")
			? FlattenedAssetsFromJSON(json["identifiers"])
			: undefined,
	};
}

export function PseudoAssetsToJSON(value?: PseudoAssets | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		identifiers: FlattenedAssetsToJSON(value.identifiers),
	};
}
