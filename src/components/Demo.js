// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import Link from "next/link";
import $$Image from "next/image";

function Demo(props) {
  return React.createElement("div", {
              className: "flex flex-col items-center mt-10 gap-10"
            }, React.createElement("div", {
                  className: "text-3xl"
                }, "Hello, This is Rescript"), React.createElement("div", {
                  className: "flex gap-5"
                }, React.createElement($$Image, {
                      alt: "nextjs",
                      src: "/next.svg",
                      width: 200.0,
                      height: 200.0
                    }), React.createElement($$Image, {
                      alt: "nextjs",
                      src: "/vercel.svg",
                      width: 200.0,
                      height: 200.0
                    })), React.createElement(Link, {
                  children: React.createElement($$Image, {
                        alt: "nextjs",
                        src: "/github.svg",
                        width: 200.0,
                        height: 200.0
                      }),
                  href: "https://github.com/kemalmao19/rescript-nextjs-boilerplate.git"
                }));
}

var make = Demo;

export {
  make ,
}
/* react Not a pure module */