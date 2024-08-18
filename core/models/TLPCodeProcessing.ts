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
import type { TLPCodeDirectoryAnalytics } from "./TLPCodeDirectoryAnalytics.tsx";
import {
	TLPCodeDirectoryAnalyticsFromJSON,
	TLPCodeDirectoryAnalyticsToJSON,
} from "./TLPCodeDirectoryAnalytics.tsx";
import type { TLPCodeFileAnalytics } from "./TLPCodeFileAnalytics.tsx";
import {
	TLPCodeFileAnalyticsFromJSON,
	TLPCodeFileAnalyticsToJSON,
} from "./TLPCodeFileAnalytics.tsx";
import type { TLPCodeRepositoryAnalytics } from "./TLPCodeRepositoryAnalytics.tsx";
import {
	TLPCodeRepositoryAnalyticsFromJSON,
	TLPCodeRepositoryAnalyticsToJSON,
} from "./TLPCodeRepositoryAnalytics.tsx";
import type { TLPCodeSnippetAnalytics } from "./TLPCodeSnippetAnalytics.tsx";
import {
	TLPCodeSnippetAnalyticsFromJSON,
	TLPCodeSnippetAnalyticsToJSON,
} from "./TLPCodeSnippetAnalytics.tsx";

/**
 *
 * @export
 * @interface TLPCodeProcessing
 */
export interface TLPCodeProcessing {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof TLPCodeProcessing
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {TLPCodeSnippetAnalytics}
	 * @memberof TLPCodeProcessing
	 */
	fragment?: TLPCodeSnippetAnalytics;
	/**
	 *
	 * @type {TLPCodeFileAnalytics}
	 * @memberof TLPCodeProcessing
	 */
	file?: TLPCodeFileAnalytics;
	/**
	 *
	 * @type {TLPCodeDirectoryAnalytics}
	 * @memberof TLPCodeProcessing
	 */
	directory?: TLPCodeDirectoryAnalytics;
	/**
	 *
	 * @type {TLPCodeRepositoryAnalytics}
	 * @memberof TLPCodeProcessing
	 */
	repository?: TLPCodeRepositoryAnalytics;
}

/**
 * Check if a given object implements the TLPCodeProcessing interface.
 */
export function instanceOfTLPCodeProcessing(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function TLPCodeProcessingFromJSON(json: any): TLPCodeProcessing {
	return TLPCodeProcessingFromJSONTyped(json, false);
}

export function TLPCodeProcessingFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TLPCodeProcessing {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		fragment: exists(json, "fragment")
			? TLPCodeSnippetAnalyticsFromJSON(json["fragment"])
			: undefined,
		file: exists(json, "file")
			? TLPCodeFileAnalyticsFromJSON(json["file"])
			: undefined,
		directory: exists(json, "directory")
			? TLPCodeDirectoryAnalyticsFromJSON(json["directory"])
			: undefined,
		repository: exists(json, "repository")
			? TLPCodeRepositoryAnalyticsFromJSON(json["repository"])
			: undefined,
	};
}

export function TLPCodeProcessingToJSON(value?: TLPCodeProcessing | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		fragment: TLPCodeSnippetAnalyticsToJSON(value.fragment),
		file: TLPCodeFileAnalyticsToJSON(value.file),
		directory: TLPCodeDirectoryAnalyticsToJSON(value.directory),
		repository: TLPCodeRepositoryAnalyticsToJSON(value.repository),
	};
}
