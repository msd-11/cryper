import Riddle from "./Riddle.ts";
import {RIDDLE_API_KEY} from "../../config";

class RiddleApi {
    private static readonly _url: string = "https://api.api-ninjas.com/v1/riddles";
    private static readonly _apiKey: string = RIDDLE_API_KEY;

    public static async getRiddle(): Promise<Riddle> {

        const res = await fetch(`${this._url}?limit=3`, {
                headers: {
                    "X-Api-Key": this._apiKey
                }
            }
        );
        const json = await res.json();

        const choices = [json[0].answer, json[1].answer, json[2].answer];

        return new Riddle(json[0].question, json[0].answer, choices);
    }

}

export default RiddleApi;