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
import type { Score } from "./Score.tsx";
import { ScoreFromJSON, ScoreToJSON } from "./Score.tsx";
import type { Sensitive } from "./Sensitive.tsx";
import { SensitiveFromJSON, SensitiveToJSON } from "./Sensitive.tsx";

/**
 * This is a model that represents many individual sensitive pieces of data.
 * @export
 * @interface Sensitives
 */
export interface Sensitives {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Sensitives
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<Sensitive>}
	 * @memberof Sensitives
	 */
	iterable: Sensitive[];
	/**
	 *
	 * @type {Score}
	 * @memberof Sensitives
	 */
	score?: Score;
}

/**
 * Check if a given object implements the Sensitives interface.
 */
export function instanceOfSensitives(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function SensitivesFromJSON(json: any): Sensitives {
	return SensitivesFromJSONTyped(json, false);
}

export function SensitivesFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Sensitives {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(SensitiveFromJSON),
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
	};
}

export function SensitivesToJSON(value?: Sensitives | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(SensitiveToJSON),
		score: ScoreToJSON(value.score),
	};
}
