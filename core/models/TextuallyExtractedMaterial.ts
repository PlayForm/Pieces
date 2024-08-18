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
import type { FlattenedAnchors } from "./FlattenedAnchors.tsx";
import {
	FlattenedAnchorsFromJSON,
	FlattenedAnchorsToJSON,
} from "./FlattenedAnchors.tsx";
import type { FlattenedPersons } from "./FlattenedPersons.tsx";
import {
	FlattenedPersonsFromJSON,
	FlattenedPersonsToJSON,
} from "./FlattenedPersons.tsx";
import type { FlattenedWebsites } from "./FlattenedWebsites.tsx";
import {
	FlattenedWebsitesFromJSON,
	FlattenedWebsitesToJSON,
} from "./FlattenedWebsites.tsx";
import type { Seeds } from "./Seeds.tsx";
import { SeedsFromJSON, SeedsToJSON } from "./Seeds.tsx";
import type { TextLocation } from "./TextLocation.tsx";
import { TextLocationFromJSON, TextLocationToJSON } from "./TextLocation.tsx";

/**
 * This is an extraction,
 * this was a person/website/anchor that was extracted
 *
 * this will return the text location where this was found within the extraction.
 *
 * as well return the material itself that was extracted.
 *
 * Note:
 * - seeds: will only be extracted people if provided, because the website/anchors will be created if extracted.
 * - basically only thing that is different about the extracted people, if that if we extract a person that was not already saved,
 *   then we will not save them, however if there are related people then we will add them as well.
 * @export
 * @interface TextuallyExtractedMaterial
 */
export interface TextuallyExtractedMaterial {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof TextuallyExtractedMaterial
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {TextLocation}
	 * @memberof TextuallyExtractedMaterial
	 */
	match: TextLocation;
	/**
	 *
	 * @type {FlattenedWebsites}
	 * @memberof TextuallyExtractedMaterial
	 */
	websites?: FlattenedWebsites;
	/**
	 *
	 * @type {FlattenedAnchors}
	 * @memberof TextuallyExtractedMaterial
	 */
	anchors?: FlattenedAnchors;
	/**
	 *
	 * @type {FlattenedPersons}
	 * @memberof TextuallyExtractedMaterial
	 */
	persons?: FlattenedPersons;
	/**
	 *
	 * @type {Seeds}
	 * @memberof TextuallyExtractedMaterial
	 */
	seeds?: Seeds;
}

/**
 * Check if a given object implements the TextuallyExtractedMaterial interface.
 */
export function instanceOfTextuallyExtractedMaterial(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "match" in value;

	return isInstance;
}

export function TextuallyExtractedMaterialFromJSON(
	json: any,
): TextuallyExtractedMaterial {
	return TextuallyExtractedMaterialFromJSONTyped(json, false);
}

export function TextuallyExtractedMaterialFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TextuallyExtractedMaterial {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		match: TextLocationFromJSON(json["match"]),
		websites: exists(json, "websites")
			? FlattenedWebsitesFromJSON(json["websites"])
			: undefined,
		anchors: exists(json, "anchors")
			? FlattenedAnchorsFromJSON(json["anchors"])
			: undefined,
		persons: exists(json, "persons")
			? FlattenedPersonsFromJSON(json["persons"])
			: undefined,
		seeds: exists(json, "seeds") ? SeedsFromJSON(json["seeds"]) : undefined,
	};
}

export function TextuallyExtractedMaterialToJSON(
	value?: TextuallyExtractedMaterial | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		match: TextLocationToJSON(value.match),
		websites: FlattenedWebsitesToJSON(value.websites),
		anchors: FlattenedAnchorsToJSON(value.anchors),
		persons: FlattenedPersonsToJSON(value.persons),
		seeds: SeedsToJSON(value.seeds),
	};
}
