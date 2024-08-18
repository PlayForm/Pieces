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
import type { SensitiveCategoryEnum } from "./SensitiveCategoryEnum.tsx";
import {
	SensitiveCategoryEnumFromJSON,
	SensitiveCategoryEnumToJSON,
} from "./SensitiveCategoryEnum.tsx";
import type { SensitiveMetadata } from "./SensitiveMetadata.tsx";
import {
	SensitiveMetadataFromJSON,
	SensitiveMetadataToJSON,
} from "./SensitiveMetadata.tsx";
import type { SensitiveSeverityEnum } from "./SensitiveSeverityEnum.tsx";
import {
	SensitiveSeverityEnumFromJSON,
	SensitiveSeverityEnumToJSON,
} from "./SensitiveSeverityEnum.tsx";

/**
 * This is the seededAssetSensitive, this does not have an id yet as we will add it on the server side.
 *
 * can optionally pass in our mechanism here, as the default will be manual unless specified.
 *
 * This is different that hte SeededSensitive as this is pre-before the asset has been created.(but added when the asset is created.
 * @export
 * @interface SeededAssetSensitive
 */
export interface SeededAssetSensitive {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededAssetSensitive
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * this is the string representative of the sensative piece of data.
	 * @type {string}
	 * @memberof SeededAssetSensitive
	 */
	text: string;
	/**
	 *
	 * @type {MechanismEnum}
	 * @memberof SeededAssetSensitive
	 */
	mechanism?: MechanismEnum;
	/**
	 *
	 * @type {SensitiveCategoryEnum}
	 * @memberof SeededAssetSensitive
	 */
	category: SensitiveCategoryEnum;
	/**
	 *
	 * @type {SensitiveSeverityEnum}
	 * @memberof SeededAssetSensitive
	 */
	severity: SensitiveSeverityEnum;
	/**
	 *
	 * @type {string}
	 * @memberof SeededAssetSensitive
	 */
	name: string;
	/**
	 *
	 * @type {string}
	 * @memberof SeededAssetSensitive
	 */
	description: string;
	/**
	 *
	 * @type {SensitiveMetadata}
	 * @memberof SeededAssetSensitive
	 */
	metadata?: SensitiveMetadata;
}

/**
 * Check if a given object implements the SeededAssetSensitive interface.
 */
export function instanceOfSeededAssetSensitive(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "text" in value;
	isInstance = isInstance && "category" in value;
	isInstance = isInstance && "severity" in value;
	isInstance = isInstance && "name" in value;
	isInstance = isInstance && "description" in value;

	return isInstance;
}

export function SeededAssetSensitiveFromJSON(json: any): SeededAssetSensitive {
	return SeededAssetSensitiveFromJSONTyped(json, false);
}

export function SeededAssetSensitiveFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededAssetSensitive {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		text: json["text"],
		mechanism: exists(json, "mechanism")
			? MechanismEnumFromJSON(json["mechanism"])
			: undefined,
		category: SensitiveCategoryEnumFromJSON(json["category"]),
		severity: SensitiveSeverityEnumFromJSON(json["severity"]),
		name: json["name"],
		description: json["description"],
		metadata: exists(json, "metadata")
			? SensitiveMetadataFromJSON(json["metadata"])
			: undefined,
	};
}

export function SeededAssetSensitiveToJSON(
	value?: SeededAssetSensitive | null,
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
		mechanism: MechanismEnumToJSON(value.mechanism),
		category: SensitiveCategoryEnumToJSON(value.category),
		severity: SensitiveSeverityEnumToJSON(value.severity),
		name: value.name,
		description: value.description,
		metadata: SensitiveMetadataToJSON(value.metadata),
	};
}
