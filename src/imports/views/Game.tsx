import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useState, useEffect } from 'react';
import CoinGeckoApi from '../api/CoinGeckoApi';
import Coin from '../api/Coin';
import Quiz from '../components/Quizz';

const Game: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);
  const [lost, setLost] = useState(false);
  const [score, setScore] = useState(0);
  const [data, setData] = useState<Coin[]>([]);

  useEffect(() => {
    if (!api) {
      return;
    }

    CoinGeckoApi.getTopCoins()
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      console.log('log');
    });
  }, [api]);

  const handleClickHigher = () => {
    console.log(data[current].price, data[current + 1].price);
    if (data[current].price <= data[current + 1].price) {
      setScore(score + 1);
      api?.scrollNext();
      setCurrent(current + 1);
    } else {
      setLost(true);
      console.log('PERDU');
    }
  };

  const handleClickLower = () => {
    console.log(data[current].price, data[current + 1].price);
    if (data[current].price >= data[current + 1].price) {
      setScore(score + 1);
      api?.scrollNext();
      setCurrent(current + 1);
    } else {
      setLost(true);
      console.log('PERDU');
    }
  };

  function shuffle<T>(array: Array<T>) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const quizzCallback = (isCorrect: boolean, restart: boolean = false) => {
    if (restart) {
      setData(shuffle(data));
      setScore(0);
      setLost(false);
    }

    if (isCorrect) {
      setLost(false);
    }
  };

  return (
    <>
      <p className="absolute text-white bottom-4 left-4 z-20">
        Score : {score}
      </p>
      {lost ? (
        <div className="fixed top-0 left-0 w-full h-full  z-50 flex justify-center items-center">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-fit h-fit text-white font-bold z-50 m-auto">
            <p className="text-4xl">You Lost!</p>
            <p>Solve this riddle to continue :</p>
            <Quiz callback={quizzCallback} />
          </div>

          <div className="w-full h-full bg-black opacity-75"></div>
        </div>
      ) : (
        false
      )}
      <div className="absolute left-0 right-0 top-0 bottom-0 m-auto w-28 h-28 bg-[#181A1B] z-10 rounded-[50%] flex justify-center items-center">
        <p className="text-[3vh] text-white font-[RooneySansRegular]">VS</p>
      </div>
      <Carousel
        className="m-0"
        setApi={setApi}
        opts={{ watchDrag: false, slidesToScroll: 1, align: 'start' }}
      >
        <CarouselContent className="m-0">
          {data.map((value, index) => (
            <CarouselItem
              key={index}
              className="relative basis-1/2 text-black h-screen bg-no-repeat bg-center bg-white border border-black"
              style={{
                backgroundImage: `url(${value.imageUrl})`,
                backgroundSize: '50%',
              }}
            >
              <div className="h-full flex flex-col items-center justify-center bg-black/50 text-white">
                {current == index ? (
                  <>
                    <p className="text-[6vh] font-[RooneySansRegular]">
                      “{value.name}”
                    </p>
                    <p className="text-xl font-[RooneySansRegular]">has</p>
                    <p className="text-[6vh] text-[#FFF879] font-[RooneySansRegular]">
                      {value.price} €
                    </p>
                    <p className="text-xl font-[RooneySansRegular]">value</p>
                  </>
                ) : (
                  <>
                    <p className="text-[6vh] font-[RooneySansRegular]">
                      “{value.name}”
                    </p>
                    <p className="text-xl font-[RooneySansRegular]">is</p>
                    <div className="flex flex-col gap-4 mt-4">
                      <button
                        onClick={handleClickHigher}
                        className="border py-3 px-16 rounded-[2rem] text-[#FFF879] bg-black/60 hover:bg-[#181A1B] hover:text-white"
                      >
                        <p className="text-extrabold text-xl text-[#FFF879] font-[RooneySansRegular]">
                          Higher
                        </p>
                      </button>

                      <button
                        onClick={handleClickLower}
                        className="border py-3 px-16 rounded-[2rem] text-[#FFF879] bg-black/60 hover:bg-[#181A1B] hover:text-white"
                      >
                        <p className="text-extrabold text-xl text-[#FFF879] font-[RooneySansRegular]">
                          Lower
                        </p>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default Game;
