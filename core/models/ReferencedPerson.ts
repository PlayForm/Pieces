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
import type { FlattenedPerson } from "./FlattenedPerson.tsx";
import {
	FlattenedPersonFromJSON,
	FlattenedPersonToJSON,
} from "./FlattenedPerson.tsx";

/**
 * [DAG Safe] version of a Person Model.
 * @export
 * @interface ReferencedPerson
 */
export interface ReferencedPerson {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ReferencedPerson
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof ReferencedPerson
	 */
	id: string;
	/**
	 *
	 * @type {FlattenedPerson}
	 * @memberof ReferencedPerson
	 */
	reference?: FlattenedPerson;
}

/**
 * Check if a given object implements the ReferencedPerson interface.
 */
export function instanceOfReferencedPerson(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;

	return isInstance;
}

export function ReferencedPersonFromJSON(json: any): ReferencedPerson {
	return ReferencedPersonFromJSONTyped(json, false);
}

export function ReferencedPersonFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ReferencedPerson {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		reference: exists(json, "reference")
			? FlattenedPersonFromJSON(json["reference"])
			: undefined,
	};
}

export function ReferencedPersonToJSON(value?: ReferencedPerson | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		reference: FlattenedPersonToJSON(value.reference),
	};
}
