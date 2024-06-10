import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { env } from '../../env/env';
import { Temperatures } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {}

  async getWeather(): Promise<Temperatures> {
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=${env.apiKey}`;
    return firstValueFrom(this.http.get<Temperatures>(url));
  }
}
