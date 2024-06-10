import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
})
export class DashboardComponent implements OnInit {
  constructor(private readonly weatherService: WeatherService) {}

  async ngOnInit() {
    const data = await this.weatherService.getWeather();
    console.log('DEBUG: ', data);
  }
}
