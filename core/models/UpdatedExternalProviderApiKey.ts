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
 * This is the update Auth0UserMetadata object, and the specific update output model for "/external_provider/api_key/update"
 * @export
 * @interface UpdatedExternalProviderApiKey
 */
export interface UpdatedExternalProviderApiKey {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof UpdatedExternalProviderApiKey
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Auth0UserMetadata}
	 * @memberof UpdatedExternalProviderApiKey
	 */
	metadata: Auth0UserMetadata;
}

/**
 * Check if a given object implements the UpdatedExternalProviderApiKey interface.
 */
export function instanceOfUpdatedExternalProviderApiKey(
	value: object,
): boolean {
	let isInstance = true;
	isInstance = isInstance && "metadata" in value;

	return isInstance;
}

export function UpdatedExternalProviderApiKeyFromJSON(
	json: any,
): UpdatedExternalProviderApiKey {
	return UpdatedExternalProviderApiKeyFromJSONTyped(json, false);
}

export function UpdatedExternalProviderApiKeyFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): UpdatedExternalProviderApiKey {
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

export function UpdatedExternalProviderApiKeyToJSON(
	value?: UpdatedExternalProviderApiKey | null,
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
