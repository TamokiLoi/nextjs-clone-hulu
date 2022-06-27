import { BaseModel } from "./base.model";

export class MovieModel extends BaseModel {
    title: string = '';
    original_title: string = '';
    original_language: string = '';
    overview: string = '';
    adult: boolean = false;
    backdrop_path: string = '';
    poster_path: string = '';
    release_date: string = '';
    first_air_date: string = '';
    media_type: string = '';
    vote_count: number = 0;
    vote_average: number = 0;
}