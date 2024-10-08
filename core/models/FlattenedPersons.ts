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
import type { ReferencedPerson } from "./ReferencedPerson.tsx";
import {
	ReferencedPersonFromJSON,
	ReferencedPersonToJSON,
} from "./ReferencedPerson.tsx";
import type { Score } from "./Score.tsx";
import { ScoreFromJSON, ScoreToJSON } from "./Score.tsx";

/**
 * This is the plural of Person. will have top level meta about the person including an iterable of all the person.
 * @export
 * @interface FlattenedPersons
 */
export interface FlattenedPersons {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FlattenedPersons
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<ReferencedPerson>}
	 * @memberof FlattenedPersons
	 */
	iterable: ReferencedPerson[];
	/**
	 * This is a Map<String, int> where the the key is an person id.
	 * @type {{ [key: string]: number; }}
	 * @memberof FlattenedPersons
	 */
	indices?: { [key: string]: number };
	/**
	 *
	 * @type {Score}
	 * @memberof FlattenedPersons
	 */
	score?: Score;
}

/**
 * Check if a given object implements the FlattenedPersons interface.
 */
export function instanceOfFlattenedPersons(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function FlattenedPersonsFromJSON(json: any): FlattenedPersons {
	return FlattenedPersonsFromJSONTyped(json, false);
}

export function FlattenedPersonsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FlattenedPersons {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(ReferencedPersonFromJSON),
		indices: exists(json, "indices") ? json["indices"] : undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
	};
}

export function FlattenedPersonsToJSON(value?: FlattenedPersons | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(ReferencedPersonToJSON),
		indices: value.indices,
		score: ScoreToJSON(value.score),
	};
}
