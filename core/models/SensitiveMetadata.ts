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
import type { TextMatch } from "./TextMatch.tsx";
import { TextMatchFromJSON, TextMatchToJSON } from "./TextMatch.tsx";

/**
 * This is optional metatdata attached to a sensitive piece of data.
 * @export
 * @interface SensitiveMetadata
 */
export interface SensitiveMetadata {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SensitiveMetadata
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {TextMatch}
	 * @memberof SensitiveMetadata
	 */
	match?: TextMatch;
	/**
	 * entropy of the sensitive
	 * @type {number}
	 * @memberof SensitiveMetadata
	 */
	entropy?: number;
}

/**
 * Check if a given object implements the SensitiveMetadata interface.
 */
export function instanceOfSensitiveMetadata(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function SensitiveMetadataFromJSON(json: any): SensitiveMetadata {
	return SensitiveMetadataFromJSONTyped(json, false);
}

export function SensitiveMetadataFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SensitiveMetadata {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		match: exists(json, "match")
			? TextMatchFromJSON(json["match"])
			: undefined,
		entropy: exists(json, "entropy") ? json["entropy"] : undefined,
	};
}

export function SensitiveMetadataToJSON(value?: SensitiveMetadata | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		match: TextMatchToJSON(value.match),
		entropy: value.entropy,
	};
}
