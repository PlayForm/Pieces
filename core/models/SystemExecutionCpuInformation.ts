/**
 *
 * @export
 * @interface SystemExecutionCpuInformation
 */
export interface SystemExecutionCpuInformation {
	/**
	 * this is the number of cpus
	 * @type {number}
	 * @memberof SystemExecutionCpuInformation
	 */
	count: number;
	/**
	 * this is the brand of cpu
	 * @type {string}
	 * @memberof SystemExecutionCpuInformation
	 */
	brand: string;
	/**
	 *
	 * @type {number}
	 * @memberof SystemExecutionCpuInformation
	 */
	frequency: number;
}

/**
 * Check if a given object implements the SystemExecutionCpuInformation interface.
 */
export function instanceOfSystemExecutionCpuInformation(
	value: object,
): boolean {
	let isInstance = true;
	isInstance = isInstance && "count" in value;
	isInstance = isInstance && "brand" in value;
	isInstance = isInstance && "frequency" in value;

	return isInstance;
}

export function SystemExecutionCpuInformationFromJSON(
	json: any,
): SystemExecutionCpuInformation {
	return SystemExecutionCpuInformationFromJSONTyped(json, false);
}

export function SystemExecutionCpuInformationFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SystemExecutionCpuInformation {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		count: json["count"],
		brand: json["brand"],
		frequency: json["frequency"],
	};
}

export function SystemExecutionCpuInformationToJSON(
	value?: SystemExecutionCpuInformation | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		count: value.count,
		brand: value.brand,
		frequency: value.frequency,
	};
}
