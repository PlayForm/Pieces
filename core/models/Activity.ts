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
import type { Application } from "./Application.tsx";
import { ApplicationFromJSON, ApplicationToJSON } from "./Application.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { FlattenedAsset } from "./FlattenedAsset.tsx";
import {
	FlattenedAssetFromJSON,
	FlattenedAssetToJSON,
} from "./FlattenedAsset.tsx";
import type { FlattenedFormat } from "./FlattenedFormat.tsx";
import {
	FlattenedFormatFromJSON,
	FlattenedFormatToJSON,
} from "./FlattenedFormat.tsx";
import type { FlattenedUserProfile } from "./FlattenedUserProfile.tsx";
import {
	FlattenedUserProfileFromJSON,
	FlattenedUserProfileToJSON,
} from "./FlattenedUserProfile.tsx";
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
import type { SeededConnectorTracking } from "./SeededConnectorTracking.tsx";
import {
	SeededConnectorTrackingFromJSON,
	SeededConnectorTrackingToJSON,
} from "./SeededConnectorTracking.tsx";

/**
 * consider a rename to Event? That being said if we go with event we need to think about a word to pre/post fix event because it is likely to be a reserved word.
 *
 * additional documentation: https://www.notion.so/getpieces/Activity-4da8de193733441f85f87b510235fb74
 *
 *
 * Notes:
 * - user/asset/format are all optional, NOT required that one of these are present.
 * - if mechanism == internal we will not display to the user.
 *
 * Thoughts around additional properties.
 * - hmm dismissed array here, that is an array of strings, where the string is the userId that dismissed this notification? or we could potentially do it based on the os_ID.
 * -
 *
 * @export
 * @interface Activity
 */
export interface Activity {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Activity
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof Activity
	 */
	id: string;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Activity
	 */
	created: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Activity
	 */
	updated: GroupedTimestamp;
	/**
	 *
	 * @type {SeededConnectorTracking}
	 * @memberof Activity
	 */
	event: SeededConnectorTracking;
	/**
	 *
	 * @type {Application}
	 * @memberof Activity
	 */
	application: Application;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Activity
	 */
	deleted?: GroupedTimestamp;
	/**
	 *
	 * @type {FlattenedAsset}
	 * @memberof Activity
	 */
	asset?: FlattenedAsset;
	/**
	 *
	 * @type {FlattenedUserProfile}
	 * @memberof Activity
	 */
	user?: FlattenedUserProfile;
	/**
	 *
	 * @type {FlattenedFormat}
	 * @memberof Activity
	 */
	format?: FlattenedFormat;
	/**
	 *
	 * @type {MechanismEnum}
	 * @memberof Activity
	 */
	mechanism: MechanismEnum;
	/**
	 * This is the numeric value assigned for this activity event. This number is based off the the type of activity event calcaulated on the server side.DO NOT MODIFY. To see what the value qualilates to, please refer to the function within the common sdk. The number here is based on the fib series. from 0 -> infinity but rn there arnt any value over 8.
	 * @type {number}
	 * @memberof Activity
	 */
	rank?: number;
}

/**
 * Check if a given object implements the Activity interface.
 */
export function instanceOfActivity(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "created" in value;
	isInstance = isInstance && "updated" in value;
	isInstance = isInstance && "event" in value;
	isInstance = isInstance && "application" in value;
	isInstance = isInstance && "mechanism" in value;

	return isInstance;
}

export function ActivityFromJSON(json: any): Activity {
	return ActivityFromJSONTyped(json, false);
}

export function ActivityFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Activity {
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
		event: SeededConnectorTrackingFromJSON(json["event"]),
		application: ApplicationFromJSON(json["application"]),
		deleted: exists(json, "deleted")
			? GroupedTimestampFromJSON(json["deleted"])
			: undefined,
		asset: exists(json, "asset")
			? FlattenedAssetFromJSON(json["asset"])
			: undefined,
		user: exists(json, "user")
			? FlattenedUserProfileFromJSON(json["user"])
			: undefined,
		format: exists(json, "format")
			? FlattenedFormatFromJSON(json["format"])
			: undefined,
		mechanism: MechanismEnumFromJSON(json["mechanism"]),
		rank: exists(json, "rank") ? json["rank"] : undefined,
	};
}

export function ActivityToJSON(value?: Activity | null): any {
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
		event: SeededConnectorTrackingToJSON(value.event),
		application: ApplicationToJSON(value.application),
		deleted: GroupedTimestampToJSON(value.deleted),
		asset: FlattenedAssetToJSON(value.asset),
		user: FlattenedUserProfileToJSON(value.user),
		format: FlattenedFormatToJSON(value.format),
		mechanism: MechanismEnumToJSON(value.mechanism),
		rank: value.rank,
	};
}
