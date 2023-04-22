import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Ad2 from "/public/assets/ad-2.png";
import AboutProfile from "/public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">
        <Image
          placeholder="blur"
          style={{ objectFit: "cover" }}
          src={Ad2}
          width={500}
          height={1000}
          alt="advert-2"
          className="hidden md:block my-8 w-full"
        />
      </div>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          placeholder="blur"
          style={{ objectFit: "cover" }}
          width={500}
          height={250}
          src={AboutProfile}
          alt="about profile"
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Yellow Flash
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        consectetur.
      </p>
    </section>
  );
};

export default Sidebar;
