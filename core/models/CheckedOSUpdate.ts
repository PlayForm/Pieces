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
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
	type GroupedTimestamp,
} from "./GroupedTimestamp.tsx";
import {
	UpdatingStatusEnumFromJSON,
	UpdatingStatusEnumToJSON,
	type UpdatingStatusEnum,
} from "./UpdatingStatusEnum.tsx";

/**
 * This is the model for the progress of the current update of Pieces os.
 *
 * /os/update/check/stream && /os/update/check/
 *
 * we will emit on a progress update
 *
 * updated: is an optional property that will let us know when the update was checked last.
 *
 * NOTE: it is reccommended to use the stream instead of pulling.
 * NOTE: lets think about if we want to have a closing(as well as how we want to handle restarts)
 * @export
 * @interface CheckedOSUpdate
 */
export interface CheckedOSUpdate {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof CheckedOSUpdate
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {UpdatingStatusEnum}
	 * @memberof CheckedOSUpdate
	 */
	status: UpdatingStatusEnum;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof CheckedOSUpdate
	 */
	updated?: GroupedTimestamp;
	/**
	 * Optionally if the update is in progress you will recieve a download percent(from 0-100).
	 * @type {number}
	 * @memberof CheckedOSUpdate
	 */
	percentage?: number | null;
}

/**
 * Check if a given object implements the CheckedOSUpdate interface.
 */
export function instanceOfCheckedOSUpdate(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "status" in value;

	return isInstance;
}

export function CheckedOSUpdateFromJSON(json: any): CheckedOSUpdate {
	return CheckedOSUpdateFromJSONTyped(json, false);
}

export function CheckedOSUpdateFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): CheckedOSUpdate {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		status: UpdatingStatusEnumFromJSON(json["status"]),
		updated: exists(json, "updated")
			? GroupedTimestampFromJSON(json["updated"])
			: undefined,
		percentage: exists(json, "percentage") ? json["percentage"] : undefined,
	};
}

export function CheckedOSUpdateToJSON(value?: CheckedOSUpdate | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		status: UpdatingStatusEnumToJSON(value.status),
		updated: GroupedTimestampToJSON(value.updated),
		percentage: value.percentage,
	};
}
