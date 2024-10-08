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
import type { SeededGitHubGistDistribution } from "./SeededGitHubGistDistribution.tsx";
import {
	SeededGitHubGistDistributionFromJSON,
	SeededGitHubGistDistributionToJSON,
} from "./SeededGitHubGistDistribution.tsx";

/**
 *
 * @export
 * @interface SeededGitHubDistribution
 */
export interface SeededGitHubDistribution {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededGitHubDistribution
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {SeededGitHubGistDistribution}
	 * @memberof SeededGitHubDistribution
	 */
	gist?: SeededGitHubGistDistribution;
}

/**
 * Check if a given object implements the SeededGitHubDistribution interface.
 */
export function instanceOfSeededGitHubDistribution(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function SeededGitHubDistributionFromJSON(
	json: any,
): SeededGitHubDistribution {
	return SeededGitHubDistributionFromJSONTyped(json, false);
}

export function SeededGitHubDistributionFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededGitHubDistribution {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		gist: exists(json, "gist")
			? SeededGitHubGistDistributionFromJSON(json["gist"])
			: undefined,
	};
}

export function SeededGitHubDistributionToJSON(
	value?: SeededGitHubDistribution | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		gist: SeededGitHubGistDistributionToJSON(value.gist),
	};
}
