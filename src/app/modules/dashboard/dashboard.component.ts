import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [ButtonModule],
})
export class DashboardComponent implements OnInit {
  constructor(private readonly weatherService: WeatherService) {}

  async ngOnInit() {}

  async onClick() {
    const data = await this.weatherService.getWeather();
    console.log('DEBUG: ', data);
  }
}
