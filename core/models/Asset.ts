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
import type { Activities } from "./Activities.tsx";
import { ActivitiesFromJSON, ActivitiesToJSON } from "./Activities.tsx";
import type { Anchors } from "./Anchors.tsx";
import { AnchorsFromJSON, AnchorsToJSON } from "./Anchors.tsx";
import type { Annotations } from "./Annotations.tsx";
import { AnnotationsFromJSON, AnnotationsToJSON } from "./Annotations.tsx";
import type { Conversations } from "./Conversations.tsx";
import {
	ConversationsFromJSON,
	ConversationsToJSON,
} from "./Conversations.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { Formats } from "./Formats.tsx";
import { FormatsFromJSON, FormatsToJSON } from "./Formats.tsx";
import type { GroupedTimestamp } from "./GroupedTimestamp.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
} from "./GroupedTimestamp.tsx";
import type { Hints } from "./Hints.tsx";
import { HintsFromJSON, HintsToJSON } from "./Hints.tsx";
import type { MechanismEnum } from "./MechanismEnum.tsx";
import {
	MechanismEnumFromJSON,
	MechanismEnumToJSON,
} from "./MechanismEnum.tsx";
import type { Persons } from "./Persons.tsx";
import { PersonsFromJSON, PersonsToJSON } from "./Persons.tsx";
import type { Preview } from "./Preview.tsx";
import { PreviewFromJSON, PreviewToJSON } from "./Preview.tsx";
import type { ReferencedFormat } from "./ReferencedFormat.tsx";
import {
	ReferencedFormatFromJSON,
	ReferencedFormatToJSON,
} from "./ReferencedFormat.tsx";
import type { Score } from "./Score.tsx";
import { ScoreFromJSON, ScoreToJSON } from "./Score.tsx";
import type { Sensitives } from "./Sensitives.tsx";
import { SensitivesFromJSON, SensitivesToJSON } from "./Sensitives.tsx";
import type { Shares } from "./Shares.tsx";
import { SharesFromJSON, SharesToJSON } from "./Shares.tsx";
import type { Tags } from "./Tags.tsx";
import { TagsFromJSON, TagsToJSON } from "./Tags.tsx";
import type { Websites } from "./Websites.tsx";
import { WebsitesFromJSON, WebsitesToJSON } from "./Websites.tsx";
import type { WorkstreamSummaries } from "./WorkstreamSummaries.tsx";
import {
	WorkstreamSummariesFromJSON,
	WorkstreamSummariesToJSON,
} from "./WorkstreamSummaries.tsx";

/**
 * An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats.
 *
 * Below formats, preview, and original CAN to be pollinated (DAG Unsafe) because it is a root node and it's child leaf nodes will prevent cycles agressively.
 * @export
 * @interface Asset
 */
export interface Asset {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Asset
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * The globally available UID representing the asset in the Database, both locally and in the cloud.
	 * @type {string}
	 * @memberof Asset
	 */
	id: string;
	/**
	 *
	 * @type {string}
	 * @memberof Asset
	 */
	name?: string;
	/**
	 *
	 * @type {string}
	 * @memberof Asset
	 */
	creator: string;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Asset
	 */
	created: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Asset
	 */
	updated: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Asset
	 */
	synced?: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Asset
	 */
	deleted?: GroupedTimestamp;
	/**
	 *
	 * @type {Formats}
	 * @memberof Asset
	 */
	formats: Formats;
	/**
	 *
	 * @type {Preview}
	 * @memberof Asset
	 */
	preview: Preview;
	/**
	 *
	 * @type {ReferencedFormat}
	 * @memberof Asset
	 */
	original: ReferencedFormat;
	/**
	 *
	 * @type {Shares}
	 * @memberof Asset
	 */
	shares?: Shares;
	/**
	 *
	 * @type {MechanismEnum}
	 * @memberof Asset
	 */
	mechanism: MechanismEnum;
	/**
	 *
	 * @type {Websites}
	 * @memberof Asset
	 */
	websites?: Websites;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Asset
	 */
	interacted?: GroupedTimestamp;
	/**
	 *
	 * @type {Tags}
	 * @memberof Asset
	 */
	tags?: Tags;
	/**
	 *
	 * @type {Sensitives}
	 * @memberof Asset
	 */
	sensitives?: Sensitives;
	/**
	 *
	 * @type {Persons}
	 * @memberof Asset
	 */
	persons?: Persons;
	/**
	 * This is an optional boolean that will flag that this asset came from a currated collection.
	 * @type {boolean}
	 * @memberof Asset
	 */
	curated?: boolean;
	/**
	 *
	 * @type {boolean}
	 * @memberof Asset
	 */
	discovered?: boolean;
	/**
	 *
	 * @type {Activities}
	 * @memberof Asset
	 */
	activities?: Activities;
	/**
	 *
	 * @type {Score}
	 * @memberof Asset
	 */
	score?: Score;
	/**
	 *
	 * @type {boolean}
	 * @memberof Asset
	 */
	favorited?: boolean;
	/**
	 * This will determine if this is a asset that the user did not explicitly save.
	 * @type {boolean}
	 * @memberof Asset
	 */
	pseudo?: boolean;
	/**
	 *
	 * @type {Annotations}
	 * @memberof Asset
	 */
	annotations?: Annotations;
	/**
	 *
	 * @type {Hints}
	 * @memberof Asset
	 */
	hints?: Hints;
	/**
	 *
	 * @type {Anchors}
	 * @memberof Asset
	 */
	anchors?: Anchors;
	/**
	 *
	 * @type {Conversations}
	 * @memberof Asset
	 */
	conversations?: Conversations;
	/**
	 *
	 * @type {WorkstreamSummaries}
	 * @memberof Asset
	 */
	summaries?: WorkstreamSummaries;
	/**
	 * This will let us know if this asset was generated as a 'demo' snippet
	 * @type {boolean}
	 * @memberof Asset
	 */
	demo?: boolean;
}

