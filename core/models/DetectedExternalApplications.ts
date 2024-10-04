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
	DetectedExternalApplicationFromJSON,
	DetectedExternalApplicationToJSON,
	type DetectedExternalApplication,
} from "./DetectedExternalApplication.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
	type EmbeddedModelSchema,
} from "./EmbeddedModelSchema.tsx";

/**
 * This is used as the returnable for the /applications/external && /applications/external/related endpoints.
 *
 * This will return an iterable of Deteched Application a detected Application is an application that is currently installed on your machine.
 *
 * the /applications/external/related endpoint, will return a subset of the applications returned mainly applications that we detect are Pieces Applications that you have yet to install + names of applications where Pieces is coming soon.
 * @export
 * @interface DetectedExternalApplications
 */
export interface DetectedExternalApplications {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof DetectedExternalApplications
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<DetectedExternalApplication>}
	 * @memberof DetectedExternalApplications
	 */
	iterable: DetectedExternalApplication[];
}

/**
 * Check if a given object implements the DetectedExternalApplications interface.
 */
export function instanceOfDetectedExternalApplications(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function DetectedExternalApplicationsFromJSON(
	json: any,
): DetectedExternalApplications {
	return DetectedExternalApplicationsFromJSONTyped(json, false);
}

export function DetectedExternalApplicationsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): DetectedExternalApplications {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(
			DetectedExternalApplicationFromJSON,
		),
	};
}

export function DetectedExternalApplicationsToJSON(
	value?: DetectedExternalApplications | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(
			DetectedExternalApplicationToJSON,
		),
	};
}
