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
import type { OSDeviceCPUHardwareInformation } from "./OSDeviceCPUHardwareInformation.tsx";
import {
	OSDeviceCPUHardwareInformationFromJSON,
	OSDeviceCPUHardwareInformationToJSON,
} from "./OSDeviceCPUHardwareInformation.tsx";
import type { OSDeviceGPUHardwareInformation } from "./OSDeviceGPUHardwareInformation.tsx";
import {
	OSDeviceGPUHardwareInformationFromJSON,
	OSDeviceGPUHardwareInformationToJSON,
} from "./OSDeviceGPUHardwareInformation.tsx";

/**
 * this will let us know specific hardware information
 * @export
 * @interface OSDeviceHardwareInformation
 */
export interface OSDeviceHardwareInformation {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof OSDeviceHardwareInformation
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {OSDeviceCPUHardwareInformation}
	 * @memberof OSDeviceHardwareInformation
	 */
	cpu?: OSDeviceCPUHardwareInformation;
	/**
	 *
	 * @type {OSDeviceGPUHardwareInformation}
	 * @memberof OSDeviceHardwareInformation
	 */
	gpu?: OSDeviceGPUHardwareInformation;
}

/**
 * Check if a given object implements the OSDeviceHardwareInformation interface.
 */
export function instanceOfOSDeviceHardwareInformation(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function OSDeviceHardwareInformationFromJSON(
	json: any,
): OSDeviceHardwareInformation {
	return OSDeviceHardwareInformationFromJSONTyped(json, false);
}

export function OSDeviceHardwareInformationFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): OSDeviceHardwareInformation {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		cpu: exists(json, "cpu")
			? OSDeviceCPUHardwareInformationFromJSON(json["cpu"])
			: undefined,
		gpu: exists(json, "gpu")
			? OSDeviceGPUHardwareInformationFromJSON(json["gpu"])
			: undefined,
	};
}

export function OSDeviceHardwareInformationToJSON(
	value?: OSDeviceHardwareInformation | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		cpu: OSDeviceCPUHardwareInformationToJSON(value.cpu),
		gpu: OSDeviceGPUHardwareInformationToJSON(value.gpu),
	};
}
