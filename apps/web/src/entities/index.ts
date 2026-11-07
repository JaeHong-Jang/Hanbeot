import type { components } from './generated/api';

export type { paths, components } from './generated/api';
export type {
  CallEvent,
  ConsentWithdrawn,
  CueDetected,
  ModeChanged,
  SafeModeEntered,
  TtfaMeasured,
  TurnEnded,
  TurnStarted,
} from './generated/events';

export type Consent = components['schemas']['Consent'];
export type Memory = components['schemas']['Memory'];
export type MemoryState = components['schemas']['MemoryState'];
export type MemoryCandidate = components['schemas']['MemoryCandidate'];
export type Summary = components['schemas']['Summary'];
export type DeletionRequest = components['schemas']['DeletionRequest'];
export type Problem = components['schemas']['Problem'];

export type CallMode = 'listen' | 'organize' | 'advise';
