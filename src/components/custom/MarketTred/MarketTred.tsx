import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const API_KEY = import.meta.env.VITE_LIVECOINWATCH_API_KEY;
const API_URL = "https://api.livecoinwatch.com/coins/list";

interface Coin {
  code: string;
  name: string;
  rate: number;
  cap: number;
  delta: { day: number };
  png64?: string;
}

export default function MarketTred() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
          },
          body: JSON.stringify({
            currency: "USD",
            sort: "rank",
            order: "ascending",
            offset: 0,
            limit: 4,
            meta: true,
          }),
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const data: Coin[] = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching market data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div className="bg-[#0D0D0D]">
      <div className="container mx-auto max-w-7xl px-6 py-5 md:py-20">
        <h3 className="text-center font-semibold text-base md:text-4xl text-[#C0C0C0] pb-4 md:pb-6">
          Market Trend
        </h3>

        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coins.map(({ code, name, rate, cap, delta, png64 }) => (
              <div
                key={code}
                className="bg-[#1E2124] border border-[#009fa777] p-6 rounded-xl space-y-5"
              >
                <div className="flex justify-between items-center gap-3">
                  <div className="flex items-center gap-3">
                    {png64 && (
                      <img
                        src={png64}
                        alt={name}
                        className="w-10 h-10 rounded-full"
                      />
                    )}
                    <p className="font-bold text-xl text-[#C0C0C0]">{code}</p>
                    <p className="bg-[#C6C6C6] px-2 py-1 rounded-md text-xs text-[#1D1429] inline">
                      {name}
                    </p>
                  </div>
                  <MdArrowOutward className="text-[#00F5FF] text-4xl rounded-full p-2 bg-[#25282B]" />
                </div>

                <div className="border-2 border-[#25282B]"></div>

                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <p className="font-bold text-xl text-[#C0C0C0]">
                      ${rate.toFixed(2)}
                    </p>
                    <p
                      className={`font-bold text-sm ${delta.day > 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      {delta.day}%
                    </p>
                  </div>
                  <div>
                    <p className="text-[#C0C0C0]">
                      Market Cap: ${cap.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
