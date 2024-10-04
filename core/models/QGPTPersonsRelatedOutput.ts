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
import { PersonsFromJSON, PersonsToJSON, type Persons } from "./Persons.tsx";

/**
 * This model is used for the output of the /qgpt/related/persons endpoint.
 *
 * Explanations here is a custom object with key value pairs,
 * when the key is the personUUId and the value is an explanation as to why this person was reccommended.
 * @export
 * @interface QGPTPersonsRelatedOutput
 */
export interface QGPTPersonsRelatedOutput {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTPersonsRelatedOutput
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Persons}
	 * @memberof QGPTPersonsRelatedOutput
	 */
	persons: Persons;
	/**
	 * This is a Map<String, String> where the the key is a person id. and the value is the explanation.
	 * @type {{ [key: string]: string; }}
	 * @memberof QGPTPersonsRelatedOutput
	 */
	explanations?: { [key: string]: string };
}

/**
 * Check if a given object implements the QGPTPersonsRelatedOutput interface.
 */
export function instanceOfQGPTPersonsRelatedOutput(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "persons" in value;

	return isInstance;
}

export function QGPTPersonsRelatedOutputFromJSON(
	json: any,
): QGPTPersonsRelatedOutput {
	return QGPTPersonsRelatedOutputFromJSONTyped(json, false);
}

export function QGPTPersonsRelatedOutputFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTPersonsRelatedOutput {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		persons: PersonsFromJSON(json["persons"]),
		explanations: exists(json, "explanations")
			? json["explanations"]
			: undefined,
	};
}

export function QGPTPersonsRelatedOutputToJSON(
	value?: QGPTPersonsRelatedOutput | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		persons: PersonsToJSON(value.persons),
		explanations: value.explanations,
	};
}
