/**
 * This is the counts of things that users can add.
 * @export
 * @interface TrackedSummaryTotals
 */
export interface TrackedSummaryTotals {
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	assets: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	tags: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	websites: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	persons: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	sensitives: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	shares: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	copilotSends: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	copilotReceives: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	copilotSessions: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	copilotConversations: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	productivityScore: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	searches: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	references: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	reuses: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	anchorFiles: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	anchorFolders: number;
	/**
	 *
	 * @type {number}
	 * @memberof TrackedSummaryTotals
	 */
	isrReports: number;
}

/**
 * Check if a given object implements the TrackedSummaryTotals interface.
 */
export function instanceOfTrackedSummaryTotals(value: object): boolean {
	let isInstance = true;
	isInstance = isInstance && "assets" in value;
	isInstance = isInstance && "tags" in value;
	isInstance = isInstance && "websites" in value;
	isInstance = isInstance && "persons" in value;
	isInstance = isInstance && "sensitives" in value;
	isInstance = isInstance && "shares" in value;
	isInstance = isInstance && "copilotSends" in value;
	isInstance = isInstance && "copilotReceives" in value;
	isInstance = isInstance && "copilotSessions" in value;
	isInstance = isInstance && "copilotConversations" in value;
	isInstance = isInstance && "productivityScore" in value;
	isInstance = isInstance && "searches" in value;
	isInstance = isInstance && "references" in value;
	isInstance = isInstance && "reuses" in value;
	isInstance = isInstance && "anchorFiles" in value;
	isInstance = isInstance && "anchorFolders" in value;
	isInstance = isInstance && "isrReports" in value;

	return isInstance;
}

export function TrackedSummaryTotalsFromJSON(json: any): TrackedSummaryTotals {
	return TrackedSummaryTotalsFromJSONTyped(json, false);
}

export function TrackedSummaryTotalsFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): TrackedSummaryTotals {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		assets: json["assets"],
		tags: json["tags"],
		websites: json["websites"],
		persons: json["persons"],
		sensitives: json["sensitives"],
		shares: json["shares"],
		copilotSends: json["copilot_sends"],
		copilotReceives: json["copilot_receives"],
		copilotSessions: json["copilot_sessions"],
		copilotConversations: json["copilot_conversations"],
		productivityScore: json["productivity_score"],
		searches: json["searches"],
		references: json["references"],
		reuses: json["reuses"],
		anchorFiles: json["anchor_files"],
		anchorFolders: json["anchor_folders"],
		isrReports: json["isr_reports"],
	};
}

export function TrackedSummaryTotalsToJSON(
	value?: TrackedSummaryTotals | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		assets: value.assets,
		tags: value.tags,
		websites: value.websites,
		persons: value.persons,
		sensitives: value.sensitives,
		shares: value.shares,
		copilot_sends: value.copilotSends,
		copilot_receives: value.copilotReceives,
		copilot_sessions: value.copilotSessions,
		copilot_conversations: value.copilotConversations,
		productivity_score: value.productivityScore,
		searches: value.searches,
		references: value.references,
		reuses: value.reuses,
		anchor_files: value.anchorFiles,
		anchor_folders: value.anchorFolders,
		isr_reports: value.isrReports,
	};
}
