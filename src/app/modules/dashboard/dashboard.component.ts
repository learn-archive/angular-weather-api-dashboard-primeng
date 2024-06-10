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
  dataLoaded = false;
  loading = false;

  constructor(private readonly weatherService: WeatherService) {}

  async ngOnInit() {}

  async load() {
    this.dataLoaded = false;
    this.loading = true;
    const data = await this.weatherService.getWeather();
    if (data?.timelines) {
      this.dataLoaded = true;
    }
    console.log('DEBUG: ', data);
    this.loading = false;
  }
}
