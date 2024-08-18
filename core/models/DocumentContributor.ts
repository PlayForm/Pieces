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
import type { Classification } from "./Classification.tsx";
import {
	ClassificationFromJSON,
	ClassificationToJSON,
} from "./Classification.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { GroupedTimestamp } from "./GroupedTimestamp.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
} from "./GroupedTimestamp.tsx";
import type { PersonBasicType } from "./PersonBasicType.tsx";
import {
	PersonBasicTypeFromJSON,
	PersonBasicTypeToJSON,
} from "./PersonBasicType.tsx";
import type { TransferableString } from "./TransferableString.tsx";
import {
	TransferableStringFromJSON,
	TransferableStringToJSON,
} from "./TransferableString.tsx";

/**
 * A DocumentContributor is a preseeded representation of a Person
 *
 * This can be used in the case of the browser, or in the IDE
 *
 * If they are apart of an IDE, we can in the future provide git information (IE add a Git object for their commits)
 *
 * person: this is most important part which is the email/name xyz
 * @export
 * @interface DocumentContributor
 */
export interface DocumentContributor {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof DocumentContributor
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Classification}
	 * @memberof DocumentContributor
	 */
	classification?: Classification;
	/**
	 *
	 * @type {TransferableString}
	 * @memberof DocumentContributor
	 */
	value?: TransferableString;
	/**
	 *
	 * @type {PersonBasicType}
	 * @memberof DocumentContributor
	 */
	person: PersonBasicType;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof DocumentContributor
	 */
	updated?: GroupedTimestamp;
}

/**
 * Check if a given object implements the DocumentContributor interface.
 */
export function instanceOfDocumentContributor(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "person" in value;

	return isInstance;
}

export function DocumentContributorFromJSON(json: any): DocumentContributor {
	return DocumentContributorFromJSONTyped(json, false);
}

export function DocumentContributorFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): DocumentContributor {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		classification: exists(json, "classification")
			? ClassificationFromJSON(json["classification"])
			: undefined,
		value: exists(json, "value")
			? TransferableStringFromJSON(json["value"])
			: undefined,
		person: PersonBasicTypeFromJSON(json["person"]),
		updated: exists(json, "updated")
			? GroupedTimestampFromJSON(json["updated"])
			: undefined,
	};
}

export function DocumentContributorToJSON(
	value?: DocumentContributor | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		classification: ClassificationToJSON(value.classification),
		value: TransferableStringToJSON(value.value),
		person: PersonBasicTypeToJSON(value.person),
		updated: GroupedTimestampToJSON(value.updated),
	};
}
