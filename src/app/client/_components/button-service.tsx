'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { ServiceItemProps } from '@/app/_components/service-item';
import { useDispatch } from 'react-redux';
import { addService, calculateTotal } from '@/_redux/serviceSlice';

const ButtonService = ({ service }: ServiceItemProps) => {
    const dispatch = useDispatch();

    const handleAddClient = () => {
        dispatch(addService(service));
        dispatch(calculateTotal());
    };
    return (
        <Button
            onClick={handleAddClient}
            className="mt-1.5 ml-3.5 bg-emerald-700 text-sm text-white hover:bg-emerald-600"
        >
            Selecionar
        </Button>
    );
};

export default ButtonService;
