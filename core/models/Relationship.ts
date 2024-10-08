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
import type { Edges } from "./Edges.tsx";
import { EdgesFromJSON, EdgesToJSON } from "./Edges.tsx";
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";
import type { Embeddings } from "./Embeddings.tsx";
import { EmbeddingsFromJSON, EmbeddingsToJSON } from "./Embeddings.tsx";
import type { GroupedTimestamp } from "./GroupedTimestamp.tsx";
import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
} from "./GroupedTimestamp.tsx";

/**
 * A relationship expresses a graph of like types, to build a relationship graph.
 *  To get the type of relationship, this is for ie Asset, tag, website, format ...etc, you will need to iterate through the edges and get the root or you can just get the first edge's type as a relationship can only be expressed through same type
 * @export
 * @interface Relationship
 */
export interface Relationship {
	/**
	 *
	 * @type {string}
	 * @memberof Relationship
	 */
	id: string;
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof Relationship
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Embeddings}
	 * @memberof Relationship
	 */
	embeddings: Embeddings;
	/**
	 *
	 * @type {Edges}
	 * @memberof Relationship
	 */
	edges: Edges;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Relationship
	 */
	created: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Relationship
	 */
	updated: GroupedTimestamp;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Relationship
	 */
	deleted?: GroupedTimestamp;
}

/**
 * Check if a given object implements the Relationship interface.
 */
export function instanceOfRelationship(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "embeddings" in value;
	isInstance = isInstance && "edges" in value;
	isInstance = isInstance && "created" in value;
	isInstance = isInstance && "updated" in value;

	return isInstance;
}

export function RelationshipFromJSON(json: any): Relationship {
	return RelationshipFromJSONTyped(json, false);
}

export function RelationshipFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Relationship {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		id: json["id"],
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		embeddings: EmbeddingsFromJSON(json["embeddings"]),
		edges: EdgesFromJSON(json["edges"]),
		created: GroupedTimestampFromJSON(json["created"]),
		updated: GroupedTimestampFromJSON(json["updated"]),
		deleted: exists(json, "deleted")
			? GroupedTimestampFromJSON(json["deleted"])
			: undefined,
	};
}

export function RelationshipToJSON(value?: Relationship | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		id: value.id,
		schema: EmbeddedModelSchemaToJSON(value.schema),
		embeddings: EmbeddingsToJSON(value.embeddings),
		edges: EdgesToJSON(value.edges),
		created: GroupedTimestampToJSON(value.created),
		updated: GroupedTimestampToJSON(value.updated),
		deleted: GroupedTimestampToJSON(value.deleted),
	};
}
