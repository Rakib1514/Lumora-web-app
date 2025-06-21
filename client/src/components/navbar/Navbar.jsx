import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [subMenuActiveImg, setSubMenuActiveImg] = useState(
    "https://i.ibb.co.com/nM83jFrc/default-sub-Menu-image.webp"
  );

  const navLinks = [
    {
      title: "expertise",
      path: "/expertise",
      subLinks: null,
    },
    {
      title: "collections",
      path: "/collections",
      subLinks: [
        {
          title: "All collections",
          path: "/all-collections",
          thumb: "https://i.ibb.co.com/nM83jFrc/default-sub-Menu-image.webp",
        },
        {
          title: "jewelry sets",
          path: "/jewelry-sets",
          thumb: "https://i.ibb.co.com/pjvH8J8B/jewelery-sets.jpg",
        },
        {
          title: "earrings",
          path: "/earrings",
          thumb: "https://i.ibb.co.com/MDPJrjKX/earrings.jpg",
        },
        {
          title: "rings",
          path: "/rings",
          thumb: "https://i.ibb.co.com/5pd1Nnh/rings.jpg",
        },
      ],
    },
    {
      title: "jewelry insight",
      path: "/jewelry-insight",
    },
    {
      title: "news",
      path: "/news",
    },
    {
      title: "contact",
      path: "/contact",
    },
  ];

  return (
    <nav>
      <div className="w-11/12 mx-auto">
        {/* first - Middle brand Name */}
        <div className="py-2 relative">
          <div className="uppercase text-center text-2xl font-semibold ">
            <Link>Lumora</Link>
          </div>
          <div className="flex gap-2 absolute top-0 right-0 h-full">
            <button>cart</button>
            <button>wishlist</button>
          </div>
        </div>

        {/* Second - Middle Nav Links */}

        <ul className="flex justify-center items-center capitalize ">
          {navLinks.map((link, idx) => (
            <li
              key={idx}
              className="capitalize px-4 py-4 link__hover"
              onMouseEnter={() => {
                link?.subLinks ? setActiveDropdown(link.title) : null;
              }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Sub menu */}

      <AnimatePresence>
        {activeDropdown &&
          navLinks.find((link) => link.title === activeDropdown).subLinks && (
            <motion.div
              className="bg-secondary w-full min-h-[50vh] fixed "
              initial={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex w-10/12 mx-auto py-4">
                <div className="flex-1 text-white ">
                  {navLinks
                    .find((link) => link.title === activeDropdown)
                    .subLinks.map((subLink, idx) => (
                      <div key={idx}>
                        <button
                          className="uppercase link__hover py-2 font-semibold"
                          onMouseEnter={() =>
                            setSubMenuActiveImg(subLink.thumb)
                          }
                        >
                          {subLink.title}
                        </button>
                      </div>
                    ))}
                </div>
                <div className="w-[40vw] h-[40vh] relative overflow-hidden">
                  <AnimatePresence initial={false} mode="sync">
                    <motion.img
                      key={subMenuActiveImg}
                      src={subMenuActiveImg}
                      alt="submenu thumbnail"
                      className="absolute top-0 left-0 h-full w-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeIn" }}
                    />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
