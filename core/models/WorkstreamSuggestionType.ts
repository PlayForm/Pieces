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

/**
 * This is used to map the types of the iterable to given booleans of their respective material types
 * @export
 * @interface WorkstreamSuggestionType
 */
export interface WorkstreamSuggestionType {
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	schema?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	summary?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	asset?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	tag?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	website?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	anchor?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	conversation?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	person?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	seed?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	seeds?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	summaries?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	assets?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	tags?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	websites?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	anchors?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	conversations?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof WorkstreamSuggestionType
	 */
	persons?: boolean;
}

/**
 * Check if a given object implements the WorkstreamSuggestionType interface.
 */
export function instanceOfWorkstreamSuggestionType(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function WorkstreamSuggestionTypeFromJSON(
	json: any,
): WorkstreamSuggestionType {
	return WorkstreamSuggestionTypeFromJSONTyped(json, false);
}

export function WorkstreamSuggestionTypeFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): WorkstreamSuggestionType {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema") ? json["schema"] : undefined,
		summary: exists(json, "summary") ? json["summary"] : undefined,
		asset: exists(json, "asset") ? json["asset"] : undefined,
		tag: exists(json, "tag") ? json["tag"] : undefined,
		website: exists(json, "website") ? json["website"] : undefined,
		anchor: exists(json, "anchor") ? json["anchor"] : undefined,
		conversation: exists(json, "conversation")
			? json["conversation"]
			: undefined,
		person: exists(json, "person") ? json["person"] : undefined,
		seed: exists(json, "seed") ? json["seed"] : undefined,
		seeds: exists(json, "seeds") ? json["seeds"] : undefined,
		summaries: exists(json, "summaries") ? json["summaries"] : undefined,
		assets: exists(json, "assets") ? json["assets"] : undefined,
		tags: exists(json, "tags") ? json["tags"] : undefined,
		websites: exists(json, "websites") ? json["websites"] : undefined,
		anchors: exists(json, "anchors") ? json["anchors"] : undefined,
		conversations: exists(json, "conversations")
			? json["conversations"]
			: undefined,
		persons: exists(json, "persons") ? json["persons"] : undefined,
	};
}

export function WorkstreamSuggestionTypeToJSON(
	value?: WorkstreamSuggestionType | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: value.schema,
		summary: value.summary,
		asset: value.asset,
		tag: value.tag,
		website: value.website,
		anchor: value.anchor,
		conversation: value.conversation,
		person: value.person,
		seed: value.seed,
		seeds: value.seeds,
		summaries: value.summaries,
		assets: value.assets,
		tags: value.tags,
		websites: value.websites,
		anchors: value.anchors,
		conversations: value.conversations,
		persons: value.persons,
	};
}
