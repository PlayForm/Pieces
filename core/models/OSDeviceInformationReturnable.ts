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
import type { OSDeviceDependenciesInformation } from "./OSDeviceDependenciesInformation.tsx";
import {
	OSDeviceDependenciesInformationFromJSON,
	OSDeviceDependenciesInformationToJSON,
} from "./OSDeviceDependenciesInformation.tsx";
import type { OSDeviceHardwareInformation } from "./OSDeviceHardwareInformation.tsx";
import {
	OSDeviceHardwareInformationFromJSON,
	OSDeviceHardwareInformationToJSON,
} from "./OSDeviceHardwareInformation.tsx";

/**
 * This is the returnable model for the /os/device/information.
 * @export
 * @interface OSDeviceInformationReturnable
 */
export interface OSDeviceInformationReturnable {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof OSDeviceInformationReturnable
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {OSDeviceDependenciesInformation}
	 * @memberof OSDeviceInformationReturnable
	 */
	dependencies?: OSDeviceDependenciesInformation;
	/**
	 * this is the name of the device
	 * @type {string}
	 * @memberof OSDeviceInformationReturnable
	 */
	name?: string;
	/**
	 * this is the version of the device
	 * @type {string}
	 * @memberof OSDeviceInformationReturnable
	 */
	version?: string;
	/**
	 *
	 * @type {OSDeviceHardwareInformation}
	 * @memberof OSDeviceInformationReturnable
	 */
	hardware?: OSDeviceHardwareInformation;
}

/**
 * Check if a given object implements the OSDeviceInformationReturnable interface.
 */
export function instanceOfOSDeviceInformationReturnable(
	_value: object,
): boolean {
	const isInstance = true;

	return isInstance;
}

export function OSDeviceInformationReturnableFromJSON(
	json: any,
): OSDeviceInformationReturnable {
	return OSDeviceInformationReturnableFromJSONTyped(json, false);
}

export function OSDeviceInformationReturnableFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): OSDeviceInformationReturnable {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		dependencies: exists(json, "dependencies")
			? OSDeviceDependenciesInformationFromJSON(json["dependencies"])
			: undefined,
		name: exists(json, "name") ? json["name"] : undefined,
		version: exists(json, "version") ? json["version"] : undefined,
		hardware: exists(json, "hardware")
			? OSDeviceHardwareInformationFromJSON(json["hardware"])
			: undefined,
	};
}

export function OSDeviceInformationReturnableToJSON(
	value?: OSDeviceInformationReturnable | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		dependencies: OSDeviceDependenciesInformationToJSON(value.dependencies),
		name: value.name,
		version: value.version,
		hardware: OSDeviceHardwareInformationToJSON(value.hardware),
	};
}
