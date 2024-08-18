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
import type { Assets } from "./Assets.tsx";
import { AssetsFromJSON, AssetsToJSON } from "./Assets.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { ReuseSuggestion } from "./ReuseSuggestion.tsx";
import {
	ReuseSuggestionFromJSON,
	ReuseSuggestionToJSON,
} from "./ReuseSuggestion.tsx";
import type { SaveSuggestion } from "./SaveSuggestion.tsx";
import {
	SaveSuggestionFromJSON,
	SaveSuggestionToJSON,
} from "./SaveSuggestion.tsx";
import type { SuggestionTarget } from "./SuggestionTarget.tsx";
import {
	SuggestionTargetFromJSON,
	SuggestionTargetToJSON,
} from "./SuggestionTarget.tsx";

/**
 * This is the model return by the connector's suggest endpoint.
 *
 * Note:
 * assets are the assets that this target was ran against.
 *
 * distribution is the distribution that we generated from comparing the target to the asset's vectors.(currently uuid(assetid) : value that is the difference between the asset and the target) **could potentially make an additional model here that is an array from most to least relevent.
 *
 * *** distribution is required but we are currently unable to reflect that with our current dart generation.
 * @export
 * @interface Suggestion
 */
export interface Suggestion {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Suggestion
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {ReuseSuggestion}
	 * @memberof Suggestion
	 */
	reuse: ReuseSuggestion;
	/**
	 *
	 * @type {SaveSuggestion}
	 * @memberof Suggestion
	 */
	save: SaveSuggestion;
	/**
	 *
	 * @type {SuggestionTarget}
	 * @memberof Suggestion
	 */
	target: SuggestionTarget;
	/**
	 *
	 * @type {Assets}
	 * @memberof Suggestion
	 */
	assets: Assets;
	/**
	 *
	 * @type {{ [key: string]: number; }}
	 * @memberof Suggestion
	 */
	distribution?: { [key: string]: number };
}

/**
 * Check if a given object implements the Suggestion interface.
 */
export function instanceOfSuggestion(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "reuse" in value;
	isInstance = isInstance && "save" in value;
	isInstance = isInstance && "target" in value;
	isInstance = isInstance && "assets" in value;

	return isInstance;
}

export function SuggestionFromJSON(json: any): Suggestion {
	return SuggestionFromJSONTyped(json, false);
}

export function SuggestionFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Suggestion {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		reuse: ReuseSuggestionFromJSON(json["reuse"]),
		save: SaveSuggestionFromJSON(json["save"]),
		target: SuggestionTargetFromJSON(json["target"]),
		assets: AssetsFromJSON(json["assets"]),
		distribution: exists(json, "distribution")
			? json["distribution"]
			: undefined,
	};
}

export function SuggestionToJSON(value?: Suggestion | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		reuse: ReuseSuggestionToJSON(value.reuse),
		save: SaveSuggestionToJSON(value.save),
		target: SuggestionTargetToJSON(value.target),
		assets: AssetsToJSON(value.assets),
		distribution: value.distribution,
	};
}
