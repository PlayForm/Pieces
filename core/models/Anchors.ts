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
import type { Anchor } from "./Anchor.tsx";
import { AnchorFromJSON, AnchorToJSON } from "./Anchor.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { Score } from "./Score.tsx";
import { ScoreFromJSON, ScoreToJSON } from "./Score.tsx";

/**
 * This is the plural of Anchor.
 * @export
 * @interface Anchors
 */
export interface Anchors {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Anchors
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<Anchor>}
	 * @memberof Anchors
	 */
	iterable: Anchor[];
	/**
	 * This is a Map<String, int> where the the key is an Anchor id.
	 * @type {{ [key: string]: number; }}
	 * @memberof Anchors
	 */
	indices?: { [key: string]: number };
	/**
	 *
	 * @type {Score}
	 * @memberof Anchors
	 */
	score?: Score;
}

/**
 * Check if a given object implements the Anchors interface.
 */
export function instanceOfAnchors(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function AnchorsFromJSON(json: any): Anchors {
	return AnchorsFromJSONTyped(json, false);
}

export function AnchorsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Anchors {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(AnchorFromJSON),
		indices: exists(json, "indices") ? json["indices"] : undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
	};
}

export function AnchorsToJSON(value?: Anchors | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(AnchorToJSON),
		indices: value.indices,
		score: ScoreToJSON(value.score),
	};
}
