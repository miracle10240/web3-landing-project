import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { SiHiveBlockchain } from "react-icons/si";
import { MdOutlineSecurity} from 'react-icons/md'

const ServiceCard = ({color, title, icon, subtitle}) =>(
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>
        <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
        </div>
    </div>
)
const Services = () => {
    return (
        <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
            <div className="flex flex-col mf:flex-row  items-center justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 flex-col justify-start items-start">
                    <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">Services that we
                    <br/>
                    Continue in improve
                    </h1>
                </div>
                <div className="flex flex-1 flex-col justify-start items-center">
                    <ServiceCard
                        color="bg-[#2952E3]"
                        title="Open Source"
                        icon={<BsCodeSlash fontSize={21} className='text-white'/>}
                        subtitle="X3Crowdfunding is open source everyone can supports, innovation, collaboration and sustainability through our programs and services."
                    />
                     <ServiceCard
                        color="bg-[#8945F8]"
                        title="Security Guaranteed"
                        icon={<MdOutlineSecurity fontSize={21} className='text-white'/>}
                        subtitle="X3Crowdfunding is provide high Security is guaranted because of we are using blockchain teachnology. we always privacy and mainting the quality of our products and services."
                    />
                     <ServiceCard
                        color="bg-[#F84550]"
                        title="Fully Blockchain Technology"
                        icon={<SiHiveBlockchain fontSize={21} className='text-white'/>}
                        subtitle="We are Developed Fully Blockchain Technology oriented Crowdfunding Site"
                    />
                </div>
            </div>
        </div>
    );
} 
export default Services;