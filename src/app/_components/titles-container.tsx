import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
interface TitlesContainerProps {
    title: string;
    subtitle: string;
}
const TitlesContainer = ({ title, subtitle }: TitlesContainerProps) => {
    return (
        <CardHeader>
            <CardTitle className="text-2xl font-bold text-emerald-500 sm:text-3xl">
                {title}
            </CardTitle>
            <CardDescription className="-mt-2 text-neutral-400">
                {subtitle}
            </CardDescription>
        </CardHeader>
    );
};

export default TitlesContainer;
