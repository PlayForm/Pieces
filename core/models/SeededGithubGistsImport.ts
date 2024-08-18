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
import type { EmbeddedModelSchema } from "./EmbeddedModelSchema.tsx";
import {
	EmbeddedModelSchemaFromJSON,
	EmbeddedModelSchemaToJSON,
} from "./EmbeddedModelSchema.tsx";

/**
 * This is the body of the /github/gists/import,
 *
 * by default we will look for everything from your private gists, (TODO hook up public gists.)&& get clever
 *
 * currently we will not ensure that this is a good pieces for you but we will just get you the gist and let you do what you want with it(room for improvement, if we want to layer in advanced pieces discovery)
 *
 * For the future, we might want to add a max number of assets that are returned from this.
 * @export
 * @interface SeededGithubGistsImport
 */
export interface SeededGithubGistsImport {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof SeededGithubGistsImport
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * application id.
	 * @type {string}
	 * @memberof SeededGithubGistsImport
	 */
	application: string;
	/**
	 * This will default to false.(ie private), currently not supporting pulling public gists.
	 * @type {boolean}
	 * @memberof SeededGithubGistsImport
	 */
	_public?: boolean;
}

/**
 * Check if a given object implements the SeededGithubGistsImport interface.
 */
export function instanceOfSeededGithubGistsImport(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "application" in value;

	return isInstance;
}

export function SeededGithubGistsImportFromJSON(
	json: any,
): SeededGithubGistsImport {
	return SeededGithubGistsImportFromJSONTyped(json, false);
}

export function SeededGithubGistsImportFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): SeededGithubGistsImport {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		application: json["application"],
		_public: exists(json, "public") ? json["public"] : undefined,
	};
}

export function SeededGithubGistsImportToJSON(
	value?: SeededGithubGistsImport | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		application: value.application,
		public: value._public,
	};
}
