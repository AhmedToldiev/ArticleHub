import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema, ReduxStoreWithManager, ThunkConfig,
} from './config/StateSchema';

export {
    createReduxStore, StoreProvider, StateSchema, ReduxStoreWithManager, ThunkConfig,
};
export type { AppDispatch };
