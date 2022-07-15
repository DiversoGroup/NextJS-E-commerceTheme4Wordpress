import Image from 'next/image';
import imgLogo from 'assets/images/logopng1PNG 1 white.png';

function Footer() {
  return (
    <footer className="flex h-72 flex-col items-center justify-start bg-footerBg pt-3 text-primary ">
      <figure className="flex h-14 w-11/12 items-center justify-center border-b pb-2">
        <Image src={imgLogo} alt="logo of Diverso Group" />
      </figure>
      <div className="w-11/12 border-b py-2 text-center">
        <h2 className="font-outfitM">FLORIDA, US</h2>
        <p className="pt-1 text-sm">
          4415 NW 50TH DR 102 <br /> GAINESVILLE, FL 32606
        </p>
      </div>
      <p className="pt-2 text-sm">2022 Diverso Group</p>
    </footer>
  );
}
export default Footer;
