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
  { name: "azeaz", value: 255 },
];

const Game: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);
  const [lost, setLost] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      console.log("log");
    });
  }, [api]);

  const handleClickHigher = () => {
    console.log(data[current].value, data[current + 1].value);
    if (data[current].value <= data[current + 1].value) {
      setScore(score + 1);
      api?.scrollNext();
      setCurrent(current + 1);
    } else {
      setLost(true);
      console.log("PERDU");
    }
  };

  const handleClickLower = () => {
    console.log(data[current].value, data[current + 1].value);
    if (data[current].value >= data[current + 1].value) {
      setScore(score + 1);
      api?.scrollNext();
      setCurrent(current + 1);
    } else {
      setLost(true);
      console.log("PERDU");
    }
  };

  return (
    <>
      <p className="absolute bottom-4 left-4 z-20">Score : {score}</p>
      {lost ? (
        <div className="fixed top-0 left-0 w-full h-full  z-50 flex justify-center items-center">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-fit h-fit text-white font-bold z-50 m-auto">
            <p className="text-4xl">You Lost!</p>
            <p>Solve this riddle to continue :</p>
            <p className="mt-4">Riddle...</p>
            <input
              className="border bg-white mt-4 p-2 rounded-2xl"
              placeholder="Response..."
            ></input>
            <button className="ml-4 bg-yellow-500 px-4 py-2 rounded-2xl">
              Guess
            </button>
          </div>

          <div className="w-full h-full bg-black opacity-75"></div>
        </div>
      ) : (
        false
      )}
      <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-28 h-28 bg-[#181A1B] z-10 rounded-[50%] flex justify-center items-center">
        <p className="text-[3vh] font-[RooneySansRegular]">VS</p>
      </div>
      <Carousel
        setApi={setApi}
        opts={{ watchDrag: false, slidesToScroll: 1, align: "start" }}
      >
        <CarouselContent>
          {data.map((value, index) => (
            <CarouselItem className="relative basis-1/2 bg-white m-0">
              {current == index ? (
                <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-fit h-fit z-10 text-center">
                  <p className="text-[6vh] font-[RooneySansRegular]">
                    “{value.name}”
                  </p>
                  <p className="text-xl font-[RooneySansRegular]">has</p>
                  <p className="text-[6vh] text-[#FFF879] font-[RooneySansRegular]">
                    {value.value}
                  </p>
                  <p className="text-xl font-[RooneySansRegular]">value</p>
                </div>
              ) : (
                <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-fit h-fit z-10 text-center">
                  <p className="text-[6vh] font-[RooneySansRegular]">
                    “{value.name}”
                  </p>
                  <p className="text-xl font-[RooneySansRegular]">has</p>
                  <div className="flex flex-col gap-4 mt-4">
                    <button className="border p-3 rounded-[2rem] text-[#FFF879] hover:bg-[#181A1B] hover:text-white">
                      <p
                        onClick={handleClickHigher}
                        className="text-extrabold text-xl font-[RooneySansRegular]"
                      >
                        Higher
                      </p>
                    </button>

                    <button className="border p-3 rounded-[2rem] text-[#FFF879] hover:bg-[#181A1B] hover:text-white">
                      <p
                        onClick={handleClickLower}
                        className="text-extrabold text-xl font-[RooneySansRegular]"
                      >
                        Lower
                      </p>
                    </button>

                    <p className="text-xl font-[RooneySansRegular]">value</p>
                  </div>
                </div>
              )}

              <div className="h-screen w-[150%] text-white bg-[url('https://assets.coingecko.com/coins/images/1/large/bitcoin.png')] brightness-75 bg-no-repeat bg-cover bg-center blur-xl"></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Game;
