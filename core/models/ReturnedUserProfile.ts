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
 * This is a modle strictly for the purpose that when calling '/user' and other user related endpoints the UserProfile could potentially be null, so we needed a model to do that.
 * @export
 * @interface ReturnedUserProfile
 */
export interface ReturnedUserProfile {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ReturnedUserProfile
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {UserProfile}
	 * @memberof ReturnedUserProfile
	 */
	user?: UserProfile;
}

/**
 * Check if a given object implements the ReturnedUserProfile interface.
 */
export function instanceOfReturnedUserProfile(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function ReturnedUserProfileFromJSON(json: any): ReturnedUserProfile {
	return ReturnedUserProfileFromJSONTyped(json, false);
}

export function ReturnedUserProfileFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ReturnedUserProfile {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		user: exists(json, "user")
			? UserProfileFromJSON(json["user"])
			: undefined,
	};
}

export function ReturnedUserProfileToJSON(
	value?: ReturnedUserProfile | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		user: UserProfileToJSON(value.user),
	};
}
