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
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
	type EmbeddedModelSchema,
} from "./EmbeddedModelSchema.tsx";

/**
 * This is a String representaion of any of these changes.
 *
 * [NOT IMPLEMENTED] base64, base64_url, data_url
 * [IMPLEMENTED] raw
 * @export
 * @interface TransferableString
 */
export interface TransferableString {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof TransferableString
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * IMPLEMENTED
	 * @type {string}
	 * @memberof TransferableString
	 */
	raw?: string;
	/**
	 * NOT IMPLEMENTED
	 * @type {string}
	 * @memberof TransferableString
	 */
	base64?: string;
	/**
	 * NOT IMPLEMENTED
	 * @type {string}
	 * @memberof TransferableString
	 */
	base64Url?: string;
	/**
	 * NOT IMPLEMENTED
	 * @type {string}
	 * @memberof TransferableString
	 */
	dataUrl?: string;
}

/**
 * Check if a given object implements the TransferableString interface.
 */
export function instanceOfTransferableString(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function TransferableStringFromJSON(json: any): TransferableString {
	return TransferableStringFromJSONTyped(json, false);
}

export function TransferableStringFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TransferableString {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		raw: exists(json, "raw") ? json["raw"] : undefined,
		base64: exists(json, "base64") ? json["base64"] : undefined,
		base64Url: exists(json, "base64_url") ? json["base64_url"] : undefined,
		dataUrl: exists(json, "data_url") ? json["data_url"] : undefined,
	};
}

export function TransferableStringToJSON(
	value?: TransferableString | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		raw: value.raw,
		base64: value.base64,
		base64_url: value.base64Url,
		data_url: value.dataUrl,
	};
}
