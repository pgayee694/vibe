import { Provider } from '@nestjs/common';
import { WeatherToGenreMap } from '../models/weather-to-genre-map';
import { Genres } from '../models/spotify';
import { WeatherType } from '../models/weather-type';

export const WeatherToGenreMapToken = Symbol('WeatherToGenreMapToken');

export const WeatherToGenreMapProvider: Provider<WeatherToGenreMap> = {
  provide: WeatherToGenreMapToken,
  useValue: new Map([
    [
      WeatherType.Clear,
      [
        Genres.Pop,
        Genres.Rock,
        Genres.Alternative,
        Genres.HipHop,
        Genres.RockNRoll,
      ],
    ],
    [
      WeatherType.Clouds,
      [
        Genres.PowerPop,
        Genres.Grunge,
        Genres.AltRock,
        Genres.Punk,
        Genres.SynthPop,
        Genres.Rap,
      ],
    ],
    [
      WeatherType.Thunderstorm,
      [
        Genres.Metalcore,
        Genres.ProgressiveHouse,
        Genres.Electro,
        Genres.HardRock,
        Genres.DeepHouse,
      ],
    ],
    [
      WeatherType.Drizzle,
      [
        Genres.RainyDay,
        Genres.Ambient,
        Genres.MinimalTechno,
        Genres.Study,
        Genres.Trance,
      ],
    ],
    [
      WeatherType.Rain,
      [Genres.RainyDay, Genres.Techno, Genres.Blues, Genres.Sad, Genres.Emo],
    ],
    [
      WeatherType.Snow,
      [Genres.Electro, Genres.Electronic, Genres.House, Genres.Metal],
    ],
    [
      WeatherType.Mist,
      [
        Genres.Chill,
        Genres.Jazz,
        Genres.Folk,
        Genres.SingerSongwriter,
        Genres.PsychRock,
      ],
    ],
    [
      WeatherType.Smoke,
      [
        Genres.Synthwave,
        Genres.PostDubstep,
        Genres.Dubstep,
        Genres.DeepHouse,
        Genres.ProgressiveHouse,
      ],
    ],
    [
      WeatherType.Haze,
      [
        Genres.MinimalTechno,
        Genres.FunkMetal,
        Genres.MetalMisc,
        Genres.Synthwave,
        Genres.PsychRock,
      ],
    ],
    [
      WeatherType.Fog,
      [
        Genres.RainyDay,
        Genres.Ambient,
        Genres.MinimalTechno,
        Genres.Study,
        Genres.Trance,
      ],
    ],
    [
      WeatherType.Sand,
      [
        Genres.Dubstep,
        Genres.DrumAndBass,
        Genres.DeathMetal,
        Genres.Grindcore,
        Genres.BlackMetal,
      ],
    ],
    [
      WeatherType.Dust,
      [
        Genres.Dubstep,
        Genres.DrumAndBass,
        Genres.DeathMetal,
        Genres.Grindcore,
        Genres.BlackMetal,
      ],
    ],
    [
      WeatherType.Ash,
      [
        Genres.Synthwave,
        Genres.PostDubstep,
        Genres.Dubstep,
        Genres.DeepHouse,
        Genres.ProgressiveHouse,
      ],
    ],
    [
      WeatherType.Squall,
      [
        Genres.Dubstep,
        Genres.DrumAndBass,
        Genres.DeathMetal,
        Genres.Grindcore,
        Genres.BlackMetal,
      ],
    ],
    [
      WeatherType.Tornado,
      [
        Genres.Dubstep,
        Genres.DrumAndBass,
        Genres.DeathMetal,
        Genres.Grindcore,
        Genres.BlackMetal,
      ],
    ],
  ]),
};
