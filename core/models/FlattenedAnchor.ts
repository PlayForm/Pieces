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
	AnchorTypeEnumFromJSON,
	AnchorTypeEnumToJSON,
	type AnchorTypeEnum,
} from "./AnchorTypeEnum.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
	type EmbeddedModelSchema,
} from "./EmbeddedModelSchema.tsx";
import {
	FlattenedAnchorPointsFromJSON,
	FlattenedAnchorPointsToJSON,
	type FlattenedAnchorPoints,
} from "./FlattenedAnchorPoints.tsx";
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
	FlattenedConversationsFromJSON,
	FlattenedConversationsToJSON,
	type FlattenedConversations,
} from "./FlattenedConversations.tsx";
import {
	FlattenedPersonsFromJSON,
	FlattenedPersonsToJSON,
	type FlattenedPersons,
} from "./FlattenedPersons.tsx";
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
import { ScoreFromJSON, ScoreToJSON, type Score } from "./Score.tsx";

/**
 *
 * @export
 * @interface FlattenedAnchor
 */
export interface FlattenedAnchor {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FlattenedAnchor
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof FlattenedAnchor
	 */
	id: string;
	/**
	 *
	 * @type {AnchorTypeEnum}
	 * @memberof FlattenedAnchor
	 */
	type: AnchorTypeEnum;
	/**
	 *
	 * @type {boolean}
	 * @memberof FlattenedAnchor
	 */
	watch?: boolean;
	/**
	 *
	 * @type {FlattenedAnchorPoints}
	 * @memberof FlattenedAnchor
	 */
	points: FlattenedAnchorPoints;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedAnchor
	 */
	created: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedAnchor
	 */
	updated: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedAnchor
	 */
	deleted?: GroupedTimestamp;
	/**
	 *
	 * @type {FlattenedAssets}
	 * @memberof FlattenedAnchor
	 */
	assets?: FlattenedAssets;
	/**
	 *
	 * @type {string}
	 * @memberof FlattenedAnchor
	 */
	name?: string;
	/**
	 *
	 * @type {FlattenedAnnotations}
	 * @memberof FlattenedAnchor
	 */
	annotations?: FlattenedAnnotations;
	/**
	 *
	 * @type {FlattenedConversations}
	 * @memberof FlattenedAnchor
	 */
	conversations?: FlattenedConversations;
	/**
	 *
	 * @type {Score}
	 * @memberof FlattenedAnchor
	 */
	score?: Score;
	/**
	 *
	 * @type {FlattenedWorkstreamSummaries}
	 * @memberof FlattenedAnchor
	 */
	summaries?: FlattenedWorkstreamSummaries;
	/**
	 *
	 * @type {FlattenedPersons}
	 * @memberof FlattenedAnchor
	 */
	persons?: FlattenedPersons;
}

/**
 * Check if a given object implements the FlattenedAnchor interface.
 */
export function instanceOfFlattenedAnchor(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "type" in value;
	isInstance = isInstance && "points" in value;
	isInstance = isInstance && "created" in value;
	isInstance = isInstance && "updated" in value;

	return isInstance;
}

export function FlattenedAnchorFromJSON(json: any): FlattenedAnchor {
	return FlattenedAnchorFromJSONTyped(json, false);
}

export function FlattenedAnchorFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FlattenedAnchor {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		type: AnchorTypeEnumFromJSON(json["type"]),
		watch: exists(json, "watch") ? json["watch"] : undefined,
		points: FlattenedAnchorPointsFromJSON(json["points"]),
		created: GroupedTimestampFromJSON(json["created"]),
		updated: GroupedTimestampFromJSON(json["updated"]),
		deleted: exists(json, "deleted")
			? GroupedTimestampFromJSON(json["deleted"])
			: undefined,
		assets: exists(json, "assets")
			? FlattenedAssetsFromJSON(json["assets"])
			: undefined,
		name: exists(json, "name") ? json["name"] : undefined,
		annotations: exists(json, "annotations")
			? FlattenedAnnotationsFromJSON(json["annotations"])
			: undefined,
		conversations: exists(json, "conversations")
			? FlattenedConversationsFromJSON(json["conversations"])
			: undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
		summaries: exists(json, "summaries")
			? FlattenedWorkstreamSummariesFromJSON(json["summaries"])
			: undefined,
		persons: exists(json, "persons")
			? FlattenedPersonsFromJSON(json["persons"])
			: undefined,
	};
}

export function FlattenedAnchorToJSON(value?: FlattenedAnchor | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		type: AnchorTypeEnumToJSON(value.type),
		watch: value.watch,
		points: FlattenedAnchorPointsToJSON(value.points),
		created: GroupedTimestampToJSON(value.created),
		updated: GroupedTimestampToJSON(value.updated),
		deleted: GroupedTimestampToJSON(value.deleted),
		assets: FlattenedAssetsToJSON(value.assets),
		name: value.name,
		annotations: FlattenedAnnotationsToJSON(value.annotations),
		conversations: FlattenedConversationsToJSON(value.conversations),
		score: ScoreToJSON(value.score),
		summaries: FlattenedWorkstreamSummariesToJSON(value.summaries),
		persons: FlattenedPersonsToJSON(value.persons),
	};
}
