import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

interface FooterRoutProps {
  className?: string;
}

const FooterRout: React.FC<FooterRoutProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "bg-[#FFF0F0] border-t-[3px] p-5 flex items-center justify-between max-w-[1440px] md:m-auto",
        className
      )}
    >
      <div>
        <a href="#">
          <Image
            src="/Images/VectorTwitter.png"
            alt="Twitter"
            width={30}
            height={30}
            className="inline-block mx-3 md:mx-4 md:ms-28"
          />
        </a>
        <a href="#">
          <Image
            src="/Images/VectorLinkdIn.png"
            alt="LinkedIn"
            width={25}
            height={25}
            className="inline-block md:ms-2"
          />
        </a>
      </div>
      <div className="text-black">
        <Link className="m-2 md:m-4" href="/about">
          About
        </Link>
        <Link className="m-2 md:m-4" href="/blog">
          Blog
        </Link>
        <Link className="m-2 md:m-4" href="/hacked">
          Hack Explorer
        </Link>
      </div>
    </div>
  );
};

export default FooterRout;
