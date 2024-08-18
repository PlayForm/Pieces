import type { Embedding } from "./Embedding.tsx";
import { EmbeddingFromJSON, EmbeddingToJSON } from "./Embedding.tsx";

/**
 *
 * @export
 * @interface Embeddings
 */
export interface Embeddings {
	/**
	 *
	 * @type {Array<Embedding>}
	 * @memberof Embeddings
	 */
	iterable: Embedding[];
}

/**
 * Check if a given object implements the Embeddings interface.
 */
export function instanceOfEmbeddings(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "iterable" in value;

	return isInstance;
}

export function EmbeddingsFromJSON(json: any): Embeddings {
	return EmbeddingsFromJSONTyped(json, false);
}

export function EmbeddingsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): Embeddings {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		iterable: (json["iterable"] as any[]).map(EmbeddingFromJSON),
	};
}

export function EmbeddingsToJSON(value?: Embeddings | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		iterable: (value.iterable as any[]).map(EmbeddingToJSON),
	};
}
