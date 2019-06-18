interface Candidate {
    candidateName: string;
    probability: number;
}

export default class TranslationResponse {
    id: string;
    firstName: string;
    lastName: string;
    matchCandidates: Candidate[];
}
