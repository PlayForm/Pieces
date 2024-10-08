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
 * This is specific for all the related materials, like people, tags, websites... xyz
 * @export
 * @interface QGPTAgentRelatedRoutes
 */
export interface QGPTAgentRelatedRoutes {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTAgentRelatedRoutes
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * optional bool, that will say if we reccomend to run related.people on this conversation, IFF set to TRUE.
	 * @type {boolean}
	 * @memberof QGPTAgentRelatedRoutes
	 */
	people?: boolean;
}

/**
 * Check if a given object implements the QGPTAgentRelatedRoutes interface.
 */
export function instanceOfQGPTAgentRelatedRoutes(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function QGPTAgentRelatedRoutesFromJSON(
	json: any,
): QGPTAgentRelatedRoutes {
	return QGPTAgentRelatedRoutesFromJSONTyped(json, false);
}

export function QGPTAgentRelatedRoutesFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTAgentRelatedRoutes {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		people: exists(json, "people") ? json["people"] : undefined,
	};
}

export function QGPTAgentRelatedRoutesToJSON(
	value?: QGPTAgentRelatedRoutes | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		people: value.people,
	};
}
