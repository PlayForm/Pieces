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
import type { AccessEnum } from "./AccessEnum.tsx";
import { AccessEnumFromJSON, AccessEnumToJSON } from "./AccessEnum.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { SeededUser } from "./SeededUser.tsx";
import { SeededUserFromJSON, SeededUserToJSON } from "./SeededUser.tsx";

/**
 * This is the incoming linkify model.
 *
 * if access is PRIVATE then please provide and array of users to enable the link for.
 *
 * Assumption, all assets are already backed up to the cloud.
 *
 * @export
 * @interface LinkifyMultiple
 */
export interface LinkifyMultiple {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof LinkifyMultiple
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * This is an array or string that represents an already backed up asset. That will be added to a collection.
	 * @type {Array<string>}
	 * @memberof LinkifyMultiple
	 */
	assets: string[];
	/**
	 * this is an array of users.
	 * @type {Array<SeededUser>}
	 * @memberof LinkifyMultiple
	 */
	users?: SeededUser[];
	/**
	 *
	 * @type {AccessEnum}
	 * @memberof LinkifyMultiple
	 */
	access: AccessEnum;
	/**
	 * optionally can give the collection a name if you want.
	 * @type {string}
	 * @memberof LinkifyMultiple
	 */
	name?: string;
}

/**
 * Check if a given object implements the LinkifyMultiple interface.
 */
export function instanceOfLinkifyMultiple(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "assets" in value;
	isInstance = isInstance && "access" in value;

	return isInstance;
}

export function LinkifyMultipleFromJSON(json: any): LinkifyMultiple {
	return LinkifyMultipleFromJSONTyped(json, false);
}

export function LinkifyMultipleFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): LinkifyMultiple {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		assets: json["assets"],
		users: exists(json, "users")
			? (json["users"] as any[]).map(SeededUserFromJSON)
			: undefined,
		access: AccessEnumFromJSON(json["access"]),
		name: exists(json, "name") ? json["name"] : undefined,
	};
}

export function LinkifyMultipleToJSON(value?: LinkifyMultiple | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		assets: value.assets,
		users:
			value.users === undefined
				? undefined
				: (value.users as any[]).map(SeededUserToJSON),
		access: AccessEnumToJSON(value.access),
		name: value.name,
	};
}
