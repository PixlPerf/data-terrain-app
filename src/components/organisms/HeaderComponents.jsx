
import MessageSVG from "../svgs/MessageSvg";
import IconComponent from "../atoms/IconComponents";
import InputComponent from "../atoms/InputComponent"
import LogoComponent from "../molecules/LogoComponent";
import ImageComponent from "../atoms/ImageComponent";
import image from '../images/image.jpg'

const HeaderComponent = () => {


    return <div className="flex justify-between px-8 py-4 shadow-2xl">
        <div className="flex align-center w-6/12 gap-24 ">

            <LogoComponent />
            <InputComponent />
        </div>
        <div className="flex gap-24 items-center">


            <IconComponent logo={MessageSVG} />


            <IconComponent logo={MessageSVG} />
            <IconComponent logo={MessageSVG} />
            <IconComponent logo={MessageSVG} />
            <IconComponent logo={MessageSVG} />

            <ImageComponent src={image} />
        </div>
    </div>

}

export default HeaderComponent;