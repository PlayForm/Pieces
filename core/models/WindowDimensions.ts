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
 * note: this is modeled off of the browsers bounding box DOMRect
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
 * @export
 * @interface WindowDimensions
 */
export interface WindowDimensions {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof WindowDimensions
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {number}
	 * @memberof WindowDimensions
	 */
	bottom: number;
	/**
	 *
	 * @type {number}
	 * @memberof WindowDimensions
	 */
	height: number;
	/**
	 *
	 * @type {number}
	 * @memberof WindowDimensions
	 */
	left: number;
	/**
	 *
	 * @type {number}
	 * @memberof WindowDimensions
	 */
	right: number;
	/**
	 *
	 * @type {number}
	 * @memberof WindowDimensions
	 */
	top: number;
	/**
	 *
	 * @type {number}
	 * @memberof WindowDimensions
	 */
	width: number;
	/**
	 *
	 * @type {number}
	 * @memberof WindowDimensions
	 */
	x: number;
	/**
	 *
	 * @type {number}
	 * @memberof WindowDimensions
	 */
	y: number;
}

/**
 * Check if a given object implements the WindowDimensions interface.
 */
export function instanceOfWindowDimensions(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "bottom" in value;
	isInstance = isInstance && "height" in value;
	isInstance = isInstance && "left" in value;
	isInstance = isInstance && "right" in value;
	isInstance = isInstance && "top" in value;
	isInstance = isInstance && "width" in value;
	isInstance = isInstance && "x" in value;
	isInstance = isInstance && "y" in value;

	return isInstance;
}

export function WindowDimensionsFromJSON(json: any): WindowDimensions {
	return WindowDimensionsFromJSONTyped(json, false);
}

export function WindowDimensionsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): WindowDimensions {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		bottom: json["bottom"],
		height: json["height"],
		left: json["left"],
		right: json["right"],
		top: json["top"],
		width: json["width"],
		x: json["x"],
		y: json["y"],
	};
}

export function WindowDimensionsToJSON(value?: WindowDimensions | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		bottom: value.bottom,
		height: value.height,
		left: value.left,
		right: value.right,
		top: value.top,
		width: value.width,
		x: value.x,
		y: value.y,
	};
}
