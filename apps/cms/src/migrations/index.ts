import * as migration_20250112_200237_initial from './20250112_200237_initial';
import * as migration_20260708_151132_add_blog from './20260708_151132_add_blog';

export const migrations = [
  {
    up: migration_20250112_200237_initial.up,
    down: migration_20250112_200237_initial.down,
    name: '20250112_200237_initial',
  },
  {
    up: migration_20260708_151132_add_blog.up,
    down: migration_20260708_151132_add_blog.down,
    name: '20260708_151132_add_blog'
  },
];
