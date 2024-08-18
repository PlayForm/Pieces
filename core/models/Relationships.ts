import type { Relationship } from "./Relationship.tsx";
import { RelationshipFromJSON, RelationshipToJSON } from "./Relationship.tsx";

/**
 *
 * @export
 * @interface Relationships
 */
export interface Relationships {
	/**
	 *
	 * @type {Array<Relationship>}
	 * @memberof Relationships
	 */
	iterable: Relationship[];
}

/**
 * Check if a given object implements the Relationships interface.
 */
export function instanceOfRelationships(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function RelationshipsFromJSON(json: any): Relationships {
	return RelationshipsFromJSONTyped(json, false);
}

export function RelationshipsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Relationships {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		iterable: (json["iterable"] as any[]).map(RelationshipFromJSON),
	};
}

export function RelationshipsToJSON(value?: Relationships | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		iterable: (value.iterable as any[]).map(RelationshipToJSON),
	};
}
