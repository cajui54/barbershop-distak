import { Service } from '@/_redux/serviceSlice';
import { BarbershopService } from '@prisma/client';

export const checkWindow = () => {
    return typeof window !== 'undefined';
};
export const getStorage = (): BarbershopService[] => {
    if (!checkWindow()) return [];
    const _storage = sessionStorage.getItem('services');
    if (_storage) {
        return JSON.parse(_storage);
    }
    return [];
};
export const saveInStorage = (
    newServices: BarbershopService
): BarbershopService[] => {
    const storageServices = getStorage();
    if (checkWindow()) {
        if (storageServices.length > 0) {
            const addNewService = [...storageServices, newServices];
            sessionStorage.setItem('services', JSON.stringify(addNewService));
        } else {
            sessionStorage.setItem('services', JSON.stringify([newServices]));
        }
    }
    return getStorage();
};
export const removeServiceById = (id: string) => {
    const storageServices = getStorage();

    if (storageServices.length > 0) {
        const removeService = storageServices.filter(
            (service) => service.id !== id
        );
        sessionStorage.setItem('services', JSON.stringify(removeService));
    }
    return getStorage();
};
