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
import type { Backup } from "./Backup.tsx";
import { BackupFromJSON, BackupToJSON } from "./Backup.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { Score } from "./Score.tsx";
import { ScoreFromJSON, ScoreToJSON } from "./Score.tsx";

/**
 * This is a plural model of many Cloud Backups.
 * @export
 * @interface Backups
 */
export interface Backups {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Backups
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<Backup>}
	 * @memberof Backups
	 */
	iterable: Backup[];
	/**
	 * This is a Map<String, int> where the the key is an website id.
	 * @type {{ [key: string]: number; }}
	 * @memberof Backups
	 */
	indices?: { [key: string]: number };
	/**
	 *
	 * @type {Score}
	 * @memberof Backups
	 */
	score?: Score;
}

/**
 * Check if a given object implements the Backups interface.
 */
export function instanceOfBackups(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function BackupsFromJSON(json: any): Backups {
	return BackupsFromJSONTyped(json, false);
}

export function BackupsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Backups {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		iterable: (json["iterable"] as any[]).map(BackupFromJSON),
		indices: exists(json, "indices") ? json["indices"] : undefined,
		score: exists(json, "score") ? ScoreFromJSON(json["score"]) : undefined,
	};
}

export function BackupsToJSON(value?: Backups | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		iterable: (value.iterable as any[]).map(BackupToJSON),
		indices: value.indices,
		score: ScoreToJSON(value.score),
	};
}
