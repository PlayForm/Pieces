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
import type { GroupedTimestamp } from "./GroupedTimestamp.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
} from "./GroupedTimestamp.tsx";
import type { ReferencedAnnotation } from "./ReferencedAnnotation.tsx";
import {
	ReferencedAnnotationFromJSON,
	ReferencedAnnotationToJSON,
} from "./ReferencedAnnotation.tsx";
import type { ReferencedAsset } from "./ReferencedAsset.tsx";
import {
	ReferencedAssetFromJSON,
	ReferencedAssetToJSON,
} from "./ReferencedAsset.tsx";
import type { ReferencedModel } from "./ReferencedModel.tsx";
import {
	ReferencedModelFromJSON,
	ReferencedModelToJSON,
} from "./ReferencedModel.tsx";

/**
 * This is a PersonSpecific Model. and will let us know for all the assets that get attached to the person if, this person was attached via a model or just attached automatically.
 *
 * explanation here are the reason why a Person was attached to an asset.
 * @export
 * @interface PersonModel
 */
export interface PersonModel {
	/**
	 *
	 * @type {ReferencedAsset}
	 * @memberof PersonModel
	 */
	asset?: ReferencedAsset;
	/**
	 *
	 * @type {ReferencedModel}
	 * @memberof PersonModel
	 */
	model?: ReferencedModel;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof PersonModel
	 */
	deleted?: GroupedTimestamp;
	/**
	 *
	 * @type {ReferencedAnnotation}
	 * @memberof PersonModel
	 */
	explanation?: ReferencedAnnotation;
}

/**
 * Check if a given object implements the PersonModel interface.
 */
export function instanceOfPersonModel(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function PersonModelFromJSON(json: any): PersonModel {
	return PersonModelFromJSONTyped(json, false);
}

export function PersonModelFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): PersonModel {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		asset: exists(json, "asset")
			? ReferencedAssetFromJSON(json["asset"])
			: undefined,
		model: exists(json, "model")
			? ReferencedModelFromJSON(json["model"])
			: undefined,
		deleted: exists(json, "deleted")
			? GroupedTimestampFromJSON(json["deleted"])
			: undefined,
		explanation: exists(json, "explanation")
			? ReferencedAnnotationFromJSON(json["explanation"])
			: undefined,
	};
}

export function PersonModelToJSON(value?: PersonModel | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		asset: ReferencedAssetToJSON(value.asset),
		model: ReferencedModelToJSON(value.model),
		deleted: GroupedTimestampToJSON(value.deleted),
		explanation: ReferencedAnnotationToJSON(value.explanation),
	};
}
