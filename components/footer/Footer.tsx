import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="mt-10 flex flex-col items-center justify-center space-y-10 border-t-2 border-secondary py-10 md:mx-7 md:flex-row md:justify-between md:space-y-0">
        {/* Logo */}
        <div>
          <Link href="/">
            <p className="group relative text-4xl font-bold md:text-3xl">
              Air <span className="text-primary">RBC</span>
              <span className="absolute -bottom-1 left-0 h-1 w-0 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </p>
          </Link>
        </div>

        {/* Links */}
        <div>
          <ul className="m-0 flex flex-col gap-1 p-0 md:flex-row md:space-x-10">
            <div>
              <li>
                <span className="cursor-pointer hover:text-primary">
                  Terms of Use
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-primary">
                  Privacy policy
                </span>
              </li>
            </div>

            <div>
              <li>
                <span className="cursor-pointer hover:text-primary">
                  Contact
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-primary">FAQ</span>
              </li>
            </div>
          </ul>
        </div>

        {/* Socials  */}
        <div>
          <Button className="ml-2 hover:text-primary" variant="secondary">
            <Twitter className="h-6 w-6" />
          </Button>
          <Button className="ml-2 hover:text-primary" variant="secondary">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button className="ml-2 hover:text-primary" variant="secondary">
            <Github className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Copy */}
      <div className="mt-8 border-t-2 border-secondary py-6 text-center">
        <span className="font-extralight">
          Copyright © 2024 Air RBC - All rights reserved
        </span>
      </div>
    </>
  );
};

export default Footer;
