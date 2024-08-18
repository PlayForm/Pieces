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
import type { LanguageServerProtocolDiagnostics } from "./LanguageServerProtocolDiagnostics.tsx";
import {
	LanguageServerProtocolDiagnosticsFromJSON,
	LanguageServerProtocolDiagnosticsToJSON,
} from "./LanguageServerProtocolDiagnostics.tsx";

/**
 * TODO
 * @export
 * @interface LanguageServerProtocol
 */
export interface LanguageServerProtocol {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof LanguageServerProtocol
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {LanguageServerProtocolDiagnostics}
	 * @memberof LanguageServerProtocol
	 */
	diagnostics?: LanguageServerProtocolDiagnostics;
}

/**
 * Check if a given object implements the LanguageServerProtocol interface.
 */
export function instanceOfLanguageServerProtocol(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function LanguageServerProtocolFromJSON(
	json: any,
): LanguageServerProtocol {
	return LanguageServerProtocolFromJSONTyped(json, false);
}

export function LanguageServerProtocolFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): LanguageServerProtocol {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		diagnostics: exists(json, "diagnostics")
			? LanguageServerProtocolDiagnosticsFromJSON(json["diagnostics"])
			: undefined,
	};
}

export function LanguageServerProtocolToJSON(
	value?: LanguageServerProtocol | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		diagnostics: LanguageServerProtocolDiagnosticsToJSON(value.diagnostics),
	};
}
