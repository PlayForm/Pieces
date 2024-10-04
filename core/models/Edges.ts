import { NodeFromJSON, NodeToJSON, type Node } from "./Node.tsx";

/**
 *
 * @export
 * @interface Edges
 */
export interface Edges {
	/**
	 *
	 * @type {Array<Node>}
	 * @memberof Edges
	 */
	iterable: Node[];
}

/**
 * Check if a given object implements the Edges interface.
 */
export function instanceOfEdges(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function EdgesFromJSON(json: any): Edges {
	return EdgesFromJSONTyped(json, false);
}

export function EdgesFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Edges {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		iterable: (json["iterable"] as any[]).map(NodeFromJSON),
	};
}

export function EdgesToJSON(value?: Edges | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		iterable: (value.iterable as any[]).map(NodeToJSON),
	};
}
