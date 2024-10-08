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
import type { OSAppletEnum } from "./OSAppletEnum.tsx";
import { OSAppletEnumFromJSON, OSAppletEnumToJSON } from "./OSAppletEnum.tsx";

/**
 * TODO
 * @export
 * @interface ActiveOSServerApplet
 */
export interface ActiveOSServerApplet {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ActiveOSServerApplet
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {number}
	 * @memberof ActiveOSServerApplet
	 */
	port: number;
	/**
	 *
	 * @type {OSAppletEnum}
	 * @memberof ActiveOSServerApplet
	 */
	type: OSAppletEnum;
}

/**
 * Check if a given object implements the ActiveOSServerApplet interface.
 */
export function instanceOfActiveOSServerApplet(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "port" in value;
	isInstance = isInstance && "type" in value;

	return isInstance;
}

export function ActiveOSServerAppletFromJSON(json: any): ActiveOSServerApplet {
	return ActiveOSServerAppletFromJSONTyped(json, false);
}

export function ActiveOSServerAppletFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ActiveOSServerApplet {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		port: json["port"],
		type: OSAppletEnumFromJSON(json["type"]),
	};
}

export function ActiveOSServerAppletToJSON(
	value?: ActiveOSServerApplet | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		port: value.port,
		type: OSAppletEnumToJSON(value.type),
	};
}
