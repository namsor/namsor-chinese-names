export default class ChineseTranslationResponse {
    id: string;
    name: string;
    nameParserType: string;
    score: number;
    firstLastName: {
        firstName: string,
        lastName: string
    };
}
