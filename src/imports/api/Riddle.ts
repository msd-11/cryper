class Riddle {
    private readonly _question: string;
    private readonly _answer: string;
    private readonly _choices: string[];

    constructor(question: string, answer: string, choices: string[]) {
        this._question = question;
        this._answer = answer;
        this._choices = choices;
    }

    get question() {
        return this._question;
    }

    get answer() {
        return this._answer;
    }

    get choices() {
        return this._choices;
    }
}

export default Riddle;