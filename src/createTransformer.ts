import { AspectBuilder, cleanOrgTitle } from "@magda/connector-sdk";
import CsvTransformer from "./CsvTransformer";

import * as fuzzy from "./fuzzyMatch";
import * as dates from "./dates";

export interface CreateTransformerOptions {
    id: string;
    name: string;
    sourceUrl: string;
    datasetAspectBuilders: AspectBuilder[];
    distributionAspectBuilders: AspectBuilder[];
    organizationAspectBuilders: AspectBuilder[];
    tenantId: number;
}

export default function createTransformer({
    id,
    name,
    sourceUrl,
    datasetAspectBuilders,
    distributionAspectBuilders,
    organizationAspectBuilders,
    tenantId
}: CreateTransformerOptions) {
    return new CsvTransformer({
        sourceId: id,
        datasetAspectBuilders: datasetAspectBuilders,
        distributionAspectBuilders: distributionAspectBuilders,
        organizationAspectBuilders: organizationAspectBuilders,
        tenantId: tenantId,
        libraries: {
            // moment: moment,
            cleanOrgTitle: cleanOrgTitle,
            // URI: URI,
            // lodash: lodash,
            // jsonpath: jsonpath,
            csv: {
                id: id,
                name: name,
                sourceUrl: sourceUrl
            },
            fuzzy,
            dates
        }
    });
}
