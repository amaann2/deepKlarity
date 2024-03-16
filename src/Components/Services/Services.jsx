import { CgWebsite } from "react-icons/cg";
import { PiDeviceMobileSpeaker } from "react-icons/pi"
import { HiComputerDesktop } from "react-icons/hi2";
import { TbBrandCraft } from "react-icons/tb";
import './Services.css'
const data = [
    {
        id: 1,
        icon: <CgWebsite />,
        skill: 'UI/UX'
    },
    {
        id: 2,
        icon: <HiComputerDesktop />,
        skill: 'Web Design'
    },
    {
        id: 3,
        icon: <PiDeviceMobileSpeaker />,
        skill: 'App Design'
    },
    {
        id: 4,
        icon: <TbBrandCraft />,
        skill: 'Graphics Design'
    },
]
const Services = () => {

    return (
        <div className="" id="service">
            <h2 className="title">Services</h2>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. . Adipisci quas dolores dicta nemo at atque eius<br /> velit sequi tempora provident?</p>
            <div className="small-container">

                <div className="row services">
                    {data?.map((service) => (

                        <div className="col-4 service-card" key={service.id}>
                            <span className="service-icon">{service.icon}</span>
                            <h4 className="service-heading">{service.skill}</h4>
                            <p className="service-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quo?</p>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services