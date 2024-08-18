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
import type { FlattenedUserProfile } from "./FlattenedUserProfile.tsx";
import {
	FlattenedUserProfileFromJSON,
	FlattenedUserProfileToJSON,
} from "./FlattenedUserProfile.tsx";

/**
 * A object to reference a user's ID and optionally a FlattenedUserProfile Instance
 * @export
 * @interface ReferencedUser
 */
export interface ReferencedUser {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ReferencedUser
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof ReferencedUser
	 */
	id: string;
	/**
	 *
	 * @type {FlattenedUserProfile}
	 * @memberof ReferencedUser
	 */
	reference?: FlattenedUserProfile;
}

/**
 * Check if a given object implements the ReferencedUser interface.
 */
export function instanceOfReferencedUser(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;

	return isInstance;
}

export function ReferencedUserFromJSON(json: any): ReferencedUser {
	return ReferencedUserFromJSONTyped(json, false);
}

export function ReferencedUserFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ReferencedUser {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		reference: exists(json, "reference")
			? FlattenedUserProfileFromJSON(json["reference"])
			: undefined,
	};
}

export function ReferencedUserToJSON(value?: ReferencedUser | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		reference: FlattenedUserProfileToJSON(value.reference),
	};
}
