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
import type { Auth0UserMetadata } from "./Auth0UserMetadata.tsx";
import {
	Auth0UserMetadataFromJSON,
	Auth0UserMetadataToJSON,
} from "./Auth0UserMetadata.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";

/**
 * This is the returnable for the ""/external_provider/api_key/delete" endpoint
 * @export
 * @interface DeletedExternalProviderApiKey
 */
export interface DeletedExternalProviderApiKey {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof DeletedExternalProviderApiKey
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Auth0UserMetadata}
	 * @memberof DeletedExternalProviderApiKey
	 */
	metadata: Auth0UserMetadata;
}

/**
 * Check if a given object implements the DeletedExternalProviderApiKey interface.
 */
export function instanceOfDeletedExternalProviderApiKey(
	value: object,
): boolean {
	let isInstance = true;
	isInstance = isInstance && "metadata" in value;

	return isInstance;
}

export function DeletedExternalProviderApiKeyFromJSON(
	json: any,
): DeletedExternalProviderApiKey {
	return DeletedExternalProviderApiKeyFromJSONTyped(json, false);
}

export function DeletedExternalProviderApiKeyFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): DeletedExternalProviderApiKey {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		metadata: Auth0UserMetadataFromJSON(json["metadata"]),
	};
}

export function DeletedExternalProviderApiKeyToJSON(
	value?: DeletedExternalProviderApiKey | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		metadata: Auth0UserMetadataToJSON(value.metadata),
	};
}
