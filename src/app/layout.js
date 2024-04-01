import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
       <header className="bg-white">
    <div className="max-w-10xl mx-auto px-4">
        <div className='flex items-center justify-end' >
    <div className='flex items-center text-xs mt-2 justify-between gap-4 font-normal from-neutral-900'>
<p>Help</p>
<p>Orders&returns</p>
<p>Hii, John</p>
<a href="/profile">Profile</a>
    </div>
        </div>
      <div className="flex items-center justify-between h-16" >
      <div className="flex items-center justify-between" >
      <a href="/">
       <h1 className="font-bold text-[32px] cursor-pointer">ECOMERCE</h1>
       </a>
        </div>
        <div className="sm:flex items-center hidden justify-between h-16 gap-8 font-semibold text-base" >
        <h3>Categories</h3>
        <h3>Sale</h3>
        <h3>Clerance</h3>
        <h3>New stock</h3>
        <h3>Trending</h3>
        </div>
        <div className="flex items-center justify-between gap-6" >
        <Image
              src="/SearchIcon.svg"
              alt="serch"
              className="light:invert text-white cursor-pointer"
              width={20}
              height={8}
              priority
            />
        <Image
              src="/shoppingCart.png"
              alt="cart"
              className="light:invert text-white cursor-pointer"
              width={16}
              height={2}
              priority
            />

        </div>
      </div>
    </div>

  </header> 
  <div className="flex justify-center items-center py-2 bg-[#F4F4F4] font-medium text-sm text-[#000000]">
  <p>
    <span className="mr-6">{"<"}</span>
    get 10% off on bussiness sign up 
    <span className="ml-6">{">"}</span>

  </p>
</div>
        {children}
        </body>
    </html>
  );
}
