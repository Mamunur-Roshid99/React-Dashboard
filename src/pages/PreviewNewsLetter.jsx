import React, {useEffect} from 'react'

import { BiSolidShare } from "react-icons/bi";

import img from "../assets/previewnewsletter.png";

const PreviewNewsLetter = () => {
 useEffect(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100); // Delay ensures component is mounted
    }, []);
  return (
    <div className="container w-[95%] mx-auto mt-5 lg:w-full">
      {/* top */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <BiSolidShare className="text-[#2D9CDB] text-2xl" />
          <h2 className="text-xl font-semibold text-[#464255] lg:text-xl">
            Preview New Letter
          </h2>
        </div>
        <div className="bg-[#B98AFF] text-white text-sm font-medium px-1 h-10 rounded-lg"></div>
      </div>
      {/* body */}
      <div className="md:w-[80%] mx-auto mb-10">
        {/*  */}
        <div className="flex flex-col gap-10">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-[#101828] text-lg font-semibold md:text-xl lg:text-2xl">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour,
            </h1>
            <p className="text-[#101828E5] font-normal text-sm md:text-base">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.{" "}
              <br /> <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.{" "}
              <br /> <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.{" "}
              <br /> <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewNewsLetter
