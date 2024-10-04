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
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
	type EmbeddedModelSchema,
} from "./EmbeddedModelSchema.tsx";
import {
	MechanismEnumFromJSON,
	MechanismEnumToJSON,
	type MechanismEnum,
} from "./MechanismEnum.tsx";
import {
	SensitiveCategoryEnumFromJSON,
	SensitiveCategoryEnumToJSON,
	type SensitiveCategoryEnum,
} from "./SensitiveCategoryEnum.tsx";
import {
	SensitiveMetadataFromJSON,
	SensitiveMetadataToJSON,
	type SensitiveMetadata,
} from "./SensitiveMetadata.tsx";
import {
	SensitiveSeverityEnumFromJSON,
	SensitiveSeverityEnumToJSON,
	type SensitiveSeverityEnum,
} from "./SensitiveSeverityEnum.tsx";

/**
 * This is the seededSensitive, this does not have an id yet as we will add it on the server side.
 *
 * can optionally pass in our mechanism here, as the default will be manual unless specified.
 *
 * TODO consider updating these asset,format to referenced Models
 * @export
 * @interface SeededSensitive
 */
export interface SeededSensitive {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededSensitive
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {string}
	 * @memberof SeededSensitive
	 */
	asset: string;
	/**
	 * this is the string representative of the sensative piece of data.
	 * @type {string}
	 * @memberof SeededSensitive
	 */
	text: string;
	/**
	 *
	 * @type {MechanismEnum}
	 * @memberof SeededSensitive
	 */
	mechanism?: MechanismEnum;
	/**
	 *
	 * @type {SensitiveCategoryEnum}
	 * @memberof SeededSensitive
	 */
	category: SensitiveCategoryEnum;
	/**
	 *
	 * @type {SensitiveSeverityEnum}
	 * @memberof SeededSensitive
	 */
	severity: SensitiveSeverityEnum;
	/**
	 *
	 * @type {string}
	 * @memberof SeededSensitive
	 */
	name: string;
	/**
	 *
	 * @type {string}
	 * @memberof SeededSensitive
	 */
	description: string;
	/**
	 *
	 * @type {SensitiveMetadata}
	 * @memberof SeededSensitive
	 */
	metadata?: SensitiveMetadata;
}

/**
 * Check if a given object implements the SeededSensitive interface.
 */
export function instanceOfSeededSensitive(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "asset" in value;
	isInstance = isInstance && "text" in value;
	isInstance = isInstance && "category" in value;
	isInstance = isInstance && "severity" in value;
	isInstance = isInstance && "name" in value;
	isInstance = isInstance && "description" in value;

	return isInstance;
}

export function SeededSensitiveFromJSON(json: any): SeededSensitive {
	return SeededSensitiveFromJSONTyped(json, false);
}

export function SeededSensitiveFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededSensitive {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		asset: json["asset"],
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

export function SeededSensitiveToJSON(value?: SeededSensitive | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		asset: value.asset,
		text: value.text,
		mechanism: MechanismEnumToJSON(value.mechanism),
		category: SensitiveCategoryEnumToJSON(value.category),
		severity: SensitiveSeverityEnumToJSON(value.severity),
		name: value.name,
		description: value.description,
		metadata: SensitiveMetadataToJSON(value.metadata),
	};
}
