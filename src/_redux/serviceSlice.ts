import {
    getStorage,
    removeServiceById,
    saveInStorage,
} from '@/helpers/storage-service';
import { BarbershopService } from '@prisma/client';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
export interface Service {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}
export interface ServiceSlice {
    services: BarbershopService[];
    total: number;
}
const initialState: ServiceSlice = {
    services: getStorage(),
    total: getStorage().reduce((acc, curr) => acc + Number(curr.price), 0),
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        addService: (state, action: PayloadAction<BarbershopService>) => {
            const getIds = state.services.map((service) => service.id);
            if (!getIds.includes(action.payload.id)) {
                state.services = saveInStorage(action.payload);
            }
        },
        removeService: (state, action: PayloadAction<string>) => {
            state.services = removeServiceById(action.payload);
        },
        calculateTotal: (state) => {
            state.total = state.services.reduce(
                (acc, curr) => acc + Number(curr.price),
                0
            );
        },
    },
});

export const { addService, removeService, calculateTotal } =
    serviceSlice.actions;

export default serviceSlice.reducer;
