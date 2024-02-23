import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const data = [
  { name: "Bitcoin", value: 1255.0 },
  { name: "Etherum", value: 121 },
  { name: "Nano", value: 255 },
];

const Game: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("log");
      setCount(count + 1);
    });
  }, [api]);

  const handleClick = () => {
    console.log("ok");
    api?.scrollNext();
  };

  return (
    <>
      <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-28 h-28 bg-[#181A1B] z-10 rounded-[50%] flex justify-center items-center">
        <p className="text-[3vh] font-[RooneySansRegular]">VS</p>
      </div>
      <Carousel setApi={setApi} opts={{ watchDrag: false, slidesToScroll: 2 }}>
        <CarouselContent>
          <CarouselItem className="relative basis-1/2 bg-white m-0">
            <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-fit h-fit z-10 text-center">
              <p className="text-[6vh] font-[RooneySansRegular]">“Greece”</p>
              <p className="text-xl font-[RooneySansRegular]">has</p>
              <p
                onClick={handleClick}
                className="text-[6vh] text-[#FFF879] font-[RooneySansRegular]"
              >
                673,000
              </p>
              <p className="text-xl font-[RooneySansRegular]">value</p>
            </div>
            <div className="h-screen w-[150%] text-white bg-[url('https://assets.coingecko.com/coins/images/1/large/bitcoin.png')] brightness-75 bg-no-repeat bg-cover bg-center blur-xl"></div>
          </CarouselItem>

          <CarouselItem className="relative basis-1/2 bg-white m-0">
            <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-fit h-fit z-10 text-center">
              <p className="text-[6vh] font-[RooneySansRegular]">“Greece”</p>
              <p className="text-xl font-[RooneySansRegular]">has</p>
              <div className="flex flex-col gap-4 mt-4">
                <button className="border p-3 rounded-[2rem] text-[#FFF879] hover:bg-[#181A1B] hover:text-white">
                  <p className="text-extrabold text-xl font-[RooneySansRegular]">
                    Higher
                  </p>
                </button>

                <button className="border p-3 rounded-[2rem] text-[#FFF879] hover:bg-[#181A1B] hover:text-white">
                  <p className="text-extrabold text-xl font-[RooneySansRegular]">
                    Lower
                  </p>
                </button>

                <p className="text-xl font-[RooneySansRegular]">value</p>
              </div>
            </div>

            <div className="h-screen w-[150%] text-white bg-[url('https://assets.coingecko.com/coins/images/1/large/bitcoin.png')] brightness-75 bg-no-repeat bg-cover bg-center blur-xl"></div>
          </CarouselItem>

          <CarouselItem className="relative basis-1/2 bg-white m-0">
            <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-fit h-fit z-10 bg-red-500">
              Okazoekazo
            </div>

            <div className="h-screen w-[150%] text-white bg-[url('https://assets.coingecko.com/coins/images/1/large/bitcoin.png')] brightness-75 bg-no-repeat bg-cover bg-center blur-xl"></div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Game;
