import { clsx } from 'clsx';
import { CalendarDays } from 'lucide-react';

interface IPublicationDateProps{
    label?: string;
    className?: string;
    size?: "sm" | "md";
}

export const PublicationDate: React.FC<IPublicationDateProps> = ({label = '10.10.2024', className, size = "sm"}) => {
    const iconSizeClassName = {
        sm: 'size-4',
        md: 'size-6'
    }[size];

    const labelSizeClassName = {
        sm: 'text-sm',
        md: 'text-lg'
    }[size];

    return (
        <div className={clsx('flex items-center gap-2', className)}>
            <CalendarDays className={clsx(iconSizeClassName, 'stroke-blue-600')} />
            <span className={clsx(labelSizeClassName, 'text-blue-600')}>{label}</span>
        </div>
    )
}