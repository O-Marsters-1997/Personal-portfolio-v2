import * as migration_20250112_200237_initial from './20250112_200237_initial';

export const migrations = [
  {
    up: migration_20250112_200237_initial.up,
    down: migration_20250112_200237_initial.down,
    name: '20250112_200237_initial'
  },
];
