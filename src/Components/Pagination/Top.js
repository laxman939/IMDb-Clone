import React, { useEffect, useState } from "react";
import { UpCircleOutlined } from "@ant-design/icons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className="scroll-to-top text-2xl font-bold mx-20  text-orange-800 
    hover:text-orange-700 cursor-pointer flex justify-center"
    >
      {isVisible && (
        <div onClick={scrollToTop} className="py-2 flex justify-center">
          <spn className="px-2">Top</spn>
          <UpCircleOutlined />
        </div>
      )}
    </div>
  );
}
