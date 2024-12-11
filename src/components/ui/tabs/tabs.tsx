// interface ITabsProps {
//     items?: {
//         label: string;
//         content: React.ReactNode;
//     }[]
// }

'use client';

import { clsx } from "clsx";
import { useState } from "react";

const items: { id: number; label: string; content: string; }[] = [
    {
        id: 1,
        label: "Деятельность",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quidem aperiam quos? Debitis nobis error neque! Neque cupiditate deleniti, ea, at vel consequatur error velit, molestiae assumenda maxime sed debitis!'
    },
    {
        id: 2,
        label: "Преимущества",
        content: 
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam eligendi libero illum similique amet ab nemo neque alias odit incidunt, quas cum temporibus culpa illo distinctio ipsum ipsam adipisci? Debitis, praesentium? Id porro, sapiente nesciunt dolore sint cum eius distinctio voluptatum ullam odio delectus omnis. Est porro eveniet quos omnis natus aspernatur debitis nisi rem ut dignissimos, officia odit.'
        
    },
];

export const Tabs: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setCurrentTab(index);
    };

    return (
        <div className="w-full flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 py-1.5 px-2 shadow shadow-zinc-500 rounded-lg">
                {
                    items.map((item, index) => (
                        <button
                            className={
                                clsx(
                                    currentTab === index ? 'bg-blue-500 text-white' : 'text-zinc-700 hover:text-blue-500',
                                    'py-1 px-2 rounded-lg transition-colors duration-300'
                                )
                            }
                            onClick={() => handleTabClick(index)}
                            key={item.id}
                        >
                            {item.label}
                        </button>
                    ))
                }
            </div>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={item.id} className={`tab-content ${currentTab === index ? 'fade-in' : 'fade-out'}`}>
                            <span className='text-zinc-700'>
                                {item.content}
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
