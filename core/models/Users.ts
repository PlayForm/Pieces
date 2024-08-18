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
import type { UserProfile } from "./UserProfile.tsx";
import { UserProfileFromJSON, UserProfileToJSON } from "./UserProfile.tsx";

/**
 * A base class for a collection of users and some additional meta properties.
 * @export
 * @interface Users
 */
export interface Users {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Users
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<UserProfile>}
	 * @memberof Users
	 */
	iterable?: UserProfile[];
}

/**
 * Check if a given object implements the Users interface.
 */
export function instanceOfUsers(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function UsersFromJSON(json: any): Users {
	return UsersFromJSONTyped(json, false);
}

export function UsersFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Users {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: exists(json, "iterable")
			? (json["iterable"] as any[]).map(UserProfileFromJSON)
			: undefined,
	};
}

export function UsersToJSON(value?: Users | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable:
			value.iterable === undefined
				? undefined
				: (value.iterable as any[]).map(UserProfileToJSON),
	};
}