/**
 * Check if a given object implements the Asset interface.
 */
export function instanceOfAsset(value: object): boolean {
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

export function AssetFromJSON(json: any): Asset {
	return AssetFromJSONTyped(json, false);
}

export function AssetFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Asset {
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
		formats: FormatsFromJSON(json["formats"]),
		preview: PreviewFromJSON(json["preview"]),
		original: ReferencedFormatFromJSON(json["original"]),
		shares: exists(json, "shares")
			? SharesFromJSON(json["shares"])
			: undefined,
		mechanism: MechanismEnumFromJSON(json["mechanism"]),
		websites: exists(json, "websites")
			? WebsitesFromJSON(json["websites"])
			: undefined,
		interacted: exists(json, "interacted")
			? GroupedTimestampFromJSON(json["interacted"])
			: undefined,
		tags: exists(json, "tags") ? TagsFromJSON(json["tags"]) : undefined,
		sensitives: exists(json, "sensitives")
			? SensitivesFromJSON(json["sensitives"])
			: undefined,
		persons: exists(json, "persons")
			? PersonsFromJSON(json["persons"])
			: undefined,
		curated: exists(json, "curated") ? json["curated"] : undefined,
		discovered: exists(json, "discovered") ? json["discovered"] : undefined,
		activities: exists(json, "activities")
			? ActivitiesFromJSON(json["activities"])
			: undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
		favorited: exists(json, "favorited") ? json["favorited"] : undefined,
		pseudo: exists(json, "pseudo") ? json["pseudo"] : undefined,
		annotations: exists(json, "annotations")
			? AnnotationsFromJSON(json["annotations"])
			: undefined,
		hints: exists(json, "hints") ? HintsFromJSON(json["hints"]) : undefined,
		anchors: exists(json, "anchors")
			? AnchorsFromJSON(json["anchors"])
			: undefined,
		conversations: exists(json, "conversations")
			? ConversationsFromJSON(json["conversations"])
			: undefined,
		summaries: exists(json, "summaries")
			? WorkstreamSummariesFromJSON(json["summaries"])
			: undefined,
		demo: exists(json, "demo") ? json["demo"] : undefined,
	};
}

export function AssetToJSON(value?: Asset | null): any {
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
		formats: FormatsToJSON(value.formats),
		preview: PreviewToJSON(value.preview),
		original: ReferencedFormatToJSON(value.original),
		shares: SharesToJSON(value.shares),
		mechanism: MechanismEnumToJSON(value.mechanism),
		websites: WebsitesToJSON(value.websites),
		interacted: GroupedTimestampToJSON(value.interacted),
		tags: TagsToJSON(value.tags),
		sensitives: SensitivesToJSON(value.sensitives),
		persons: PersonsToJSON(value.persons),
		curated: value.curated,
		discovered: value.discovered,
		activities: ActivitiesToJSON(value.activities),
		score: ScoreToJSON(value.score),
		favorited: value.favorited,
		pseudo: value.pseudo,
		annotations: AnnotationsToJSON(value.annotations),
		hints: HintsToJSON(value.hints),
		anchors: AnchorsToJSON(value.anchors),
		conversations: ConversationsToJSON(value.conversations),
		summaries: WorkstreamSummariesToJSON(value.summaries),
		demo: value.demo,
	};
}
