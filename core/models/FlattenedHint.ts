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
	FlattenedAssetsFromJSON,
	FlattenedAssetsToJSON,
	type FlattenedAssets,
} from "./FlattenedAssets.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
	type GroupedTimestamp,
} from "./GroupedTimestamp.tsx";
import {
	HintTypeEnumFromJSON,
	HintTypeEnumToJSON,
	type HintTypeEnum,
} from "./HintTypeEnum.tsx";
import {
	MechanismEnumFromJSON,
	MechanismEnumToJSON,
	type MechanismEnum,
} from "./MechanismEnum.tsx";
import {
	ReferencedModelFromJSON,
	ReferencedModelToJSON,
	type ReferencedModel,
} from "./ReferencedModel.tsx";
import { ScoreFromJSON, ScoreToJSON, type Score } from "./Score.tsx";

/**
 * This is the flattened version of a hint. Ensure that you DO NOT reference the Asset here as you can create an infinite loop within the packaging.
 * @export
 * @interface FlattenedHint
 */
export interface FlattenedHint {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof FlattenedHint
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof FlattenedHint
	 */
	id: string;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedHint
	 */
	created: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedHint
	 */
	updated: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof FlattenedHint
	 */
	deleted?: GroupedTimestamp;
	/**
	 * This is a Map<String, MechanismEnum> where the the key is an asset id.
	 * @type {{ [key: string]: MechanismEnum; }}
	 * @memberof FlattenedHint
	 */
	mechanisms?: { [key: string]: MechanismEnum };
	/**
	 *
	 * @type {FlattenedAssets}
	 * @memberof FlattenedHint
	 */
	assets?: FlattenedAssets;
	/**
	 *
	 * @type {HintTypeEnum}
	 * @memberof FlattenedHint
	 */
	type: HintTypeEnum;
	/**
	 * This is the text of the hint.
	 * @type {string}
	 * @memberof FlattenedHint
	 */
	text: string;
	/**
	 *
	 * @type {ReferencedModel}
	 * @memberof FlattenedHint
	 */
	model?: ReferencedModel;
	/**
	 *
	 * @type {Score}
	 * @memberof FlattenedHint
	 */
	score?: Score;
}

/**
 * Check if a given object implements the FlattenedHint interface.
 */
export function instanceOfFlattenedHint(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "created" in value;
	isInstance = isInstance && "updated" in value;
	isInstance = isInstance && "type" in value;
	isInstance = isInstance && "text" in value;

	return isInstance;
}

export function FlattenedHintFromJSON(json: any): FlattenedHint {
	return FlattenedHintFromJSONTyped(json, false);
}

export function FlattenedHintFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): FlattenedHint {
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
		mechanisms: exists(json, "mechanisms")
			? mapValues(json["mechanisms"], MechanismEnumFromJSON)
			: undefined,
		assets: exists(json, "assets")
			? FlattenedAssetsFromJSON(json["assets"])
			: undefined,
		type: HintTypeEnumFromJSON(json["type"]),
		text: json["text"],
		model: exists(json, "model")
			? ReferencedModelFromJSON(json["model"])
			: undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
	};
}

export function FlattenedHintToJSON(value?: FlattenedHint | null): any {
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
		mechanisms:
			value.mechanisms === undefined
				? undefined
				: mapValues(value.mechanisms, MechanismEnumToJSON),
		assets: FlattenedAssetsToJSON(value.assets),
		type: HintTypeEnumToJSON(value.type),
		text: value.text,
		model: ReferencedModelToJSON(value.model),
		score: ScoreToJSON(value.score),
	};
}
