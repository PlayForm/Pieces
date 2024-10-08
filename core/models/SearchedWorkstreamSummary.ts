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
import type { SearchedAnnotations } from "./SearchedAnnotations.tsx";
import {
	SearchedAnnotationsFromJSON,
	SearchedAnnotationsToJSON,
} from "./SearchedAnnotations.tsx";
import type { WorkstreamSummary } from "./WorkstreamSummary.tsx";
import {
	WorkstreamSummaryFromJSON,
	WorkstreamSummaryToJSON,
} from "./WorkstreamSummary.tsx";

/**
 * This is used for the WorkstreamSummaries searching endpoint
 *
 * WorkstreamSummary here is only provided if transferables are set to true.
 *
 * temporal: if this is provided this means that their material matched the input via a timestamp.
 *
 * TODO will want to consider returning related materials to this material potentially both associated/ and not associated materials
 * ie suggestion: WorkstreamSuggestions
 *
 * annotations: this is provided if we match a specific annotation on a WorkstreamSummary
 * @export
 * @interface SearchedWorkstreamSummary
 */
export interface SearchedWorkstreamSummary {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SearchedWorkstreamSummary
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {WorkstreamSummary}
	 * @memberof SearchedWorkstreamSummary
	 */
	summary?: WorkstreamSummary;
	/**
	 *
	 * @type {SearchedAnnotations}
	 * @memberof SearchedWorkstreamSummary
	 */
	annotations?: SearchedAnnotations;
	/**
	 *
	 * @type {boolean}
	 * @memberof SearchedWorkstreamSummary
	 */
	exact: boolean;
	/**
	 *
	 * @type {number}
	 * @memberof SearchedWorkstreamSummary
	 */
	similarity: number;
	/**
	 *
	 * @type {boolean}
	 * @memberof SearchedWorkstreamSummary
	 */
	temporal?: boolean;
	/**
	 * This is the uuid of the WorkstreamSummary.
	 * @type {string}
	 * @memberof SearchedWorkstreamSummary
	 */
	identifier: string;
}

/**
 * Check if a given object implements the SearchedWorkstreamSummary interface.
 */
export function instanceOfSearchedWorkstreamSummary(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "exact" in value;
	isInstance = isInstance && "similarity" in value;
	isInstance = isInstance && "identifier" in value;

	return isInstance;
}

export function SearchedWorkstreamSummaryFromJSON(
	json: any,
): SearchedWorkstreamSummary {
	return SearchedWorkstreamSummaryFromJSONTyped(json, false);
}

export function SearchedWorkstreamSummaryFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SearchedWorkstreamSummary {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		summary: exists(json, "summary")
			? WorkstreamSummaryFromJSON(json["summary"])
			: undefined,
		annotations: exists(json, "annotations")
			? SearchedAnnotationsFromJSON(json["annotations"])
			: undefined,
		exact: json["exact"],
		similarity: json["similarity"],
		temporal: exists(json, "temporal") ? json["temporal"] : undefined,
		identifier: json["identifier"],
	};
}

export function SearchedWorkstreamSummaryToJSON(
	value?: SearchedWorkstreamSummary | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		summary: WorkstreamSummaryToJSON(value.summary),
		annotations: SearchedAnnotationsToJSON(value.annotations),
		exact: value.exact,
		similarity: value.similarity,
		temporal: value.temporal,
		identifier: value.identifier,
	};
}
