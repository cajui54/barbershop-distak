import { checkWindow } from './storage-service';

export const saveUserIdInStorage = (userId: string): void => {
    if (checkWindow()) {
        sessionStorage.setItem('userId', userId);
    }
};
