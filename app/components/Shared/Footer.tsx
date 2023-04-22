const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* First Column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold ">BLOG OF THE FUTURE</h4>
          <p className="my-5 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            excepturi quia, vel tenetur porro recusandae possimus vero! Aut, eos
            alias.
          </p>
          <p>Blog of the Future All Rights Reserved.</p>
        </div>
        {/* Second Column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold ">Links</h4>
          <p className="my-5 ">Massa orc senectus</p>
          <p className="my-5">Some random link again</p>
          <p>Ullamcorper vivamus</p>
        </div>
        {/* Third Column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold ">Contact Us</h4>
          <p className="my-5 ">Massa orc senectus</p>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            veritatis.
          </p>
          <p>+84 336347342</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
