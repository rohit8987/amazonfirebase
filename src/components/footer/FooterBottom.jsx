
const FooterBottom = () => {
  return (
    <div className="w-full bg-footerBottom text-white py-[30px] h-[30rem]">
      <div className="max-w-5xl mx-auto">
        <div className=" w-full grid grid-cols-4 gap-3 place-content-center text-gray-400">
          <div className="footerLink size-xs">
            <h4 className="text-lightText  text-base size-xs mb-1  ">AbeBooks</h4>
            <ul className="gap-1 w-[50px] font-bodyFont   ">
              <li className=" text-gray-500 ">Books,art &collectibles</li>
            </ul>
          </div>
          <div className="footerLink size-xs">
            <h4 className="text-lightText  text-base size-xs mb-1  ">Amazon Web Services</h4>
            <ul className=" gap-1 font-bodyFont text-gray-500    ">
              <li className=" w-[10px]">Scalable CloudComputing Services</li>
            </ul>
          </div>
          <div className="footerLink size-xs">
            <h4 className="text-lightText  text-base size-xs mb-1  ">Audible</h4>
            <ul className="flex flex-col gap-1 font-bodyFont   ">
              <li className=" text-gray-400 w-10">Download
              Audio Books</li>
            </ul>
          </div>
          <div className="footerLink size-xs">
            <h4 className="text-lightText  text-base size-xs mb-1  ">IMDb</h4>
            <ul className="flex flex-col gap-1 font-bodyFont   ">
              <li className=" text-gray-400 w-10">Movies, TV
              & Celebrities</li>
            </ul>
          </div>
        </div>

        <div className=" w-full grid grid-cols-4 gap-3 place-content-center mt-8 text-gray-400">
          <div className="footerLink size-xs">
            <h4 className="text-lightText  text-base size-xs mb-1  ">Shopbop</h4>
            <ul className="gap-1 w-[50px] font-bodyFont   ">
              <li className=" text-gray-500 ">Designer Fashion Brands</li>
            </ul>
          </div>
          <div className="footerLink size-xs">
            <h4 className="text-lightText  text-base size-xs mb-1  ">Amazon Business</h4>
            <ul className=" gap-1 font-bodyFont text-gray-500    ">
              <li className=" w-[10px]">Everything ForYour Business</li>
            </ul>
          </div>
          <div className="footerLink size-xs">
            <h4 className="text-lightText  text-base size-xs mb-1  ">Prime Now</h4>
            <ul className="flex flex-col gap-1 font-bodyFont   ">
              <li className=" text-gray-400 w-10">2Hour-Delivery on Everyday Items</li>
            </ul>
          </div>
          <div className="footerLink size-xs">
            <h4 className="text-lightText  text-base size-xs mb-1  ">IMDb</h4>
            <ul className="flex flex-col gap-1 font-bodyFont   ">
              <li className=" text-gray-400 w-10">100million songs,ad-freeOver 15million podcast episodes </li>
            </ul>
          </div>
        </div>
      </div>
    <div className=" flex justify-center items-center mt-10 text-gray-400 ">
      <div className=" ">
        <ul className="flex gap-1 ">
          <li className="footerLink">Conditions of Use & Sale</li>
          <li className="ml-3 footerLink">Privacy Notice</li>
          <li className="ml-3 footerLink">Interest-Based Ads</li>
        </ul>
        <ul className="justify-center flex gap-1">
          <li>© 1996-2024,</li>
          <li>Amazon.com, </li>
          <li>Inc. or its affiliates</li>
        </ul>
      </div>
      
     
    </div>

     
    </div>
  )
}

export default FooterBottom