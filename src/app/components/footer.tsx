import Image from "next/image";
import mainlogo from "/public/Logo Icon.png";
import icons from "/public/Social Links.png";
import paymentlogos from "/public/Rectangle 33.png";
import EmailForm from "@/components/footer-input";

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className="bg-white w-full z-10 border-t-[1px] border-color24 pt-6 px-4 lg:px-5">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-around items-start pb-6">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image
              height={30}
              width={30}
              src={mainlogo}
              alt="logo"
              className="h-[25px] w-[25px]"
            />
            <h1 className="text-[19px] lg:text-[26px] font-semibold">Comforty</h1>
          </div>
          <p className="text-[10px] md:text-[12px] lg:text-[16px] text-color ">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <Image
            src={icons}
            alt="social icons"
            className="h-[25px] md:h-[23px] object-contain"
          />
        </div>

        {/* Category Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[12px] md:text-[14px] text-color9 font-semibold">
            Category
          </h2>
          <div className="flex flex-col gap-1 text-black text-[10px] md:text-[12px] lg:text-[16px]">
            <div>Sofa</div>
            <div>Armchair</div>
            <div>Wing Chair</div>
            <div className="text-color5">Desk Chair</div>
            <div>Wooden Chair</div>
            <div>Park Bench</div>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[12px] md:text-[14px] text-color9 font-semibold">
            Support
          </h2>
          <div className="flex flex-col gap-1 text-black text-[10px] md:text-[12px] lg:text-[16px]">
            <div>Help & Support</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
            <div>Help</div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[12px] md:text-[14px] text-color9 font-semibold">
            Newsletter
          </h2>
          <div className="flex flex-col gap-4">
            <EmailForm />
            <p className="text-[10px] md:text-[12px] lg:text-[16px] text-color12 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-color25"></div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 py-4 text-color25 text-[12px] md:text-[14px] lg:text-[16px]">
        <div>@ {year} - Blogy - Designed & Developed by Muniza Zubair</div>
       </div>
    </footer>
  );
}
