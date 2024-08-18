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
import type { QGPTTaskPipelineForCodeCommentation } from "./QGPTTaskPipelineForCodeCommentation.tsx";
import {
	QGPTTaskPipelineForCodeCommentationFromJSON,
	QGPTTaskPipelineForCodeCommentationToJSON,
} from "./QGPTTaskPipelineForCodeCommentation.tsx";
import type { QGPTTaskPipelineForCodeCompletion } from "./QGPTTaskPipelineForCodeCompletion.tsx";
import {
	QGPTTaskPipelineForCodeCompletionFromJSON,
	QGPTTaskPipelineForCodeCompletionToJSON,
} from "./QGPTTaskPipelineForCodeCompletion.tsx";
import type { QGPTTaskPipelineForCodeExplanation } from "./QGPTTaskPipelineForCodeExplanation.tsx";
import {
	QGPTTaskPipelineForCodeExplanationFromJSON,
	QGPTTaskPipelineForCodeExplanationToJSON,
} from "./QGPTTaskPipelineForCodeExplanation.tsx";
import type { QGPTTaskPipelineForCodeFix } from "./QGPTTaskPipelineForCodeFix.tsx";
import {
	QGPTTaskPipelineForCodeFixFromJSON,
	QGPTTaskPipelineForCodeFixToJSON,
} from "./QGPTTaskPipelineForCodeFix.tsx";
import type { QGPTTaskPipelineForCodeModification } from "./QGPTTaskPipelineForCodeModification.tsx";
import {
	QGPTTaskPipelineForCodeModificationFromJSON,
	QGPTTaskPipelineForCodeModificationToJSON,
} from "./QGPTTaskPipelineForCodeModification.tsx";

/**
 * This model is specifically for QGPT Task pipelines, the model is used to group one off tasks for instance fix/explaining/commenting
 * that dont necessarily require a conversation form factor.
 * @export
 * @interface QGPTTaskPipeline
 */
export interface QGPTTaskPipeline {
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof QGPTTaskPipeline
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {QGPTTaskPipelineForCodeExplanation}
	 * @memberof QGPTTaskPipeline
	 */
	codeExplanation?: QGPTTaskPipelineForCodeExplanation;
	/**
	 *
	 * @type {QGPTTaskPipelineForCodeCommentation}
	 * @memberof QGPTTaskPipeline
	 */
	codeCommentation?: QGPTTaskPipelineForCodeCommentation;
	/**
	 *
	 * @type {QGPTTaskPipelineForCodeFix}
	 * @memberof QGPTTaskPipeline
	 */
	codeFix?: QGPTTaskPipelineForCodeFix;
	/**
	 *
	 * @type {QGPTTaskPipelineForCodeModification}
	 * @memberof QGPTTaskPipeline
	 */
	codeModification?: QGPTTaskPipelineForCodeModification;
	/**
	 *
	 * @type {QGPTTaskPipelineForCodeCompletion}
	 * @memberof QGPTTaskPipeline
	 */
	codeCompletion?: QGPTTaskPipelineForCodeCompletion;
}

/**
 * Check if a given object implements the QGPTTaskPipeline interface.
 */
export function instanceOfQGPTTaskPipeline(_value: object): boolean {
	const isInstance = true;

	return isInstance;
}

export function QGPTTaskPipelineFromJSON(json: any): QGPTTaskPipeline {
	return QGPTTaskPipelineFromJSONTyped(json, false);
}

export function QGPTTaskPipelineFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): QGPTTaskPipeline {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		codeExplanation: exists(json, "code_explanation")
			? QGPTTaskPipelineForCodeExplanationFromJSON(
					json["code_explanation"],
				)
			: undefined,
		codeCommentation: exists(json, "code_commentation")
			? QGPTTaskPipelineForCodeCommentationFromJSON(
					json["code_commentation"],
				)
			: undefined,
		codeFix: exists(json, "code_fix")
			? QGPTTaskPipelineForCodeFixFromJSON(json["code_fix"])
			: undefined,
		codeModification: exists(json, "code_modification")
			? QGPTTaskPipelineForCodeModificationFromJSON(
					json["code_modification"],
				)
			: undefined,
		codeCompletion: exists(json, "code_completion")
			? QGPTTaskPipelineForCodeCompletionFromJSON(json["code_completion"])
			: undefined,
	};
}

export function QGPTTaskPipelineToJSON(value?: QGPTTaskPipeline | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		schema: EmbeddedModelSchemaToJSON(value.schema),
		code_explanation: QGPTTaskPipelineForCodeExplanationToJSON(
			value.codeExplanation,
		),
		code_commentation: QGPTTaskPipelineForCodeCommentationToJSON(
			value.codeCommentation,
		),
		code_fix: QGPTTaskPipelineForCodeFixToJSON(value.codeFix),
		code_modification: QGPTTaskPipelineForCodeModificationToJSON(
			value.codeModification,
		),
		code_completion: QGPTTaskPipelineForCodeCompletionToJSON(
			value.codeCompletion,
		),
	};
}
