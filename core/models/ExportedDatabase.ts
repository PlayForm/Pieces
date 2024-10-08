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
import type { ExportedDatabaseFormats } from "./ExportedDatabaseFormats.tsx";
import {
	ExportedDatabaseFormatsFromJSON,
	ExportedDatabaseFormatsToJSON,
} from "./ExportedDatabaseFormats.tsx";

/**
 *
 * @export
 * @interface ExportedDatabase
 */
export interface ExportedDatabase {
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	analyses: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	applications: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	assets: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	codeAnalyses: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	files: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	formatMetrics: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	formats: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	fragments: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	imageAnalyses: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	models: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	ocrAnalyses: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	persons: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	sensitives: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	tags: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	websites: number[];
	/**
	 *
	 * @type {ExportedDatabaseFormats}
	 * @memberof ExportedDatabase
	 */
	values: ExportedDatabaseFormats;
	/**
	 * This is the version of your os_server or cloud_server that we we exporting from.
	 * @type {string}
	 * @memberof ExportedDatabase
	 */
	version: string;
	/**
	 *
	 * @type {EmbeddedModelSchema}
	 * @memberof ExportedDatabase
	 */
	schema?: EmbeddedModelSchema;
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	relationships?: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	activities?: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	annotations?: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	hints?: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	anchors?: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	anchorPoints?: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	conversations?: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	conversationMessages?: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	workstreamEvents?: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	ranges?: number[];
	/**
	 *
	 * @type {Array<number>}
	 * @memberof ExportedDatabase
	 */
	workstreamSummaries?: number[];
	/**
	 *
	 * @type {ExportedDatabaseFormats}
	 * @memberof ExportedDatabase
	 */
	messageValues?: ExportedDatabaseFormats;
	/**
	 *
	 * @type {ExportedDatabaseFormats}
	 * @memberof ExportedDatabase
	 */
	workstreamEventValues?: ExportedDatabaseFormats;
}

/**
 * Check if a given object implements the ExportedDatabase interface.
 */
export function instanceOfExportedDatabase(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "analyses" in value;
	isInstance = isInstance && "applications" in value;
	isInstance = isInstance && "assets" in value;
	isInstance = isInstance && "codeAnalyses" in value;
	isInstance = isInstance && "files" in value;
	isInstance = isInstance && "formatMetrics" in value;
	isInstance = isInstance && "formats" in value;
	isInstance = isInstance && "fragments" in value;
	isInstance = isInstance && "imageAnalyses" in value;
	isInstance = isInstance && "models" in value;
	isInstance = isInstance && "ocrAnalyses" in value;
	isInstance = isInstance && "persons" in value;
	isInstance = isInstance && "sensitives" in value;
	isInstance = isInstance && "tags" in value;
	isInstance = isInstance && "websites" in value;
	isInstance = isInstance && "values" in value;
	isInstance = isInstance && "version" in value;

	return isInstance;
}

export function ExportedDatabaseFromJSON(json: any): ExportedDatabase {
	return ExportedDatabaseFromJSONTyped(json, false);
}

export function ExportedDatabaseFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): ExportedDatabase {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		analyses: json["analyses"],
		applications: json["applications"],
		assets: json["assets"],
		codeAnalyses: json["codeAnalyses"],
		files: json["files"],
		formatMetrics: json["formatMetrics"],
		formats: json["formats"],
		fragments: json["fragments"],
		imageAnalyses: json["imageAnalyses"],
		models: json["models"],
		ocrAnalyses: json["ocrAnalyses"],
		persons: json["persons"],
		sensitives: json["sensitives"],
		tags: json["tags"],
		websites: json["websites"],
		values: ExportedDatabaseFormatsFromJSON(json["values"]),
		version: json["version"],
		schema: exists(json, "schema")
			? EmbeddedModelSchemaFromJSON(json["schema"])
			: undefined,
		relationships: exists(json, "relationships")
			? json["relationships"]
			: undefined,
		activities: exists(json, "activities") ? json["activities"] : undefined,
		annotations: exists(json, "annotations")
			? json["annotations"]
			: undefined,
		hints: exists(json, "hints") ? json["hints"] : undefined,
		anchors: exists(json, "anchors") ? json["anchors"] : undefined,
		anchorPoints: exists(json, "anchorPoints")
			? json["anchorPoints"]
			: undefined,
		conversations: exists(json, "conversations")
			? json["conversations"]
			: undefined,
		conversationMessages: exists(json, "conversationMessages")
			? json["conversationMessages"]
			: undefined,
		workstreamEvents: exists(json, "workstreamEvents")
			? json["workstreamEvents"]
			: undefined,
		ranges: exists(json, "ranges") ? json["ranges"] : undefined,
		workstreamSummaries: exists(json, "workstreamSummaries")
			? json["workstreamSummaries"]
			: undefined,
		messageValues: exists(json, "messageValues")
			? ExportedDatabaseFormatsFromJSON(json["messageValues"])
			: undefined,
		workstreamEventValues: exists(json, "workstreamEventValues")
			? ExportedDatabaseFormatsFromJSON(json["workstreamEventValues"])
			: undefined,
	};
}

export function ExportedDatabaseToJSON(value?: ExportedDatabase | null): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		analyses: value.analyses,
		applications: value.applications,
		assets: value.assets,
		codeAnalyses: value.codeAnalyses,
		files: value.files,
		formatMetrics: value.formatMetrics,
		formats: value.formats,
		fragments: value.fragments,
		imageAnalyses: value.imageAnalyses,
		models: value.models,
		ocrAnalyses: value.ocrAnalyses,
		persons: value.persons,
		sensitives: value.sensitives,
		tags: value.tags,
		websites: value.websites,
		values: ExportedDatabaseFormatsToJSON(value.values),
		version: value.version,
		schema: EmbeddedModelSchemaToJSON(value.schema),
		relationships: value.relationships,
		activities: value.activities,
		annotations: value.annotations,
		hints: value.hints,
		anchors: value.anchors,
		anchorPoints: value.anchorPoints,
		conversations: value.conversations,
		conversationMessages: value.conversationMessages,
		workstreamEvents: value.workstreamEvents,
		ranges: value.ranges,
		workstreamSummaries: value.workstreamSummaries,
		messageValues: ExportedDatabaseFormatsToJSON(value.messageValues),
		workstreamEventValues: ExportedDatabaseFormatsToJSON(
			value.workstreamEventValues,
		),
	};
}
