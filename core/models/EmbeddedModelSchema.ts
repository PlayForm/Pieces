import {
	EmbeddedModelSchemaSemanticVersionEnumFromJSON,
	EmbeddedModelSchemaSemanticVersionEnumToJSON,
	type EmbeddedModelSchemaSemanticVersionEnum,
} from "./EmbeddedModelSchemaSemanticVersionEnum.tsx";

/**
 * This is a model that will keep track of all of our version related to our models. ie (1) the database migration and (2) the global semantic version of the api.
 * @export
 * @interface EmbeddedModelSchema
 */
export interface EmbeddedModelSchema {
	/**
	 * this is the current database version that this model was used for.
	 * @type {number}
	 * @memberof EmbeddedModelSchema
	 */
	migration: number;
	/**
	 *
	 * @type {EmbeddedModelSchemaSemanticVersionEnum}
	 * @memberof EmbeddedModelSchema
	 */
	semantic: EmbeddedModelSchemaSemanticVersionEnum;
}

/**
 * Check if a given object implements the EmbeddedModelSchema interface.
 */
export function instanceOfEmbeddedModelSchema(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "migration" in value;
	isInstance = isInstance && "semantic" in value;

	return isInstance;
}

export function EmbeddedModelSchemaFromJSON(json: any): EmbeddedModelSchema {
	return EmbeddedModelSchemaFromJSONTyped(json, false);
}

export function EmbeddedModelSchemaFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): EmbeddedModelSchema {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		migration: json["migration"],
		semantic: EmbeddedModelSchemaSemanticVersionEnumFromJSON(
			json["semantic"],
		),
	};
}

export function EmbeddedModelSchemaToJSON(
	value?: EmbeddedModelSchema | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		migration: value.migration,
		semantic: EmbeddedModelSchemaSemanticVersionEnumToJSON(value.semantic),
	};
}
