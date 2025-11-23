// src/world/skylark.ts
// Skylark: weather / sky conditions (world-scale & local hooks)

export interface WeatherState {
  description?: string;
  temperatureC?: number;   // neutral units; convert at render time
  wind?: string;
  precipitation?: string;
  cloudCover?: string;
  notes?: string;
}

export class Skylark {
  private state: WeatherState = {};

  init(): void {
    // Placeholder: nothing needed yet.
  }

  setState(partial: WeatherState): void {
    this.state = { ...this.state, ...partial };
  }

  getState(): WeatherState {
    return this.state;
  }

  clear(): void {
    this.state = {};
  }
}
