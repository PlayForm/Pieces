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
import type { FlattenedWebsite } from "./FlattenedWebsite.tsx";
import {
	FlattenedWebsiteFromJSON,
	FlattenedWebsiteToJSON,
} from "./FlattenedWebsite.tsx";

/**
 *
 * @export
 * @interface ReferencedWebsite
 */
export interface ReferencedWebsite {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ReferencedWebsite
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof ReferencedWebsite
	 */
	id: string;
	/**
	 *
	 * @type {FlattenedWebsite}
	 * @memberof ReferencedWebsite
	 */
	reference?: FlattenedWebsite;
}

/**
 * Check if a given object implements the ReferencedWebsite interface.
 */
export function instanceOfReferencedWebsite(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;

	return isInstance;
}

export function ReferencedWebsiteFromJSON(json: any): ReferencedWebsite {
	return ReferencedWebsiteFromJSONTyped(json, false);
}

export function ReferencedWebsiteFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ReferencedWebsite {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		reference: exists(json, "reference")
			? FlattenedWebsiteFromJSON(json["reference"])
			: undefined,
	};
}

export function ReferencedWebsiteToJSON(value?: ReferencedWebsite | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		reference: FlattenedWebsiteToJSON(value.reference),
	};
}
