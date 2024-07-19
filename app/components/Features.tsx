
import React from 'react'
import EcosytemIcon from './../assets/icons/ecosystem.svg';
import Feature from './Feature';

export interface FeatureProps {
    id: number;
    title: string;
    description: string;
}

const features: FeatureProps[] = [
    {
        id: 1,
        title: "Integration Ecosystem",
        description: "Enjoy customeizable lists, team work, tools and smart tracking all in one place. Set tasks, get reminders and see ypur progress simple and quickly.",
    },
    {
        id: 2,
        title: "Goal Setting and Tracking",
        description: "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
    },
    {
        id: 3,
        title: "Secure Data Encryption",
        description: "With end-to-end encryption your data is securely stored and protected from unauthorized acceess.",
    },
];

const Features = () => {
  return (
    <div className='bg-black text-white py-[72px] sm:py-24'>
        <div className="container mx-auto p-3">
            <div className="w-full ">
                <h2 className='text-center font-bold text-5xl sm:text-6xl'>Everything you need</h2>
                <p className='max-w-[540px] mx-auto text-center mt-5 text-xl text-white/70 '>Enjoy customizable lists, team work tools, and smart traking all in one place. Set tasks, get reminders, and see your progress simply and quickly </p>
            </div>
            <div className="mt-16 grid grid-col-1 lg:grid-cols-3 gap-4">
                {
                    features.map((feature) => (
                        <Feature key={feature.id} feature={feature} imgSrc={EcosytemIcon} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Features