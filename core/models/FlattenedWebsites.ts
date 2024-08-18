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
import type { ReferencedWebsite } from "./ReferencedWebsite.tsx";
import {
	ReferencedWebsiteFromJSON,
	ReferencedWebsiteToJSON,
} from "./ReferencedWebsite.tsx";
import type { Score } from "./Score.tsx";
import { ScoreFromJSON, ScoreToJSON } from "./Score.tsx";

/**
 * This is a specific model for related websites to an asset.[DAG SAFE]
 * @export
 * @interface FlattenedWebsites
 */
export interface FlattenedWebsites {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FlattenedWebsites
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<ReferencedWebsite>}
	 * @memberof FlattenedWebsites
	 */
	iterable: ReferencedWebsite[];
	/**
	 * This is a Map<String, int> where the the key is an website id.
	 * @type {{ [key: string]: number; }}
	 * @memberof FlattenedWebsites
	 */
	indices?: { [key: string]: number };
	/**
	 *
	 * @type {Score}
	 * @memberof FlattenedWebsites
	 */
	score?: Score;
}

/**
 * Check if a given object implements the FlattenedWebsites interface.
 */
export function instanceOfFlattenedWebsites(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function FlattenedWebsitesFromJSON(json: any): FlattenedWebsites {
	return FlattenedWebsitesFromJSONTyped(json, false);
}

export function FlattenedWebsitesFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FlattenedWebsites {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(ReferencedWebsiteFromJSON),
		indices: exists(json, "indices") ? json["indices"] : undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
	};
}

export function FlattenedWebsitesToJSON(value?: FlattenedWebsites | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(ReferencedWebsiteToJSON),
		indices: value.indices,
		score: ScoreToJSON(value.score),
	};
}
