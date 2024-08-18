/**
 * This is specifically for our allocation server metadata.
 * @export
 * @interface Auth0UserAllocationMetadata
 */
export interface Auth0UserAllocationMetadata {
	/**
	 *
	 * @type {string}
	 * @memberof Auth0UserAllocationMetadata
	 */
	project: string;
	/**
	 *
	 * @type {string}
	 * @memberof Auth0UserAllocationMetadata
	 */
	region: string;
}

/**
 * Check if a given object implements the Auth0UserAllocationMetadata interface.
 */
export function instanceOfAuth0UserAllocationMetadata(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "project" in value;
	isInstance = isInstance && "region" in value;

	return isInstance;
}

export function Auth0UserAllocationMetadataFromJSON(
	json: any,
): Auth0UserAllocationMetadata {
	return Auth0UserAllocationMetadataFromJSONTyped(json, false);
}

export function Auth0UserAllocationMetadataFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Auth0UserAllocationMetadata {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		project: json["project"],
		region: json["region"],
	};
}

export function Auth0UserAllocationMetadataToJSON(
	value?: Auth0UserAllocationMetadata | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		project: value.project,
		region: value.region,
	};
}
