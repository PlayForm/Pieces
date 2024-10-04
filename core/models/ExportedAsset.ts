import {
	FileFormatFromJSON,
	FileFormatToJSON,
	type FileFormat,
} from "./FileFormat.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
	type GroupedTimestamp,
} from "./GroupedTimestamp.tsx";

/**
 * This is a model for a minimum exported version of an asset.
 * @export
 * @interface ExportedAsset
 */
export interface ExportedAsset {
	/**
	 * this is the title of the asset
	 *
	 * @type {string}
	 * @memberof ExportedAsset
	 */
	name: string;
	/**
	 * this is the description of the asset
	 * @type {string}
	 * @memberof ExportedAsset
	 */
	description: string;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof ExportedAsset
	 */
	created: GroupedTimestamp;
	/**
	 *
	 * @type {FileFormat}
	 * @memberof ExportedAsset
	 */
	raw: FileFormat;
}

/**
 * Check if a given object implements the ExportedAsset interface.
 */
export function instanceOfExportedAsset(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "name" in value;
	isInstance = isInstance && "description" in value;
	isInstance = isInstance && "created" in value;
	isInstance = isInstance && "raw" in value;

	return isInstance;
}

export function ExportedAssetFromJSON(json: any): ExportedAsset {
	return ExportedAssetFromJSONTyped(json, false);
}

export function ExportedAssetFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ExportedAsset {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		name: json["name"],
		description: json["description"],
		created: GroupedTimestampFromJSON(json["created"]),
		raw: FileFormatFromJSON(json["raw"]),
	};
}

export function ExportedAssetToJSON(value?: ExportedAsset | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		name: value.name,
		description: value.description,
		created: GroupedTimestampToJSON(value.created),
		raw: FileFormatToJSON(value.raw),
	};
}
