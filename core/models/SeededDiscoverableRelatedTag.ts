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
import type { MechanismEnum } from "./MechanismEnum.tsx";
import {
	MechanismEnumFromJSON,
	MechanismEnumToJSON,
} from "./MechanismEnum.tsx";
import type { TagCategoryEnum } from "./TagCategoryEnum.tsx";
import {
	TagCategoryEnumFromJSON,
	TagCategoryEnumToJSON,
} from "./TagCategoryEnum.tsx";

/**
 *
 * @export
 * @interface SeededDiscoverableRelatedTag
 */
export interface SeededDiscoverableRelatedTag {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededDiscoverableRelatedTag
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * This is the description of the tag.
	 * @type {string}
	 * @memberof SeededDiscoverableRelatedTag
	 */
	text: string;
	/**
	 * this is a uuid that references an asset.
	 * @type {string}
	 * @memberof SeededDiscoverableRelatedTag
	 */
	asset: string;
	/**
	 *
	 * @type {MechanismEnum}
	 * @memberof SeededDiscoverableRelatedTag
	 */
	mechanism?: MechanismEnum;
	/**
	 * (optionally) you can attach a tag to a format. so when you delete a format this tag will get removed from the asset as well.
	 * @type {string}
	 * @memberof SeededDiscoverableRelatedTag
	 */
	format?: string;
	/**
	 *
	 * @type {TagCategoryEnum}
	 * @memberof SeededDiscoverableRelatedTag
	 */
	category?: TagCategoryEnum;
}

/**
 * Check if a given object implements the SeededDiscoverableRelatedTag interface.
 */
export function instanceOfSeededDiscoverableRelatedTag(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "text" in value;
	isInstance = isInstance && "asset" in value;

	return isInstance;
}

export function SeededDiscoverableRelatedTagFromJSON(
	json: any,
): SeededDiscoverableRelatedTag {
	return SeededDiscoverableRelatedTagFromJSONTyped(json, false);
}

export function SeededDiscoverableRelatedTagFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededDiscoverableRelatedTag {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		text: json["text"],
		asset: json["asset"],
		mechanism: exists(json, "mechanism")
			? MechanismEnumFromJSON(json["mechanism"])
			: undefined,
		format: exists(json, "format") ? json["format"] : undefined,
		category: exists(json, "category")
			? TagCategoryEnumFromJSON(json["category"])
			: undefined,
	};
}

export function SeededDiscoverableRelatedTagToJSON(
	value?: SeededDiscoverableRelatedTag | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		text: value.text,
		asset: value.asset,
		mechanism: MechanismEnumToJSON(value.mechanism),
		format: value.format,
		category: TagCategoryEnumToJSON(value.category),
	};
}
