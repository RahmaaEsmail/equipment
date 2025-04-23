import React from "react";
import {motion} from 'framer-motion'

export default function HomeAdvertisements() {
  return (
    <motion.div initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }} className="grid grid-cols-[4fr_8fr] px-4 my-5 gap-3">
     <motion.div initial={{opacity:0 , x : -100}} whileInView={{opacity:1, x: 0}}>
     <img
        src="https://res.cloudinary.com/dbz6ebekj/image/upload/v1743937548/quanta_website_small_plrhcx.jpg"
        className="object-cover rounded-sm h-full"
      />
     </motion.div>
      <img
        src="https://res.cloudinary.com/dbz6ebekj/image/upload/v1743937548/right_banner_pyrex_eibqbe.jpg"
        className="object-cover rounded-sm h-full"
      />
    </motion.div>
  );
}
