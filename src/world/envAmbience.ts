// src/world/envAmbience.ts
// EnvAmbience: high-level ambient cues (soundscape, smell, vibe)

export interface EnvAmbienceState {
  description?: string;
  sounds?: string[];
  smells?: string[];
  lighting?: string;
  notes?: string;
}

export class EnvAmbience {
  private state: EnvAmbienceState = {};

  init(): void {
    // Placeholder: nothing needed yet.
  }

  setState(partial: EnvAmbienceState): void {
    this.state = { ...this.state, ...partial };
  }

  getState(): EnvAmbienceState {
    return this.state;
  }

  clear(): void {
    this.state = {};
  }
}
