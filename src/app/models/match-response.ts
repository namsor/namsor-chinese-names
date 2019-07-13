export default class MatchResponse {
    id?: string;
    matchStatus: 'Match' | 'Mismatch';
    score: number;
}
