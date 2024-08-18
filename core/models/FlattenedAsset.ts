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
import type { FlattenedActivities } from "./FlattenedActivities.tsx";
import {
	FlattenedActivitiesFromJSON,
	FlattenedActivitiesToJSON,
} from "./FlattenedActivities.tsx";
import type { FlattenedAnchors } from "./FlattenedAnchors.tsx";
import {
	FlattenedAnchorsFromJSON,
	FlattenedAnchorsToJSON,
} from "./FlattenedAnchors.tsx";
import type { FlattenedAnnotations } from "./FlattenedAnnotations.tsx";
import {
	FlattenedAnnotationsFromJSON,
	FlattenedAnnotationsToJSON,
} from "./FlattenedAnnotations.tsx";
import type { FlattenedConversations } from "./FlattenedConversations.tsx";
import {
	FlattenedConversationsFromJSON,
	FlattenedConversationsToJSON,
} from "./FlattenedConversations.tsx";
import type { FlattenedFormats } from "./FlattenedFormats.tsx";
import {
	FlattenedFormatsFromJSON,
	FlattenedFormatsToJSON,
} from "./FlattenedFormats.tsx";
import type { FlattenedHints } from "./FlattenedHints.tsx";
import {
	FlattenedHintsFromJSON,
	FlattenedHintsToJSON,
} from "./FlattenedHints.tsx";
import type { FlattenedPersons } from "./FlattenedPersons.tsx";
import {
	FlattenedPersonsFromJSON,
	FlattenedPersonsToJSON,
} from "./FlattenedPersons.tsx";
import type { FlattenedPreview } from "./FlattenedPreview.tsx";
import {
	FlattenedPreviewFromJSON,
	FlattenedPreviewToJSON,
} from "./FlattenedPreview.tsx";
import type { FlattenedSensitives } from "./FlattenedSensitives.tsx";
import {
	FlattenedSensitivesFromJSON,
	FlattenedSensitivesToJSON,
} from "./FlattenedSensitives.tsx";
import type { FlattenedShares } from "./FlattenedShares.tsx";
import {
	FlattenedSharesFromJSON,
	FlattenedSharesToJSON,
} from "./FlattenedShares.tsx";
import type { FlattenedTags } from "./FlattenedTags.tsx";
import {
	FlattenedTagsFromJSON,
	FlattenedTagsToJSON,
} from "./FlattenedTags.tsx";
import type { FlattenedWebsites } from "./FlattenedWebsites.tsx";
import {
	FlattenedWebsitesFromJSON,
	FlattenedWebsitesToJSON,
} from "./FlattenedWebsites.tsx";
import type { FlattenedWorkstreamSummaries } from "./FlattenedWorkstreamSummaries.tsx";
import {
	FlattenedWorkstreamSummariesFromJSON,
	FlattenedWorkstreamSummariesToJSON,
} from "./FlattenedWorkstreamSummaries.tsx";
import type { GroupedTimestamp } from "./GroupedTimestamp.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
} from "./GroupedTimestamp.tsx";
import type { MechanismEnum } from "./MechanismEnum.tsx";
import {
	MechanismEnumFromJSON,
	MechanismEnumToJSON,
} from "./MechanismEnum.tsx";
import type { Score } from "./Score.tsx";
import { ScoreFromJSON, ScoreToJSON } from "./Score.tsx";

/**
 * An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats. [DAG Compatible - Directed Acyclic Graph Data Structure]
 *
 * FlattenedAsset prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.
 *
 * i.e. FlattenedFormat.preview is Type String, and
 * FlattenedFormat.original is Type String
 * @export
 * @interface FlattenedAsset
 */
