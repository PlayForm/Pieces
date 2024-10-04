import {
	GroupedTimestampFromJSON,
	GroupedTimestampToJSON,
	type GroupedTimestamp,
} from "./GroupedTimestamp.tsx";
import {
	NodeTypeEnumFromJSON,
	NodeTypeEnumToJSON,
	type NodeTypeEnum,
} from "./NodeTypeEnum.tsx";

/**
 * This describes a node within a relationship graph used to related like types. ie asset to asset, tag to tag, ...etc
 *
 * created: is here to let us know when the node was attached.
 *
 * id: this is the the id of the type ie, if the type is Asset the id here points to the asset that this node represents.
 * @export
 * @interface Node
 */
export interface Node {
	/**
	 *
	 * @type {string}
	 * @memberof Node
	 */
	id: string;
	/**
	 *
	 * @type {NodeTypeEnum}
	 * @memberof Node
	 */
	type: NodeTypeEnum;
	/**
	 * This is a boolean to let us know if this node is the root or origin of the relationship graph.
	 * @type {boolean}
	 * @memberof Node
	 */
	root: boolean;
	/**
	 *
	 * @type {GroupedTimestamp}
	 * @memberof Node
	 */
	created: GroupedTimestamp;
}

/**
 * Check if a given object implements the Node interface.
 */
export function instanceOfNode(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "id" in value;
	isInstance = isInstance && "type" in value;
	isInstance = isInstance && "root" in value;
	isInstance = isInstance && "created" in value;

	return isInstance;
}

export function NodeFromJSON(json: any): Node {
	return NodeFromJSONTyped(json, false);
}

export function NodeFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Node {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		id: json["id"],
		type: NodeTypeEnumFromJSON(json["type"]),
		root: json["root"],
		created: GroupedTimestampFromJSON(json["created"]),
	};
}

export function NodeToJSON(value?: Node | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		id: value.id,
		type: NodeTypeEnumToJSON(value.type),
		root: value.root,
		created: GroupedTimestampToJSON(value.created),
	};
}
