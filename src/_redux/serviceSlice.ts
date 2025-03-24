import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface Service {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}
export interface ServiceSlice {
    services: Service[];
    total: number;
}
const initialState: ServiceSlice = {
    services: [],
    total: 0,
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        addService: (state, action: PayloadAction<Service>) => {
            const getIds = state.services.map((service) => service.id);

            if (!getIds.includes(action.payload.id)) {
                state.services = [...state.services, action.payload];
            }
        },
        removeService: (state, action: PayloadAction<string>) => {
            state.services = state.services.filter(
                (service) => service.id !== action.payload
            );
        },
        calculateTotal: (state) => {
            state.total = state.services.reduce(
                (acc, curr) => acc + curr.price,
                0
            );
        },
    },
});

export const { addService, removeService, calculateTotal } =
    serviceSlice.actions;

export default serviceSlice.reducer;
