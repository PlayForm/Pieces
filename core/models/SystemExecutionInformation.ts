import type { SystemExecutionCpuInformation } from "./SystemExecutionCpuInformation.tsx";
import {
	SystemExecutionCpuInformationFromJSON,
	SystemExecutionCpuInformationToJSON,
} from "./SystemExecutionCpuInformation.tsx";

/**
 * This is system information that we are able to get from the users machine(rust package TBD). TODO potentially pull this out of TLP.
 * @export
 * @interface SystemExecutionInformation
 */
export interface SystemExecutionInformation {
	/**
	 *
	 * @type {number}
	 * @memberof SystemExecutionInformation
	 */
	memory: number;
	/**
	 *
	 * @type {string}
	 * @memberof SystemExecutionInformation
	 */
	os: string;
	/**
	 *
	 * @type {string}
	 * @memberof SystemExecutionInformation
	 */
	kernel: string;
	/**
	 *
	 * @type {SystemExecutionCpuInformation}
	 * @memberof SystemExecutionInformation
	 */
	cpu: SystemExecutionCpuInformation;
}

/**
 * Check if a given object implements the SystemExecutionInformation interface.
 */
export function instanceOfSystemExecutionInformation(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "memory" in value;
	isInstance = isInstance && "os" in value;
	isInstance = isInstance && "kernel" in value;
	isInstance = isInstance && "cpu" in value;

	return isInstance;
}

export function SystemExecutionInformationFromJSON(
	json: any,
): SystemExecutionInformation {
	return SystemExecutionInformationFromJSONTyped(json, false);
}

export function SystemExecutionInformationFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SystemExecutionInformation {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		memory: json["memory"],
		os: json["os"],
		kernel: json["kernel"],
		cpu: SystemExecutionCpuInformationFromJSON(json["cpu"]),
	};
}

export function SystemExecutionInformationToJSON(
	value?: SystemExecutionInformation | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		memory: value.memory,
		os: value.os,
		kernel: value.kernel,
		cpu: SystemExecutionCpuInformationToJSON(value.cpu),
	};
}
