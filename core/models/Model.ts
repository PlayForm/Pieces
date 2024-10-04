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
	ByteDescriptorFromJSON,
	ByteDescriptorToJSON,
	type ByteDescriptor,
} from "./ByteDescriptor.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
	type EmbeddedModelSchema,
} from "./EmbeddedModelSchema.tsx";
import {
	ExternalMLProviderEnumFromJSON,
	ExternalMLProviderEnumToJSON,
	type ExternalMLProviderEnum,
} from "./ExternalMLProviderEnum.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
	type GroupedTimestamp,
} from "./GroupedTimestamp.tsx";
import {
	ModelFoundationEnumFromJSON,
	ModelFoundationEnumToJSON,
	type ModelFoundationEnum,
} from "./ModelFoundationEnum.tsx";
import {
	ModelMaxTokensFromJSON,
	ModelMaxTokensToJSON,
	type ModelMaxTokens,
} from "./ModelMaxTokens.tsx";
import {
	ModelTypeEnumFromJSON,
	ModelTypeEnumToJSON,
	type ModelTypeEnum,
} from "./ModelTypeEnum.tsx";
import {
	ModelUsageEnumFromJSON,
	ModelUsageEnumToJSON,
	type ModelUsageEnum,
} from "./ModelUsageEnum.tsx";

/**
 * This is a Machine Learning Model, that will give readable information about the Machine Learning Model Used.
 * @export
 * @interface Model
 */
export interface Model {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Model
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * uuid
	 *
	 * @type {string}
	 * @memberof Model
	 */
	id: string;
	/**
	 * this is a version of the model.
	 * @type {string}
	 * @memberof Model
	 */
	version: string;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Model
	 */
	created: GroupedTimestamp;
	/**
	 * This is an Optional Name of the Model.
	 * @type {string}
	 * @memberof Model
	 */
	name: string;
	/**
	 * An Optional Description of the model itself.
	 * @type {string}
	 * @memberof Model
	 */
	description?: string;
	/**
	 * This will inform the user if this was a model that is hosted in the cloud
	 * @type {boolean}
	 * @memberof Model
	 */
	cloud: boolean;
	/**
	 *
	 * @type {ModelTypeEnum}
	 * @memberof Model
	 */
	type: ModelTypeEnum;
	/**
	 *
	 * @type {ModelUsageEnum}
	 * @memberof Model
	 */
	usage: ModelUsageEnum;
	/**
	 *
	 * @type {ByteDescriptor}
	 * @memberof Model
	 */
	bytes?: ByteDescriptor;
	/**
	 *
	 * @type {ByteDescriptor}
	 * @memberof Model
	 */
	ram?: ByteDescriptor;
	/**
	 * quantization is a string like: q8f16_0,  q4f16_1, etc...
	 * @type {string}
	 * @memberof Model
	 */
	quantization?: string;
	/**
	 *
	 * @type {ModelFoundationEnum}
	 * @memberof Model
	 */
	foundation?: ModelFoundationEnum;
	/**
	 * This is an optional bool to let us know if this model has been downloaded locally.
	 * @type {boolean}
	 * @memberof Model
	 */
	downloaded?: boolean;
	/**
	 * This is a boolean that represents if the model is loaded into memory.(this is not persisted, and is calculated on the fly.)
	 * @type {boolean}
	 * @memberof Model
	 */
	loaded?: boolean;
	/**
	 * This is the unique model name used to load the model.
	 * @type {string}
	 * @memberof Model
	 */
	unique?: string;
	/**
	 * This is the number of parameters in terms of billions.
	 * @type {number}
	 * @memberof Model
	 */
	parameters?: number | null;
	/**
	 *
	 * @type {ExternalMLProviderEnum}
	 * @memberof Model
	 */
	provider?: ExternalMLProviderEnum;
	/**
	 * This is an optional bool that is optimized for CPU usage.
	 * @type {boolean}
	 * @memberof Model
	 */
	cpu?: boolean;
	/**
	 * This is a calculated property, that will say if this is currently downloading.
	 * @type {boolean}
	 * @memberof Model
	 */
	downloading?: boolean;
	/**
	 *
	 * @type {ModelMaxTokens}
	 * @memberof Model
	 */
	maxTokens?: ModelMaxTokens;
	/**
	 *
	 * @type {boolean}
	 * @memberof Model
	 */
	custom?: boolean;
}

/**
 * Check if a given object implements the Model interface.
 */
export function instanceOfModel(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "version" in value;
	isInstance = isInstance && "created" in value;
	isInstance = isInstance && "name" in value;
	isInstance = isInstance && "cloud" in value;
	isInstance = isInstance && "type" in value;
	isInstance = isInstance && "usage" in value;

	return isInstance;
}

export function ModelFromJSON(json: any): Model {
	return ModelFromJSONTyped(json, false);
}

export function ModelFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Model {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		id: json["id"],
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
		loaded: exists(json, "loaded") ? json["loaded"] : undefined,
		unique: exists(json, "unique") ? json["unique"] : undefined,
		parameters: exists(json, "parameters") ? json["parameters"] : undefined,
		provider: exists(json, "provider")
			? ExternalMLProviderEnumFromJSON(json["provider"])
			: undefined,
		cpu: exists(json, "cpu") ? json["cpu"] : undefined,
		downloading: exists(json, "downloading")
			? json["downloading"]
			: undefined,
		maxTokens: exists(json, "maxTokens")
			? ModelMaxTokensFromJSON(json["maxTokens"])
			: undefined,
		custom: exists(json, "custom") ? json["custom"] : undefined,
	};
}

export function ModelToJSON(value?: Model | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		id: value.id,
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
		loaded: value.loaded,
		unique: value.unique,
		parameters: value.parameters,
		provider: ExternalMLProviderEnumToJSON(value.provider),
		cpu: value.cpu,
		downloading: value.downloading,
		maxTokens: ModelMaxTokensToJSON(value.maxTokens),
		custom: value.custom,
	};
}
