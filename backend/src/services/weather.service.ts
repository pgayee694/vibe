import { HttpService, Inject, Injectable } from '@nestjs/common';
import * as Rx from 'rxjs';
import * as RxOp from 'rxjs/operators';
import { Coordinate } from '../models/coordinate';
import { Config } from '../models/config';
import { ConfigToken } from '../providers/config.provider';
import { EnvironmentToken } from '../providers/environment.provider';
import { WeatherResponse } from '../models/weather-response';

@Injectable()
export class WeatherService {
  public constructor(
    @Inject(EnvironmentToken) private readonly environment: NodeJS.ProcessEnv,
    @Inject(ConfigToken) private readonly config: Config,
    @Inject(HttpService) private readonly http: HttpService,
  ) {}

  getCurrentWeather(coordinate: Coordinate): Rx.Observable<WeatherResponse> {
    return this.http
      .get<WeatherResponse>(this.config.weatherApi, {
        params: {
          appId: this.environment.WEATHER_API_KEY,
          lat: coordinate.lat,
          lon: coordinate.lon,
          units: 'metric',
        },
      })
      .pipe(
        RxOp.map((response) => response.data),
        RxOp.catchError((err) => Rx.of({ err: err.toString() } as any)),
      );
  }
}
