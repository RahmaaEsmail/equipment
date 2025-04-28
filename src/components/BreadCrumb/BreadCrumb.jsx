import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function BreadCrumb({ data }) {
  return (
    <div className=" rounded-md overflow-x-auto !px-3 h-[50px] !mb-3 flex  items-center border border-gray-300">
      <div className="flex  min-w-[600px] gap-2 text-md flex-wrap">
        {data?.map((item, index) => {
          const isLast = index === data.length - 1;
          return (
            <div key={index} className="flex items-center gap-2">
              {item.route ? (
                <Link to={item.route} className="underline underline-offset-4">
                  {item?.route == "/" ? (
                    <div className="flex gap-2 items-center underline underline-offset-4">
                      <svg
                        class="w-3.5 h-3.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>

                      <span>{item.title}</span>
                    </div>
                  ) : (
                    item.title
                  )}
                  {}
                </Link>
              ) : (
                <p className="">{item.title}</p>
              )}
              {!isLast && (
                <FaChevronLeft className="text-(--main-color) mt-1.5 font-semibold" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
