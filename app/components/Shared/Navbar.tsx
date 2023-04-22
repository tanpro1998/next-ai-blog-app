import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import Ad1 from "/public/assets/ad-1.jpg";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/trending"}>Trending</Link>
          <Link href={"/about"}>About</Link>
        </div>
        <div>
          <p>Sign in</p>
        </div>
      </nav>
      <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">BLOG OF THE FUTURE</h1>
          <p className="text-sm mt-3">
            Blog dedicated towards AI and genration and job automation
          </p>
        </div>
        <div className="basis-full relative w-auto h-32">
          <Image
            fill
            placeholder="blur"
            style={{ objectFit: "cover" }}
            src={Ad1}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
            alt="advert-1"
          />
        </div>
      </div>
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;