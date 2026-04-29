import logo from "@/assets/logo.png"
import Image from "next/image";
import { format } from "date-fns";
const Header = () => {
    return (
        <div className="py-8 text-center space-y-4">
           <Image className="mx-auto" src={logo} height={60} width={470} alt="logo"></Image>
            <p className="text-lg text-[#706F6F] ">Journalism Without Fear or Favour</p>
            <p className="font-medium text-xl"><span className="text-[#403F3F]">{format(new Date(), "EEEE, ")}</span> <span className="text-[#706F6F]">{format(new Date(), "MMMM d, yyyy")}</span></p>
        </div>
    );
};

export default Header;