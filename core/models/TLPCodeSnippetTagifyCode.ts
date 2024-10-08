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
 *
 * @export
 * @interface TLPCodeSnippetTagifyCode
 */
export interface TLPCodeSnippetTagifyCode {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof TLPCodeSnippetTagifyCode
	 */
	schema?: EmbeddedModelSchema;
	/**
	 * stringified array of numbers
	 * @type {string}
	 * @memberof TLPCodeSnippetTagifyCode
	 */
	distribution: string;
	/**
	 * stringified array of numbers
	 * @type {string}
	 * @memberof TLPCodeSnippetTagifyCode
	 */
	inferredDistribution: string;
	/**
	 * stringified array of strings
	 * @type {string}
	 * @memberof TLPCodeSnippetTagifyCode
	 */
	tags: string;
	/**
	 * stringified array of strings
	 * @type {string}
	 * @memberof TLPCodeSnippetTagifyCode
	 */
	inferredTags: string;
	/**
	 * this is the model version
	 *
	 * @type {string}
	 * @memberof TLPCodeSnippetTagifyCode
	 */
	model: string;
	/**
	 * This is the version of the file that we are using that contains all the possible tags
	 * @type {string}
	 * @memberof TLPCodeSnippetTagifyCode
	 */
	labelVersion: string;
	/**
	 * this is the minimum score from the model that a tag needs to have to be included in the tags array.
	 * @type {number}
	 * @memberof TLPCodeSnippetTagifyCode
	 */
	threshold: number;
	/**
	 * this is the minimum score from the postprocessing that a tag needs to have to be included in the inferred_tags array.
	 * @type {number}
	 * @memberof TLPCodeSnippetTagifyCode
	 */
	inferredThreshold: number;
	/**
	 * this is the origin in which this asset was created, application(string representation)
	 * @type {string}
	 * @memberof TLPCodeSnippetTagifyCode
	 */
	context: string;
	/**
	 * This is the asset id.
	 * @type {string}
	 * @memberof TLPCodeSnippetTagifyCode
	 */
	asset: string;
}

/**
 * Check if a given object implements the TLPCodeSnippetTagifyCode interface.
 */
export function instanceOfTLPCodeSnippetTagifyCode(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "distribution" in value;
	isInstance = isInstance && "inferredDistribution" in value;
	isInstance = isInstance && "tags" in value;
	isInstance = isInstance && "inferredTags" in value;
	isInstance = isInstance && "model" in value;
	isInstance = isInstance && "labelVersion" in value;
	isInstance = isInstance && "threshold" in value;
	isInstance = isInstance && "inferredThreshold" in value;
	isInstance = isInstance && "context" in value;
	isInstance = isInstance && "asset" in value;

	return isInstance;
}

export function TLPCodeSnippetTagifyCodeFromJSON(
	json: any,
): TLPCodeSnippetTagifyCode {
	return TLPCodeSnippetTagifyCodeFromJSONTyped(json, false);
}

export function TLPCodeSnippetTagifyCodeFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TLPCodeSnippetTagifyCode {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		distribution: json["distribution"],
		inferredDistribution: json["inferred_distribution"],
		tags: json["tags"],
		inferredTags: json["inferred_tags"],
		model: json["model"],
		labelVersion: json["label_version"],
		threshold: json["threshold"],
		inferredThreshold: json["inferred_threshold"],
		context: json["context"],
		asset: json["asset"],
	};
}

export function TLPCodeSnippetTagifyCodeToJSON(
	value?: TLPCodeSnippetTagifyCode | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		distribution: value.distribution,
		inferred_distribution: value.inferredDistribution,
		tags: value.tags,
		inferred_tags: value.inferredTags,
		model: value.model,
		label_version: value.labelVersion,
		threshold: value.threshold,
		inferred_threshold: value.inferredThreshold,
		context: value.context,
		asset: value.asset,
	};
}
