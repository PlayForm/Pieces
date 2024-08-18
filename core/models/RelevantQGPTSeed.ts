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
import type { ReferencedAsset } from "./ReferencedAsset.tsx";
import {
	ReferencedAssetFromJSON,
	ReferencedAssetToJSON,
} from "./ReferencedAsset.tsx";
import type { Seed } from "./Seed.tsx";
import { SeedFromJSON, SeedToJSON } from "./Seed.tsx";

/**
 * This is a generic model used, to wrap a seed, as well as give an identifier used to further identifiy this snippet.
 *
 * Seed is optional here because you may just want to provide the id, and not the original seed.
 *
 * id is also optional here as you may provide an id or not here.(however with specific endpoint this ID is a guarentee.)
 * @export
 * @interface RelevantQGPTSeed
 */
export interface RelevantQGPTSeed {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof RelevantQGPTSeed
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof RelevantQGPTSeed
	 */
	id?: string;
	/**
	 *
	 * @type {Seed}
	 * @memberof RelevantQGPTSeed
	 */
	seed?: Seed;
	/**
	 * This is an optional file path
	 * @type {string}
	 * @memberof RelevantQGPTSeed
	 */
	path?: string;
	/**
	 *
	 * @type {ReferencedAsset}
	 * @memberof RelevantQGPTSeed
	 */
	asset?: ReferencedAsset;
}

/**
 * Check if a given object implements the RelevantQGPTSeed interface.
 */
export function instanceOfRelevantQGPTSeed(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function RelevantQGPTSeedFromJSON(json: any): RelevantQGPTSeed {
	return RelevantQGPTSeedFromJSONTyped(json, false);
}

export function RelevantQGPTSeedFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): RelevantQGPTSeed {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: exists(json, "id") ? json["id"] : undefined,
		seed: exists(json, "seed") ? SeedFromJSON(json["seed"]) : undefined,
		path: exists(json, "path") ? json["path"] : undefined,
		asset: exists(json, "asset")
			? ReferencedAssetFromJSON(json["asset"])
			: undefined,
	};
}

export function RelevantQGPTSeedToJSON(value?: RelevantQGPTSeed | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
		seed: SeedToJSON(value.seed),
		path: value.path,
		asset: ReferencedAssetToJSON(value.asset),
	};
}
