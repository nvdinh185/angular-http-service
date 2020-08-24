import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class WeatherService {
    constructor(private http: Http) { }

    getTemp(cityName: String) {
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=1f481fd4fafd2cf9425a51599c8abd7a&units=metric&q=' + cityName;
        return this.http.get(url)
            .toPromise()
            .then(res => res.json())
            .then(resJson => resJson.main.temp);
    }
}