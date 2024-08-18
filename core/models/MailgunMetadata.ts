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

/**
 * TODO add additional properties.
 * TODO eventually modify this model to look like the response from Mailgun.
 * @export
 * @interface MailgunMetadata
 */
export interface MailgunMetadata {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof MailgunMetadata
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * This is the id given to us from mailgun when the email was sent successfully.
	 * @type {string}
	 * @memberof MailgunMetadata
	 */
	messageId: string;
}

/**
 * Check if a given object implements the MailgunMetadata interface.
 */
export function instanceOfMailgunMetadata(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "messageId" in value;

	return isInstance;
}

export function MailgunMetadataFromJSON(json: any): MailgunMetadata {
	return MailgunMetadataFromJSONTyped(json, false);
}

export function MailgunMetadataFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): MailgunMetadata {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		messageId: json["messageId"],
	};
}

export function MailgunMetadataToJSON(value?: MailgunMetadata | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		messageId: value.messageId,
	};
}
