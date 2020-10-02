import { UpdateType } from '../src/types/getting-updates/update-helpers.ts';

/**
 * bot.<U extends Update = Update>on(Filter<U>, (update: U) => {})
 * bot.<any>on(Filter<any>, (update: any) => {})  for custom ??
 *
 *
 * AC1:
 * Filters for specific callback query
 *
 * AC2:
 * Redux like menus state handling
 *
 * AC3:
 * Interceptors?
 */