export interface FlattenedAsset {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FlattenedAsset
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * The globally available UID representing the asset in the Database, both locally and in the cloud.
	 * @type {string}
	 * @memberof FlattenedAsset
	 */
	id: string;
	/**
	 *
	 * @type {string}
	 * @memberof FlattenedAsset
	 */
	name?: string;
	/**
	 *
	 * @type {string}
	 * @memberof FlattenedAsset
	 */
	creator: string;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedAsset
	 */
	created: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedAsset
	 */
	updated: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedAsset
	 */
	synced?: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedAsset
	 */
	deleted?: GroupedTimestamp;
	/**
	 *
	 * @type {FlattenedFormats}
	 * @memberof FlattenedAsset
	 */
	formats: FlattenedFormats;
	/**
	 *
	 * @type {FlattenedPreview}
	 * @memberof FlattenedAsset
	 */
	preview: FlattenedPreview;
	/**
	 * An identifier of the format that is a reference to the original.
	 * @type {string}
	 * @memberof FlattenedAsset
	 */
	original: string;
	/**
	 *
	 * @type {FlattenedShares}
	 * @memberof FlattenedAsset
	 */
	shares?: FlattenedShares;
	/**
	 *
	 * @type {MechanismEnum}
	 * @memberof FlattenedAsset
	 */
	mechanism: MechanismEnum;
	/**
	 *
	 * @type {FlattenedWebsites}
	 * @memberof FlattenedAsset
	 */
	websites?: FlattenedWebsites;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedAsset
	 */
	interacted?: GroupedTimestamp;
	/**
	 *
	 * @type {FlattenedTags}
	 * @memberof FlattenedAsset
	 */
	tags?: FlattenedTags;
	/**
	 *
	 * @type {FlattenedSensitives}
	 * @memberof FlattenedAsset
	 */
	sensitives?: FlattenedSensitives;
	/**
	 *
	 * @type {FlattenedPersons}
	 * @memberof FlattenedAsset
	 */
	persons?: FlattenedPersons;
	/**
	 * This is an optional boolean that will flag that this asset came from a currated collection.
	 * @type {boolean}
	 * @memberof FlattenedAsset
	 */
	curated?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof FlattenedAsset
	 */
	discovered?: boolean;
	/**
	 *
	 * @type {FlattenedActivities}
	 * @memberof FlattenedAsset
	 */
	activities?: FlattenedActivities;
	/**
	 *
	 * @type {Score}
	 * @memberof FlattenedAsset
	 */
	score?: Score;
	/**
	 *
	 * @type {boolean}
	 * @memberof FlattenedAsset
	 */
	favorited?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof FlattenedAsset
	 */
	pseudo?: boolean;
	/**
	 *
	 * @type {FlattenedAnnotations}
	 * @memberof FlattenedAsset
	 */
	annotations?: FlattenedAnnotations;
	/**
	 *
	 * @type {FlattenedHints}
	 * @memberof FlattenedAsset
	 */
	hints?: FlattenedHints;
	/**
	 *
	 * @type {FlattenedAnchors}
	 * @memberof FlattenedAsset
	 */
	anchors?: FlattenedAnchors;
	/**
	 *
	 * @type {FlattenedConversations}
	 * @memberof FlattenedAsset
	 */
	conversations?: FlattenedConversations;
	/**
	 * This will let us know if this asset was generated as a 'demo' snippet
	 * @type {boolean}
	 * @memberof FlattenedAsset
	 */
	demo?: boolean;
	/**
	 *
	 * @type {FlattenedWorkstreamSummaries}
	 * @memberof FlattenedAsset
	 */
	summaries?: FlattenedWorkstreamSummaries;
}

/**
 * Check if a given object implements the FlattenedAsset interface.
 */
export function instanceOfFlattenedAsset(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "creator" in value;
	isInstance = isInstance && "created" in value;
	isInstance = isInstance && "updated" in value;
	isInstance = isInstance && "formats" in value;
	isInstance = isInstance && "preview" in value;
	isInstance = isInstance && "original" in value;
	isInstance = isInstance && "mechanism" in value;

	return isInstance;
}

export function FlattenedAssetFromJSON(json: any): FlattenedAsset {
	return FlattenedAssetFromJSONTyped(json, false);
}

