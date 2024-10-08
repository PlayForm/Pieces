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
import type { GroupedTimestamp } from "./GroupedTimestamp.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
} from "./GroupedTimestamp.tsx";
import type { PlatformEnum } from "./PlatformEnum.tsx";
import { PlatformEnumFromJSON, PlatformEnumToJSON } from "./PlatformEnum.tsx";
import type { ReferencedAnchor } from "./ReferencedAnchor.tsx";
import {
	ReferencedAnchorFromJSON,
	ReferencedAnchorToJSON,
} from "./ReferencedAnchor.tsx";
import type { Score } from "./Score.tsx";
import { ScoreFromJSON, ScoreToJSON } from "./Score.tsx";

/**
 *
 * @export
 * @interface FlattenedAnchorPoint
 */
export interface FlattenedAnchorPoint {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FlattenedAnchorPoint
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof FlattenedAnchorPoint
	 */
	id: string;
	/**
	 *
	 * @type {boolean}
	 * @memberof FlattenedAnchorPoint
	 */
	verified?: boolean;
	/**
	 * This is the text of the path.
	 * @type {string}
	 * @memberof FlattenedAnchorPoint
	 */
	fullpath: string;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedAnchorPoint
	 */
	created: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedAnchorPoint
	 */
	updated: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedAnchorPoint
	 */
	deleted?: GroupedTimestamp;
	/**
	 *
	 * @type {PlatformEnum}
	 * @memberof FlattenedAnchorPoint
	 */
	platform?: PlatformEnum;
	/**
	 *
	 * @type {ReferencedAnchor}
	 * @memberof FlattenedAnchorPoint
	 */
	anchor: ReferencedAnchor;
	/**
	 *
	 * @type {Score}
	 * @memberof FlattenedAnchorPoint
	 */
	score?: Score;
}

/**
 * Check if a given object implements the FlattenedAnchorPoint interface.
 */
export function instanceOfFlattenedAnchorPoint(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "fullpath" in value;
	isInstance = isInstance && "created" in value;
	isInstance = isInstance && "updated" in value;
	isInstance = isInstance && "anchor" in value;

	return isInstance;
}

export function FlattenedAnchorPointFromJSON(json: any): FlattenedAnchorPoint {
	return FlattenedAnchorPointFromJSONTyped(json, false);
}

export function FlattenedAnchorPointFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FlattenedAnchorPoint {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		verified: exists(json, "verified") ? json["verified"] : undefined,
		fullpath: json["fullpath"],
		created: GroupedTimestampFromJSON(json["created"]),
		updated: GroupedTimestampFromJSON(json["updated"]),
		deleted: exists(json, "deleted")
			? GroupedTimestampFromJSON(json["deleted"])
			: undefined,
		platform: exists(json, "platform")
			? PlatformEnumFromJSON(json["platform"])
			: undefined,
		anchor: ReferencedAnchorFromJSON(json["anchor"]),
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
	};
}

export function FlattenedAnchorPointToJSON(
	value?: FlattenedAnchorPoint | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		verified: value.verified,
		fullpath: value.fullpath,
		created: GroupedTimestampToJSON(value.created),
		updated: GroupedTimestampToJSON(value.updated),
		deleted: GroupedTimestampToJSON(value.deleted),
		platform: PlatformEnumToJSON(value.platform),
		anchor: ReferencedAnchorToJSON(value.anchor),
		score: ScoreToJSON(value.score),
	};
}
