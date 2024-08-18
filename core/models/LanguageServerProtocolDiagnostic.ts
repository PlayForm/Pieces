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
import type { LanguageServerProtocolCode } from "./LanguageServerProtocolCode.tsx";
import {
	LanguageServerProtocolCodeFromJSON,
	LanguageServerProtocolCodeToJSON,
} from "./LanguageServerProtocolCode.tsx";
import type { LanguageServerProtocolCodeDescription } from "./LanguageServerProtocolCodeDescription.tsx";
import {
	LanguageServerProtocolCodeDescriptionFromJSON,
	LanguageServerProtocolCodeDescriptionToJSON,
} from "./LanguageServerProtocolCodeDescription.tsx";
import type { LanguageServerProtocolLocationRange } from "./LanguageServerProtocolLocationRange.tsx";
import {
	LanguageServerProtocolLocationRangeFromJSON,
	LanguageServerProtocolLocationRangeToJSON,
} from "./LanguageServerProtocolLocationRange.tsx";
import type { LanguageServerProtocolSeverityEnum } from "./LanguageServerProtocolSeverityEnum.tsx";
import {
	LanguageServerProtocolSeverityEnumFromJSON,
	LanguageServerProtocolSeverityEnumToJSON,
} from "./LanguageServerProtocolSeverityEnum.tsx";

/**
 * TODO
 * @export
 * @interface LanguageServerProtocolDiagnostic
 */
export interface LanguageServerProtocolDiagnostic {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof LanguageServerProtocolDiagnostic
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {LanguageServerProtocolLocationRange}
	 * @memberof LanguageServerProtocolDiagnostic
	 */
	range: LanguageServerProtocolLocationRange;
	/**
	 *
	 * @type {LanguageServerProtocolSeverityEnum}
	 * @memberof LanguageServerProtocolDiagnostic
	 */
	severity?: LanguageServerProtocolSeverityEnum;
	/**
	 *
	 * @type {LanguageServerProtocolCode}
	 * @memberof LanguageServerProtocolDiagnostic
	 */
	code?: LanguageServerProtocolCode;
	/**
	 *
	 * @type {LanguageServerProtocolCodeDescription}
	 * @memberof LanguageServerProtocolDiagnostic
	 */
	codeDescription?: LanguageServerProtocolCodeDescription;
	/**
	 *
	 * @type {string}
	 * @memberof LanguageServerProtocolDiagnostic
	 */
	source?: string;
	/**
	 *
	 * @type {string}
	 * @memberof LanguageServerProtocolDiagnostic
	 */
	message: string;
}

/**
 * Check if a given object implements the LanguageServerProtocolDiagnostic interface.
 */
export function instanceOfLanguageServerProtocolDiagnostic(
	value: object,
): boolean {
	let isInstance = true;
	isInstance = isInstance && "range" in value;
	isInstance = isInstance && "message" in value;

	return isInstance;
}

export function LanguageServerProtocolDiagnosticFromJSON(
	json: any,
): LanguageServerProtocolDiagnostic {
	return LanguageServerProtocolDiagnosticFromJSONTyped(json, false);
}

export function LanguageServerProtocolDiagnosticFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): LanguageServerProtocolDiagnostic {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		range: LanguageServerProtocolLocationRangeFromJSON(json["range"]),
		severity: exists(json, "severity")
			? LanguageServerProtocolSeverityEnumFromJSON(json["severity"])
			: undefined,
		code: exists(json, "code")
			? LanguageServerProtocolCodeFromJSON(json["code"])
			: undefined,
		codeDescription: exists(json, "codeDescription")
			? LanguageServerProtocolCodeDescriptionFromJSON(
					json["codeDescription"],
				)
			: undefined,
		source: exists(json, "source") ? json["source"] : undefined,
		message: json["message"],
	};
}

export function LanguageServerProtocolDiagnosticToJSON(
	value?: LanguageServerProtocolDiagnostic | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		range: LanguageServerProtocolLocationRangeToJSON(value.range),
		severity: LanguageServerProtocolSeverityEnumToJSON(value.severity),
		code: LanguageServerProtocolCodeToJSON(value.code),
		codeDescription: LanguageServerProtocolCodeDescriptionToJSON(
			value.codeDescription,
		),
		source: value.source,
		message: value.message,
	};
}
