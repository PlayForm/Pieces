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

import { exists, mapValues } from "../runtime.ts";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
	type EmbeddedModelSchema,
} from "./EmbeddedModelSchema.tsx";
import {
	FlattenedAnchorsFromJSON,
	FlattenedAnchorsToJSON,
	type FlattenedAnchors,
} from "./FlattenedAnchors.tsx";
import {
	FlattenedAnnotationsFromJSON,
	FlattenedAnnotationsToJSON,
	type FlattenedAnnotations,
} from "./FlattenedAnnotations.tsx";
import {
	FlattenedAssetsFromJSON,
	FlattenedAssetsToJSON,
	type FlattenedAssets,
} from "./FlattenedAssets.tsx";
import {
	FlattenedTagsFromJSON,
	FlattenedTagsToJSON,
	type FlattenedTags,
} from "./FlattenedTags.tsx";
import {
	FlattenedWebsitesFromJSON,
	FlattenedWebsitesToJSON,
	type FlattenedWebsites,
} from "./FlattenedWebsites.tsx";
import {
	FlattenedWorkstreamSummariesFromJSON,
	FlattenedWorkstreamSummariesToJSON,
	type FlattenedWorkstreamSummaries,
} from "./FlattenedWorkstreamSummaries.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
	type GroupedTimestamp,
} from "./GroupedTimestamp.tsx";
import {
	MechanismEnumFromJSON,
	MechanismEnumToJSON,
	type MechanismEnum,
} from "./MechanismEnum.tsx";
import {
	PersonAccessFromJSON,
	PersonAccessToJSON,
	type PersonAccess,
} from "./PersonAccess.tsx";
import {
	PersonModelFromJSON,
	PersonModelToJSON,
	type PersonModel,
} from "./PersonModel.tsx";
import {
	PersonTypeFromJSON,
	PersonTypeToJSON,
	type PersonType,
} from "./PersonType.tsx";
import { ScoreFromJSON, ScoreToJSON, type Score } from "./Score.tsx";

/**
 * if expiration is add then, after the alloted expiration date the user will only have view && comment only permissions. Only present in the case there is a scope such as a defined collection/asset...
 *
 * if asset is passed then that means this person belongs to a scoped asset.
 *
 * NOTE****: annotations here are annotations to describe the person!!! if in the future we want to add who wrote an annotation on and asset or soemthing like that, we will want to add a new field on here called authorships.
 * @export
 * @interface Person
 */
export interface Person {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Person
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof Person
	 */
	id: string;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Person
	 */
	created: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Person
	 */
	updated: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Person
	 */
	deleted?: GroupedTimestamp;
	/**
	 *
	 * @type {PersonType}
	 * @memberof Person
	 */
	type: PersonType;
	/**
	 *
	 * @type {FlattenedAssets}
	 * @memberof Person
	 */
	assets?: FlattenedAssets;
	/**
	 * This is a Map<String, MechanismEnum> where the the key is an asset id.
	 * @type {{ [key: string]: MechanismEnum; }}
	 * @memberof Person
	 */
	mechanisms?: { [key: string]: MechanismEnum };
	/**
	 * This is an optional value that will keep track of the number of times this has been interacted with.
	 * @type {number}
	 * @memberof Person
	 */
	interactions?: number;
	/**
	 * This is a Map<String, PersonAccess> where the the key is an asset id.
	 * @type {{ [key: string]: PersonAccess; }}
	 * @memberof Person
	 */
	access?: { [key: string]: PersonAccess };
	/**
	 *
	 * @type {FlattenedTags}
	 * @memberof Person
	 */
	tags?: FlattenedTags;
	/**
	 *
	 * @type {FlattenedWebsites}
	 * @memberof Person
	 */
	websites?: FlattenedWebsites;
	/**
	 * This is a Map<String, PersonModel>, where the the key is an asset id.
	 * @type {{ [key: string]: PersonModel; }}
	 * @memberof Person
	 */
	models?: { [key: string]: PersonModel };
	/**
	 *
	 * @type {FlattenedAnnotations}
	 * @memberof Person
	 */
	annotations?: FlattenedAnnotations;
	/**
	 *
	 * @type {Score}
	 * @memberof Person
	 */
	score?: Score;
	/**
	 *
	 * @type {FlattenedWorkstreamSummaries}
	 * @memberof Person
	 */
	summaries?: FlattenedWorkstreamSummaries;
	/**
	 *
	 * @type {FlattenedAnchors}
	 * @memberof Person
	 */
	anchors?: FlattenedAnchors;
}

/**
 * Check if a given object implements the Person interface.
 */
export function instanceOfPerson(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "created" in value;
	isInstance = isInstance && "updated" in value;
	isInstance = isInstance && "type" in value;

	return isInstance;
}

export function PersonFromJSON(json: any): Person {
	return PersonFromJSONTyped(json, false);
}

export function PersonFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Person {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		created: GroupedTimestampFromJSON(json["created"]),
		updated: GroupedTimestampFromJSON(json["updated"]),
		deleted: exists(json, "deleted")
			? GroupedTimestampFromJSON(json["deleted"])
			: undefined,
		type: PersonTypeFromJSON(json["type"]),
		assets: exists(json, "assets")
			? FlattenedAssetsFromJSON(json["assets"])
			: undefined,
		mechanisms: exists(json, "mechanisms")
			? mapValues(json["mechanisms"], MechanismEnumFromJSON)
			: undefined,
		interactions: exists(json, "interactions")
			? json["interactions"]
			: undefined,
		access: exists(json, "access")
			? mapValues(json["access"], PersonAccessFromJSON)
			: undefined,
		tags: exists(json, "tags")
			? FlattenedTagsFromJSON(json["tags"])
			: undefined,
		websites: exists(json, "websites")
			? FlattenedWebsitesFromJSON(json["websites"])
			: undefined,
		models: exists(json, "models")
			? mapValues(json["models"], PersonModelFromJSON)
			: undefined,
		annotations: exists(json, "annotations")
			? FlattenedAnnotationsFromJSON(json["annotations"])
			: undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
		summaries: exists(json, "summaries")
			? FlattenedWorkstreamSummariesFromJSON(json["summaries"])
			: undefined,
		anchors: exists(json, "anchors")
			? FlattenedAnchorsFromJSON(json["anchors"])
			: undefined,
	};
}

export function PersonToJSON(value?: Person | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		created: GroupedTimestampToJSON(value.created),
		updated: GroupedTimestampToJSON(value.updated),
		deleted: GroupedTimestampToJSON(value.deleted),
		type: PersonTypeToJSON(value.type),
		assets: FlattenedAssetsToJSON(value.assets),
		mechanisms:
			value.mechanisms === undefined
				? undefined
				: mapValues(value.mechanisms, MechanismEnumToJSON),
		interactions: value.interactions,
		access:
			value.access === undefined
				? undefined
				: mapValues(value.access, PersonAccessToJSON),
		tags: FlattenedTagsToJSON(value.tags),
		websites: FlattenedWebsitesToJSON(value.websites),
		models:
			value.models === undefined
				? undefined
				: mapValues(value.models, PersonModelToJSON),
		annotations: FlattenedAnnotationsToJSON(value.annotations),
		score: ScoreToJSON(value.score),
		summaries: FlattenedWorkstreamSummariesToJSON(value.summaries),
		anchors: FlattenedAnchorsToJSON(value.anchors),
	};
}
