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
 * This is an input body for the /machine_learning/text/technical_processing/generators/personification endpoint.
 *
 * This will accept some of the personal details ie languages/personas && will transform this in to onbaording snippets
 * @export
 * @interface PreonboardedPersonaDetails
 */
export interface PreonboardedPersonaDetails {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof PreonboardedPersonaDetails
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<string>}
	 * @memberof PreonboardedPersonaDetails
	 */
	languages?: string[];
	/**
	 *
	 * @type {Array<string>}
	 * @memberof PreonboardedPersonaDetails
	 */
	personas?: string[];
}

/**
 * Check if a given object implements the PreonboardedPersonaDetails interface.
 */
export function instanceOfPreonboardedPersonaDetails(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function PreonboardedPersonaDetailsFromJSON(
	json: any,
): PreonboardedPersonaDetails {
	return PreonboardedPersonaDetailsFromJSONTyped(json, false);
}

export function PreonboardedPersonaDetailsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): PreonboardedPersonaDetails {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		languages: exists(json, "languages") ? json["languages"] : undefined,
		personas: exists(json, "personas") ? json["personas"] : undefined,
	};
}

export function PreonboardedPersonaDetailsToJSON(
	value?: PreonboardedPersonaDetails | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		languages: value.languages,
		personas: value.personas,
	};
}
