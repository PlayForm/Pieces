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
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
	type EmbeddedModelSchema,
} from "./EmbeddedModelSchema.tsx";
import { ScoreFromJSON, ScoreToJSON, type Score } from "./Score.tsx";
import { TagFromJSON, TagToJSON, type Tag } from "./Tag.tsx";

/**
 * This is a model that represents multiple Tag Models
 * @export
 * @interface Tags
 */
export interface Tags {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Tags
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<Tag>}
	 * @memberof Tags
	 */
	iterable: Tag[];
	/**
	 * This is a Map<String, int> where the the key is an tag id.
	 * @type {{ [key: string]: number; }}
	 * @memberof Tags
	 */
	indices?: { [key: string]: number };
	/**
	 *
	 * @type {Score}
	 * @memberof Tags
	 */
	score?: Score;
}

/**
 * Check if a given object implements the Tags interface.
 */
export function instanceOfTags(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function TagsFromJSON(json: any): Tags {
	return TagsFromJSONTyped(json, false);
}

export function TagsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Tags {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(TagFromJSON),
		indices: exists(json, "indices") ? json["indices"] : undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
	};
}

export function TagsToJSON(value?: Tags | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(TagToJSON),
		indices: value.indices,
		score: ScoreToJSON(value.score),
	};
}
