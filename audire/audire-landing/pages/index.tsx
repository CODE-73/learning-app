import React from 'react';
import Image from 'next/image';

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-96 ">
        <Image
          src="/images/loginbackroudImage.svg"
          alt="loginbackroudImage"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-white opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center  ">
          <Image
            src="/images/audire.png"
            alt="Logo"
            width={350}
            height={350}
            className="mb-4  "
          />
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 bg-gray-100">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-fuchsia-800 text-center mb-4 font-black">
            AUDIRE
            <div className="text-xs pl-24 text-black font-mono">
              School OF Commerce
            </div>
          </h1>
          <p className="text-lg font-serif ">
            Transform your CA and CMA studies with our leading learning app.
            Access interactive modules, track progress, and join a supportive
            community. Elevate your financial expertise at your own pace. Start
            excelling today..
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold text-gray-800 mb-2 font-mono">
            Get Started Today
          </h2>
          <p className=" text-xs text-gray-600 ">
            Download our app now and experience amazing features!
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <div className="p-3">
          <Image
            src="/images/google-play.png"
            alt="Google Play"
            width={90}
            height={90}
            
          />
          </div>
          <div className="p-3">
          <Image
            src="/images/app-store.png"
            alt="App Store"
            width={90}
            height={90}
            
          />
          </div>
        </div>
      </main>

      <footer className="bg-fuchsia-200 p-4">
        <p className="text-center text-gray-600 font-sans">
          &copy; {new Date().getFullYear()} AUDIRE LEARNING APP. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default Index;
