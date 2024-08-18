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
 * This is a free form data object that will enable additional data to be passed into SeededWorkstreamEvent, that corresponds to the event on the WorkstreamEvent.
 *
 * This is a WIP object.
 *
 * Need to think if we want to do something like raw:string (that is just a jsonObject) that is stringified, or if we add specific bits of data that we want. and specific fields for each event.
 * @export
 * @interface WorkstreamEventTriggerMetadata
 */
export interface WorkstreamEventTriggerMetadata {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof WorkstreamEventTriggerMetadata
	 */
	schema?: EmbeddedModelSchema;
}

/**
 * Check if a given object implements the WorkstreamEventTriggerMetadata interface.
 */
export function instanceOfWorkstreamEventTriggerMetadata(
	_value: object,
): boolean {
	const isInstance = true;

	return isInstance;
}

export function WorkstreamEventTriggerMetadataFromJSON(
	json: any,
): WorkstreamEventTriggerMetadata {
	return WorkstreamEventTriggerMetadataFromJSONTyped(json, false);
}

export function WorkstreamEventTriggerMetadataFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): WorkstreamEventTriggerMetadata {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
	};
}

export function WorkstreamEventTriggerMetadataToJSON(
	value?: WorkstreamEventTriggerMetadata | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
	};
}
