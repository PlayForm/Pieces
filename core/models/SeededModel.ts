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
import type { ByteDescriptor } from "./ByteDescriptor.tsx";
import {
	ByteDescriptorFromJSON,
	ByteDescriptorToJSON,
} from "./ByteDescriptor.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { ExternalMLProviderEnum } from "./ExternalMLProviderEnum.tsx";
import {
	ExternalMLProviderEnumFromJSON,
	ExternalMLProviderEnumToJSON,
} from "./ExternalMLProviderEnum.tsx";
import type { GroupedTimestamp } from "./GroupedTimestamp.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
} from "./GroupedTimestamp.tsx";
import type { ModelFoundationEnum } from "./ModelFoundationEnum.tsx";
import {
	ModelFoundationEnumFromJSON,
	ModelFoundationEnumToJSON,
} from "./ModelFoundationEnum.tsx";
import type { ModelMaxTokens } from "./ModelMaxTokens.tsx";
import {
	ModelMaxTokensFromJSON,
	ModelMaxTokensToJSON,
} from "./ModelMaxTokens.tsx";
import type { ModelTypeEnum } from "./ModelTypeEnum.tsx";
import {
	ModelTypeEnumFromJSON,
	ModelTypeEnumToJSON,
} from "./ModelTypeEnum.tsx";
import type { ModelUsageEnum } from "./ModelUsageEnum.tsx";
import {
	ModelUsageEnumFromJSON,
	ModelUsageEnumToJSON,
} from "./ModelUsageEnum.tsx";

/**
 * This is Precursor to a Model.
 *
 * bytes: here is the size of the model in a file local on your computer.
 * ram: is the amount of ram usage when the model is loaded into memory.
 * @export
 * @interface SeededModel
 */
export interface SeededModel {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededModel
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * this is a version of the model.
	 * @type {string}
	 * @memberof SeededModel
	 */
	version: string;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof SeededModel
	 */
	created: GroupedTimestamp;
	/**
	 * This is an Optional Name of the Model.
	 * @type {string}
	 * @memberof SeededModel
	 */
	name: string;
	/**
	 * An Optional Description of the model itself.
	 * @type {string}
	 * @memberof SeededModel
	 */
	description?: string;
	/**
	 * This will inform the user if this was a model that is hosted in the cloud
	 * @type {boolean}
	 * @memberof SeededModel
	 */
	cloud: boolean;
	/**
	 *
	 * @type {ModelTypeEnum}
	 * @memberof SeededModel
	 */
	type: ModelTypeEnum;
	/**
	 *
	 * @type {ModelUsageEnum}
	 * @memberof SeededModel
	 */
	usage: ModelUsageEnum;
	/**
	 *
	 * @type {ByteDescriptor}
	 * @memberof SeededModel
	 */
	bytes?: ByteDescriptor;
	/**
	 *
	 * @type {ByteDescriptor}
	 * @memberof SeededModel
	 */
	ram?: ByteDescriptor;
	/**
	 * quantization is a string like: q8f16_0,  q4f16_1, etc...
	 * @type {string}
	 * @memberof SeededModel
	 */
	quantization?: string;
	/**
	 *
	 * @type {ModelFoundationEnum}
	 * @memberof SeededModel
	 */
	foundation?: ModelFoundationEnum;
	/**
	 * This is an optional bool to let us know if this model has been downloaded locally.
	 * @type {boolean}
	 * @memberof SeededModel
	 */
	downloaded?: boolean;
	/**
	 * This is the unique model name used to load the model.
	 * @type {string}
	 * @memberof SeededModel
	 */
	unique?: string;
	/**
	 * This is the number of parameters in terms of billions.
	 * @type {number}
	 * @memberof SeededModel
	 */
	parameters?: number | null;
	/**
	 *
	 * @type {ExternalMLProviderEnum}
	 * @memberof SeededModel
	 */
	provider?: ExternalMLProviderEnum;
	/**
	 * This is an optional bool that is optimized for CPU usage.
	 * @type {boolean}
	 * @memberof SeededModel
	 */
	cpu?: boolean;
	/**
	 *
	 * @type {ModelMaxTokens}
	 * @memberof SeededModel
	 */
	maxTokens?: ModelMaxTokens;
	/**
	 * This is reserved to custommly registed models.
	 * @type {boolean}
	 * @memberof SeededModel
	 */
	custom?: boolean;
}

/**
 * Check if a given object implements the SeededModel interface.
 */
export function instanceOfSeededModel(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "version" in value;
	isInstance = isInstance && "created" in value;
	isInstance = isInstance && "name" in value;
	isInstance = isInstance && "cloud" in value;
	isInstance = isInstance && "type" in value;
	isInstance = isInstance && "usage" in value;

	return isInstance;
}

export function SeededModelFromJSON(json: any): SeededModel {
	return SeededModelFromJSONTyped(json, false);
}

export function SeededModelFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededModel {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		version: json["version"],
		created: GroupedTimestampFromJSON(json["created"]),
		name: json["name"],
		description: exists(json, "description")
			? json["description"]
			: undefined,
		cloud: json["cloud"],
		type: ModelTypeEnumFromJSON(json["type"]),
		usage: ModelUsageEnumFromJSON(json["usage"]),
		bytes: exists(json, "bytes")
			? ByteDescriptorFromJSON(json["bytes"])
			: undefined,
		ram: exists(json, "ram")
			? ByteDescriptorFromJSON(json["ram"])
			: undefined,
		quantization: exists(json, "quantization")
			? json["quantization"]
			: undefined,
		foundation: exists(json, "foundation")
			? ModelFoundationEnumFromJSON(json["foundation"])
			: undefined,
		downloaded: exists(json, "downloaded") ? json["downloaded"] : undefined,
		unique: exists(json, "unique") ? json["unique"] : undefined,
		parameters: exists(json, "parameters") ? json["parameters"] : undefined,
		provider: exists(json, "provider")
			? ExternalMLProviderEnumFromJSON(json["provider"])
			: undefined,
		cpu: exists(json, "cpu") ? json["cpu"] : undefined,
		maxTokens: exists(json, "maxTokens")
			? ModelMaxTokensFromJSON(json["maxTokens"])
			: undefined,
		custom: exists(json, "custom") ? json["custom"] : undefined,
	};
}

export function SeededModelToJSON(value?: SeededModel | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		version: value.version,
		created: GroupedTimestampToJSON(value.created),
		name: value.name,
		description: value.description,
		cloud: value.cloud,
		type: ModelTypeEnumToJSON(value.type),
		usage: ModelUsageEnumToJSON(value.usage),
		bytes: ByteDescriptorToJSON(value.bytes),
		ram: ByteDescriptorToJSON(value.ram),
		quantization: value.quantization,
		foundation: ModelFoundationEnumToJSON(value.foundation),
		downloaded: value.downloaded,
		unique: value.unique,
		parameters: value.parameters,
		provider: ExternalMLProviderEnumToJSON(value.provider),
		cpu: value.cpu,
		maxTokens: ModelMaxTokensToJSON(value.maxTokens),
		custom: value.custom,
	};
}
