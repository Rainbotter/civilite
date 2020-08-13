import {injectable} from "tsyringe";
import {Civilite} from "../models/dao/civilite.model";

@injectable()
export class CiviliteService {

    public getCivilities(): Civilite[] {
        const result = [];

        result.push({
            code: "i18n.civility.MR",
            translations: {
                "fr": "Anderson",
                "en": "Mister",
                "de": "Herr"
            }
        } as Civilite);

        result.push({
            code: "i18n.civility.MRS",
            translations: {
                "fr": "Madame",
                "en": "Madam",
                "de": "Frau"
            }
        } as Civilite);

        result.push({
            code: "i18n.civility.MAITRE",
            translations: {
                "fr": "Yoda",
                "en": "Master",
                "de": "YaegerMeister"
            }
        } as Civilite);

        result.push({
            code: "i18n.civility.DOCTEUR",
            translations: {
                "fr": "Docteur La Peluche",
                "en": "Doctor",
                "de": "Klaus Barbie"
            }
        } as Civilite);

        return result;
    }

}
