import {
	ExternalProviderTypeEnumFromJSON,
	ExternalProviderTypeEnumToJSON,
	type ExternalProviderTypeEnum,
} from "./ExternalProviderTypeEnum.tsx";

/**
 * This is the minimum information needed to connect an additional provider.
 * @export
 * @interface SeededExternalProvider
 */
export interface SeededExternalProvider {
	/**
	 *
	 * @type {ExternalProviderTypeEnum}
	 * @memberof SeededExternalProvider
	 */
	type: ExternalProviderTypeEnum;
}

/**
 * Check if a given object implements the SeededExternalProvider interface.
 */
export function instanceOfSeededExternalProvider(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "type" in value;

	return isInstance;
}

export function SeededExternalProviderFromJSON(
	json: any,
): SeededExternalProvider {
	return SeededExternalProviderFromJSONTyped(json, false);
}

export function SeededExternalProviderFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededExternalProvider {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		type: ExternalProviderTypeEnumFromJSON(json["type"]),
	};
}

export function SeededExternalProviderToJSON(
	value?: SeededExternalProvider | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		type: ExternalProviderTypeEnumToJSON(value.type),
	};
}
