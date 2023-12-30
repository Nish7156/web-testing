"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import HomeButton from "@/components/icons/HomeButton";

interface FooterLinkProps {
  href: string;
  label: string;
  isActive: boolean;
}

function FooterLink({ href, label, isActive }: FooterLinkProps) {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`flex-1 py-5 ${
          isActive
            ? "border-t-primary border-t-[2px] "
            : "border-t-gray-800 border-t-[1px] "
        }`}
      >
        <div
          className={`flex justify-center items-center font-normal ${
            isActive ? "text-primary" : "text-secondary"
          }  text-lg`}
        >
          {label}
        </div>
      </a>
    </Link>
  );
}

interface FooterProps {
  links: Array<{ href: string; label: string }>;
  isDisableHomeButton?: boolean;
  includeAllActive?:boolean;
}

function Footer({ links, isDisableHomeButton,includeAllActive }: FooterProps) {
  const pathname = usePathname();
  const [activeLinkIndex, setActiveLinkIndex] = useState<number | null>(null);

  useEffect(() => {
    if (includeAllActive) {
      setActiveLinkIndex(
        links.findIndex((link) => pathname.includes(link.href))
      );
    } else {
      setActiveLinkIndex(pathname === links[1].href ? 1 : 0);
    }
  }, [pathname, links]);

  // useEffect(() => {
  //   const index = links.findIndex((link) => pathname.includes(link.href));
  //   setActiveLinkIndex(index);
  // }, [pathname, links]);

  return (
    <div className="relative w-full z-10">
      <div className=" w-full">
        <div className="flex bg-black">
          {links &&
            links.map((link, index) => (
              <FooterLink
                key={index}
                href={link.href}
                label={link.label}
                isActive={index === activeLinkIndex}
              />
            ))}
          {!isDisableHomeButton && (
            <div className="flex items-center justify-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4">
                <HomeButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
