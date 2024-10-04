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
	AestheticsFromJSON,
	AestheticsToJSON,
	type Aesthetics,
} from "./Aesthetics.tsx";
import {
	AllocationCloudFromJSON,
	AllocationCloudToJSON,
	type AllocationCloud,
} from "./AllocationCloud.tsx";
import {
	Auth0UserMetadataFromJSON,
	Auth0UserMetadataToJSON,
	type Auth0UserMetadata,
} from "./Auth0UserMetadata.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
	type EmbeddedModelSchema,
} from "./EmbeddedModelSchema.tsx";
import {
	ExternalProvidersFromJSON,
	ExternalProvidersToJSON,
	type ExternalProviders,
} from "./ExternalProviders.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
	type GroupedTimestamp,
} from "./GroupedTimestamp.tsx";

/**
 * This is the model for a user logged into Pieces.
 * @export
 * @interface UserProfile
 */
export interface UserProfile {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof UserProfile
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * mapped from picture.URL pointing to the user's profile picture.
	 * @type {string}
	 * @memberof UserProfile
	 */
	picture?: string;
	/**
	 *
	 * @type {string}
	 * @memberof UserProfile
	 */
	email?: string;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof UserProfile
	 */
	created?: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof UserProfile
	 */
	updated?: GroupedTimestamp;
	/**
	 * 	(unique) User's username.
	 *
	 * @type {string}
	 * @memberof UserProfile
	 */
	username?: string;
	/**
	 *
	 * @type {string}
	 * @memberof UserProfile
	 */
	id: string;
	/**
	 * This is the name of the User.
	 * @type {string}
	 * @memberof UserProfile
	 */
	name?: string;
	/**
	 *
	 * @type {Aesthetics}
	 * @memberof UserProfile
	 */
	aesthetics: Aesthetics;
	/**
	 *
	 * @type {string}
	 * @memberof UserProfile
	 */
	vanityname?: string;
	/**
	 *
	 * @type {AllocationCloud}
	 * @memberof UserProfile
	 */
	allocation?: AllocationCloud;
	/**
	 *
	 * @type {ExternalProviders}
	 * @memberof UserProfile
	 */
	providers?: ExternalProviders;
	/**
	 *
	 * @type {Auth0UserMetadata}
	 * @memberof UserProfile
	 */
	auth0?: Auth0UserMetadata;
}

/**
 * Check if a given object implements the UserProfile interface.
 */
export function instanceOfUserProfile(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "aesthetics" in value;

	return isInstance;
}

export function UserProfileFromJSON(json: any): UserProfile {
	return UserProfileFromJSONTyped(json, false);
}

export function UserProfileFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): UserProfile {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		picture: exists(json, "picture") ? json["picture"] : undefined,
		email: exists(json, "email") ? json["email"] : undefined,
		created: exists(json, "created")
			? GroupedTimestampFromJSON(json["created"])
			: undefined,
		updated: exists(json, "updated")
			? GroupedTimestampFromJSON(json["updated"])
			: undefined,
		username: exists(json, "username") ? json["username"] : undefined,
		id: json["id"],
		name: exists(json, "name") ? json["name"] : undefined,
		aesthetics: AestheticsFromJSON(json["aesthetics"]),
		vanityname: exists(json, "vanityname") ? json["vanityname"] : undefined,
		allocation: exists(json, "allocation")
			? AllocationCloudFromJSON(json["allocation"])
			: undefined,
		providers: exists(json, "providers")
			? ExternalProvidersFromJSON(json["providers"])
			: undefined,
		auth0: exists(json, "auth0")
			? Auth0UserMetadataFromJSON(json["auth0"])
			: undefined,
	};
}

export function UserProfileToJSON(value?: UserProfile | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		picture: value.picture,
		email: value.email,
		created: GroupedTimestampToJSON(value.created),
		updated: GroupedTimestampToJSON(value.updated),
		username: value.username,
		id: value.id,
		name: value.name,
		aesthetics: AestheticsToJSON(value.aesthetics),
		vanityname: value.vanityname,
		allocation: AllocationCloudToJSON(value.allocation),
		providers: ExternalProvidersToJSON(value.providers),
		auth0: Auth0UserMetadataToJSON(value.auth0),
	};
}
