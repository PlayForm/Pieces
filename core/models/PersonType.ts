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
import type { PersonBasicType } from "./PersonBasicType.tsx";
import {
	PersonBasicTypeFromJSON,
	PersonBasicTypeToJSON,
} from "./PersonBasicType.tsx";
import type { UserProfile } from "./UserProfile.tsx";
import { UserProfileFromJSON, UserProfileToJSON } from "./UserProfile.tsx";

/**
 * basic or platform is absolutely required here.
 * basic: if provided is just information that has been either extracted from the piece or other wise added here.
 * platform: is a real Pieces User.(this user will also exist within the user's users collection. && if not then we will just use the data we have.)
 * @export
 * @interface PersonType
 */
export interface PersonType {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof PersonType
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {PersonBasicType}
	 * @memberof PersonType
	 */
	basic?: PersonBasicType;
	/**
	 *
	 * @type {UserProfile}
	 * @memberof PersonType
	 */
	platform?: UserProfile;
}

/**
 * Check if a given object implements the PersonType interface.
 */
export function instanceOfPersonType(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function PersonTypeFromJSON(json: any): PersonType {
	return PersonTypeFromJSONTyped(json, false);
}

export function PersonTypeFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): PersonType {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		basic: exists(json, "basic")
			? PersonBasicTypeFromJSON(json["basic"])
			: undefined,
		platform: exists(json, "platform")
			? UserProfileFromJSON(json["platform"])
			: undefined,
	};
}

export function PersonTypeToJSON(value?: PersonType | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		basic: PersonBasicTypeToJSON(value.basic),
		platform: UserProfileToJSON(value.platform),
	};
}
