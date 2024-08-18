import type { TLPDirectedDiscoveryFilter } from "./TLPDirectedDiscoveryFilter.tsx";
import {
	TLPDirectedDiscoveryFilterFromJSON,
	TLPDirectedDiscoveryFilterToJSON,
} from "./TLPDirectedDiscoveryFilter.tsx";

/**
 * Contains array of TLPDirectedDiscoveryFilter
 * @export
 * @interface TLPDirectedDiscoveryFilters
 */
export interface TLPDirectedDiscoveryFilters {
	/**
	 * Array that contains filters like class/function/loop
	 * @type {Array<TLPDirectedDiscoveryFilter>}
	 * @memberof TLPDirectedDiscoveryFilters
	 */
	iterable: TLPDirectedDiscoveryFilter[];
}

/**
 * Check if a given object implements the TLPDirectedDiscoveryFilters interface.
 */
export function instanceOfTLPDirectedDiscoveryFilters(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function TLPDirectedDiscoveryFiltersFromJSON(
	json: any,
): TLPDirectedDiscoveryFilters {
	return TLPDirectedDiscoveryFiltersFromJSONTyped(json, false);
}

export function TLPDirectedDiscoveryFiltersFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TLPDirectedDiscoveryFilters {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		iterable: (json["iterable"] as any[]).map(
			TLPDirectedDiscoveryFilterFromJSON,
		),
	};
}

export function TLPDirectedDiscoveryFiltersToJSON(
	value?: TLPDirectedDiscoveryFilters | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		iterable: (value.iterable as any[]).map(
			TLPDirectedDiscoveryFilterToJSON,
		),
	};
}
