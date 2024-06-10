import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {}

  async getWeather() {
    const url =
      'https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=yLrGbAGytTOixav1s0idwPhHehkMvhn8';
    return firstValueFrom(this.http.get(url));
  }
}
