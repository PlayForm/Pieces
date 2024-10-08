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
import type { AccessEnum } from "./AccessEnum.tsx";
import { AccessEnumFromJSON, AccessEnumToJSON } from "./AccessEnum.tsx";
import type { Accessors } from "./Accessors.tsx";
import { AccessorsFromJSON, AccessorsToJSON } from "./Accessors.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { FlattenedAssets } from "./FlattenedAssets.tsx";
import {
	FlattenedAssetsFromJSON,
	FlattenedAssetsToJSON,
} from "./FlattenedAssets.tsx";
import type { FlattenedDistributions } from "./FlattenedDistributions.tsx";
import {
	FlattenedDistributionsFromJSON,
	FlattenedDistributionsToJSON,
} from "./FlattenedDistributions.tsx";
import type { GroupedTimestamp } from "./GroupedTimestamp.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
} from "./GroupedTimestamp.tsx";
import type { Score } from "./Score.tsx";
import { ScoreFromJSON, ScoreToJSON } from "./Score.tsx";

/**
 * This is a dag safe version of the Share.
 *
 * if user is undefined && access is public then we have an asset that is publicly available.
 * @export
 * @interface FlattenedShare
 */
export interface FlattenedShare {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FlattenedShare
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * This references the share it self.
	 * @type {string}
	 * @memberof FlattenedShare
	 */
	id: string;
	/**
	 * this is the asset id on the flattened share.
	 * @type {string}
	 * @memberof FlattenedShare
	 */
	asset?: string;
	/**
	 * this is the uuid of the user that the share is created for.
	 * @type {string}
	 * @memberof FlattenedShare
	 */
	user?: string;
	/**
	 * this is the prebuilt link.
	 * @type {string}
	 * @memberof FlattenedShare
	 */
	link: string;
	/**
	 *
	 * @type {AccessEnum}
	 * @memberof FlattenedShare
	 */
	access: AccessEnum;
	/**
	 *
	 * @type {Accessors}
	 * @memberof FlattenedShare
	 */
	accessors: Accessors;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedShare
	 */
	created: GroupedTimestamp;
	/**
	 * This is a shortened version of our uuid.
	 * @type {string}
	 * @memberof FlattenedShare
	 */
	_short: string;
	/**
	 *
	 * @type {string}
	 * @memberof FlattenedShare
	 */
	name?: string;
	/**
	 *
	 * @type {FlattenedAssets}
	 * @memberof FlattenedShare
	 */
	assets?: FlattenedAssets;
	/**
	 *
	 * @type {FlattenedDistributions}
	 * @memberof FlattenedShare
	 */
	distributions?: FlattenedDistributions;
	/**
	 *
	 * @type {Score}
	 * @memberof FlattenedShare
	 */
	score?: Score;
}

/**
 * Check if a given object implements the FlattenedShare interface.
 */
export function instanceOfFlattenedShare(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "link" in value;
	isInstance = isInstance && "access" in value;
	isInstance = isInstance && "accessors" in value;
	isInstance = isInstance && "created" in value;
	isInstance = isInstance && "_short" in value;

	return isInstance;
}

export function FlattenedShareFromJSON(json: any): FlattenedShare {
	return FlattenedShareFromJSONTyped(json, false);
}

export function FlattenedShareFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FlattenedShare {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
		asset: exists(json, "asset") ? json["asset"] : undefined,
		user: exists(json, "user") ? json["user"] : undefined,
		link: json["link"],
		access: AccessEnumFromJSON(json["access"]),
		accessors: AccessorsFromJSON(json["accessors"]),
		created: GroupedTimestampFromJSON(json["created"]),
		_short: json["short"],
		name: exists(json, "name") ? json["name"] : undefined,
		assets: exists(json, "assets")
			? FlattenedAssetsFromJSON(json["assets"])
			: undefined,
		distributions: exists(json, "distributions")
			? FlattenedDistributionsFromJSON(json["distributions"])
			: undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
	};
}

export function FlattenedShareToJSON(value?: FlattenedShare | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		asset: value.asset,
		user: value.user,
		link: value.link,
		access: AccessEnumToJSON(value.access),
		accessors: AccessorsToJSON(value.accessors),
		created: GroupedTimestampToJSON(value.created),
		short: value._short,
		name: value.name,
		assets: FlattenedAssetsToJSON(value.assets),
		distributions: FlattenedDistributionsToJSON(value.distributions),
		score: ScoreToJSON(value.score),
	};
}
