/**
 *
 * @export
 * @interface GraphicalOCRDescriptiveStatisticsConfidence
 */
export interface GraphicalOCRDescriptiveStatisticsConfidence {
	/**
	 *
	 * @type {string}
	 * @memberof GraphicalOCRDescriptiveStatisticsConfidence
	 */
	mean: string;
}

/**
 * Check if a given object implements the GraphicalOCRDescriptiveStatisticsConfidence interface.
 */
export function instanceOfGraphicalOCRDescriptiveStatisticsConfidence(
	value: object,
): boolean {
	let isInstance = true;
	isInstance = isInstance && "mean" in value;

	return isInstance;
}

export function GraphicalOCRDescriptiveStatisticsConfidenceFromJSON(
	json: any,
): GraphicalOCRDescriptiveStatisticsConfidence {
	return GraphicalOCRDescriptiveStatisticsConfidenceFromJSONTyped(
		json,
		false,
	);
}

export function GraphicalOCRDescriptiveStatisticsConfidenceFromJSONTyped(
	json: any,
	_ignoreDiscriminator: boolean,
): GraphicalOCRDescriptiveStatisticsConfidence {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		mean: json["mean"],
	};
}

export function GraphicalOCRDescriptiveStatisticsConfidenceToJSON(
	value?: GraphicalOCRDescriptiveStatisticsConfidence | null,
): any {
	if (value === undefined) {
		return undefined;
	}
	if (value === null) {
		return null;
	}
	return {
		mean: value.mean,
	};
}
