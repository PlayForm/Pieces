import {
	SeededAssetTagFromJSON,
	SeededAssetTagToJSON,
	type SeededAssetTag,
} from "./SeededAssetTag.tsx";

/**
 *
 * @export
 * @interface SeededAssetTags
 */
export interface SeededAssetTags {
	/**
	 *
	 * @type {Array<SeededAssetTag>}
	 * @memberof SeededAssetTags
	 */
	iterable: SeededAssetTag[];
}

/**
 * Check if a given object implements the SeededAssetTags interface.
 */
export function instanceOfSeededAssetTags(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function SeededAssetTagsFromJSON(json: any): SeededAssetTags {
	return SeededAssetTagsFromJSONTyped(json, false);
}

export function SeededAssetTagsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededAssetTags {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		iterable: (json["iterable"] as any[]).map(SeededAssetTagFromJSON),
	};
}

export function SeededAssetTagsToJSON(value?: SeededAssetTags | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		iterable: (value.iterable as any[]).map(SeededAssetTagToJSON),
	};
}
