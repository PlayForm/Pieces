import {
	TLPDirectedDiscoveryFilterEnumFromJSON,
	TLPDirectedDiscoveryFilterEnumToJSON,
	type TLPDirectedDiscoveryFilterEnum,
} from "./TLPDirectedDiscoveryFilterEnum.tsx";

/**
 * Contains enum which represents code block type
 * @export
 * @interface TLPDirectedDiscoveryFilter
 */
export interface TLPDirectedDiscoveryFilter {
	/**
	 *
	 * @type {TLPDirectedDiscoveryFilterEnum}
	 * @memberof TLPDirectedDiscoveryFilter
	 */
	name: TLPDirectedDiscoveryFilterEnum;
}

/**
 * Check if a given object implements the TLPDirectedDiscoveryFilter interface.
 */
export function instanceOfTLPDirectedDiscoveryFilter(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "name" in value;

	return isInstance;
}

export function TLPDirectedDiscoveryFilterFromJSON(
	json: any,
): TLPDirectedDiscoveryFilter {
	return TLPDirectedDiscoveryFilterFromJSONTyped(json, false);
}

export function TLPDirectedDiscoveryFilterFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TLPDirectedDiscoveryFilter {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		name: TLPDirectedDiscoveryFilterEnumFromJSON(json["name"]),
	};
}

export function TLPDirectedDiscoveryFilterToJSON(
	value?: TLPDirectedDiscoveryFilter | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		name: TLPDirectedDiscoveryFilterEnumToJSON(value.name),
	};
}
