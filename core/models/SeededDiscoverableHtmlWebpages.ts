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
import type { SeededDiscoverableHtmlWebpage } from "./SeededDiscoverableHtmlWebpage.tsx";
import {
	SeededDiscoverableHtmlWebpageFromJSON,
	SeededDiscoverableHtmlWebpageToJSON,
} from "./SeededDiscoverableHtmlWebpage.tsx";

/**
 *
 * @export
 * @interface SeededDiscoverableHtmlWebpages
 */
export interface SeededDiscoverableHtmlWebpages {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededDiscoverableHtmlWebpages
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<SeededDiscoverableHtmlWebpage>}
	 * @memberof SeededDiscoverableHtmlWebpages
	 */
	iterable: SeededDiscoverableHtmlWebpage[];
	/**
	 * This is the applicaiton Id used to connect to Pieces OS.
	 * @type {string}
	 * @memberof SeededDiscoverableHtmlWebpages
	 */
	application: string;
}

/**
 * Check if a given object implements the SeededDiscoverableHtmlWebpages interface.
 */
export function instanceOfSeededDiscoverableHtmlWebpages(
	value: object,
): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;
	isInstance = isInstance && "application" in value;

	return isInstance;
}

export function SeededDiscoverableHtmlWebpagesFromJSON(
	json: any,
): SeededDiscoverableHtmlWebpages {
	return SeededDiscoverableHtmlWebpagesFromJSONTyped(json, false);
}

export function SeededDiscoverableHtmlWebpagesFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededDiscoverableHtmlWebpages {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(
			SeededDiscoverableHtmlWebpageFromJSON,
		),
		application: json["application"],
	};
}

export function SeededDiscoverableHtmlWebpagesToJSON(
	value?: SeededDiscoverableHtmlWebpages | null,
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
			SeededDiscoverableHtmlWebpageToJSON,
		),
		application: value.application,
	};
}
