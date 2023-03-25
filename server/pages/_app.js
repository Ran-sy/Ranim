(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./components/navbar.jsx







function Navbar() {
    const [nav, setNav] = external_react_default().useState(false);
    const [shadow, setShadow] = external_react_default().useState(false);
    function handleNav() {
        setNav((prev)=>!prev);
    }
    external_react_default().useEffect(()=>{
        const handleShadow = ()=>{
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleShadow);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-center w-full h-full px-2 2xl:px-16 md:justify-around",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "../public/assets/RYLogo.png",
                            alt: "/",
                            width: 75,
                            height: 75
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "hidden md:flex justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#home",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "ml-10 text-sm uppercase hover:border-b",
                                    children: "Home"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "ml-10 text-sm uppercase hover:border-b",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#skills",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "ml-10 text-sm uppercase hover:border-b",
                                    children: "Skills"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#projects",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "ml-10 text-sm uppercase hover:border-b",
                                    children: "Projects"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#contact",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "ml-10 text-sm uppercase hover:border-b",
                                    children: "Contact"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "md:hidden px-2",
                        onClick: handleNav,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMenu, {
                            color: "#1f2833",
                            size: 25
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden" : "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#c5c6c7] p-5 px-10 ease-in duration-500" : "fixed left-[-150%] top-0 p-5 px-10 ease-in duration-600",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex w-full items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "../public/assets/RYLogo.png",
                                            width: 45,
                                            height: 45,
                                            alt: "8"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            onClick: handleNav,
                                            className: "rounded-md bg-gray-300 shadow-lg shadow-gray-400 p-3 cursor-pointer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineClose, {
                                                color: "#1f2833"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "border-b border-grey-300 mb-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "w-[85%] md:w-[90%] py-4 capitalize",
                                        children: "Ranim Yassin | Flutter & Frontend web developer"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "uppercase",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#home",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#about",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm",
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#skills",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm",
                                                children: "Skills"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#projects",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm",
                                                children: "Projects"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#contact",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "pt-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                            className: "uppercase tracking-widest text-[#45a29e] ",
                                            children: "let's Connect..."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center justify-between mt-4 w-full sm:w-[80%]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-300",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedinIn, {
                                                        color: "/#45a29e",
                                                        size: 25
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-300",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {
                                                        color: "/#45a29e",
                                                        size: 25
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-300",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineMail, {
                                                        color: "/#45a29e",
                                                        size: 25
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 duration-300",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsPersonLinesFill, {
                                                        color: "/#45a29e",
                                                        size: 25
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./pages/_app.js



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [443,61], () => (__webpack_exec__(3745)));
module.exports = __webpack_exports__;

})();