export function FlattenedAssetFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FlattenedAsset {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		name: exists(json, "name") ? json["name"] : undefined,
		creator: json["creator"],
		created: GroupedTimestampFromJSON(json["created"]),
		updated: GroupedTimestampFromJSON(json["updated"]),
		synced: exists(json, "synced")
			? GroupedTimestampFromJSON(json["synced"])
			: undefined,
		deleted: exists(json, "deleted")
			? GroupedTimestampFromJSON(json["deleted"])
			: undefined,
		formats: FlattenedFormatsFromJSON(json["formats"]),
		preview: FlattenedPreviewFromJSON(json["preview"]),
		original: json["original"],
		shares: exists(json, "shares")
			? FlattenedSharesFromJSON(json["shares"])
			: undefined,
		mechanism: MechanismEnumFromJSON(json["mechanism"]),
		websites: exists(json, "websites")
			? FlattenedWebsitesFromJSON(json["websites"])
			: undefined,
		interacted: exists(json, "interacted")
			? GroupedTimestampFromJSON(json["interacted"])
			: undefined,
		tags: exists(json, "tags")
			? FlattenedTagsFromJSON(json["tags"])
			: undefined,
		sensitives: exists(json, "sensitives")
			? FlattenedSensitivesFromJSON(json["sensitives"])
			: undefined,
		persons: exists(json, "persons")
			? FlattenedPersonsFromJSON(json["persons"])
			: undefined,
		curated: exists(json, "curated") ? json["curated"] : undefined,
		discovered: exists(json, "discovered") ? json["discovered"] : undefined,
		activities: exists(json, "activities")
			? FlattenedActivitiesFromJSON(json["activities"])
			: undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
		favorited: exists(json, "favorited") ? json["favorited"] : undefined,
		pseudo: exists(json, "pseudo") ? json["pseudo"] : undefined,
		annotations: exists(json, "annotations")
			? FlattenedAnnotationsFromJSON(json["annotations"])
			: undefined,
		hints: exists(json, "hints")
			? FlattenedHintsFromJSON(json["hints"])
			: undefined,
		anchors: exists(json, "anchors")
			? FlattenedAnchorsFromJSON(json["anchors"])
			: undefined,
		conversations: exists(json, "conversations")
			? FlattenedConversationsFromJSON(json["conversations"])
			: undefined,
		demo: exists(json, "demo") ? json["demo"] : undefined,
		summaries: exists(json, "summaries")
			? FlattenedWorkstreamSummariesFromJSON(json["summaries"])
			: undefined,
	};
}

export function FlattenedAssetToJSON(value?: FlattenedAsset | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		name: value.name,
		creator: value.creator,
		created: GroupedTimestampToJSON(value.created),
		updated: GroupedTimestampToJSON(value.updated),
		synced: GroupedTimestampToJSON(value.synced),
		deleted: GroupedTimestampToJSON(value.deleted),
		formats: FlattenedFormatsToJSON(value.formats),
		preview: FlattenedPreviewToJSON(value.preview),
		original: value.original,
		shares: FlattenedSharesToJSON(value.shares),
		mechanism: MechanismEnumToJSON(value.mechanism),
		websites: FlattenedWebsitesToJSON(value.websites),
		interacted: GroupedTimestampToJSON(value.interacted),
		tags: FlattenedTagsToJSON(value.tags),
		sensitives: FlattenedSensitivesToJSON(value.sensitives),
		persons: FlattenedPersonsToJSON(value.persons),
		curated: value.curated,
		discovered: value.discovered,
		activities: FlattenedActivitiesToJSON(value.activities),
		score: ScoreToJSON(value.score),
		favorited: value.favorited,
		pseudo: value.pseudo,
		annotations: FlattenedAnnotationsToJSON(value.annotations),
		hints: FlattenedHintsToJSON(value.hints),
		anchors: FlattenedAnchorsToJSON(value.anchors),
		conversations: FlattenedConversationsToJSON(value.conversations),
		demo: value.demo,
		summaries: FlattenedWorkstreamSummariesToJSON(value.summaries),
	};
}
