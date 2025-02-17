import { useEffect, useState } from "react";
import { Pagination } from "@heroui/pagination";
import { IoSearchOutline } from "react-icons/io5";
import CoinTable from "@/components/Skeleton/CoinTable";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const API_KEY = import.meta.env.VITE_LIVECOINWATCH_API_KEY;
const API_URL = "https://api.livecoinwatch.com/coins/list";

interface Coin {
  code: string;
  name: string;
  rate: number;
  cap: number;
  delta: {
    day: number;
  };
  png64?: string;
  categories?: string[];
}

export default function LiveMarket() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [showAllCategories, setShowAllCategories] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const itemsPerPage = 10;

  useEffect(() => {
       AOS.init({ duration: 1000, once: false });

    const fetchMarketData = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-api-key": API_KEY,
          },
          body: JSON.stringify({
            currency: "USD",
            sort: "rank",
            order: "ascending",
            offset: 0,
            limit: 50,
            meta: true,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data: Coin[] = await response.json();
        const uniqueCategories = [
          "All",
          ...new Set(
            data.flatMap(
              (coin) =>
                coin.categories?.map((cat) => cat.replace(/[_-]/g, " ")) || []
            )
          ),
        ];

        setCategories(uniqueCategories);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching market data:", error);
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  const filteredCoins = coins.filter(
    (coin) =>
      (selectedCategory === "All" ||
        coin.categories?.some(
          (cat) => cat.replace(/[_-]/g, " ") === selectedCategory
        )) &&
      (coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coin.code.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredCoins.length / itemsPerPage);
  const displayedCoins = filteredCoins.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div id="liveMarket" className="bg-[#131313] py-20 text-white">
      <div className="container mx-auto max-w-7xl px-6">
        <h3 data-aos="fade-up" className="text-[#C0C0C0] font-bold text-2xl text-center">
          Live Market
        </h3>
        <p data-aos="fade-up" data-aos-delay="200" className="text-[#C0C0C0] font-semibold text-xl mb-6 text-center md:text-left">
          Cryptocurrency Prices
        </p>

        {/* Categories and Search */}
        <div className="flex justify-between items-center flex-wrap gap-7 mb-4">
          <ul className="flex justify-center md:justify-start items-center flex-wrap gap-2 space-x-3">
            {(showAllCategories ? categories : categories.slice(0, 5)).map(
              (category) => (
                <li key={category}>
                  <button
                    className={`transition capitalize inline ${
                      selectedCategory === category
                        ? "text-[#D72638] border-b-2 border-[#D72638] font-semibold"
                        : "hover:text-[#C0C0C0] font-light"
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                  >
                    {category}
                  </button>
                </li>
              )
            )}
            {!showAllCategories && categories.length > 5 && (
              <li>
                <button
                  className="text-[#C0C0C0] hover:text-[#D72638] font-semibold"
                  onClick={() => setShowAllCategories(true)}
                >
                  See All ({categories.length})
                </button>
              </li>
            )}
          </ul>

          <div className="flex mx-auto md:mx-0 items-center border border-[#00F5FF] rounded-lg pl-2 py-1">
            <IoSearchOutline className="text-2xl text-[#00F5FF]" />
            <input
              type="text"
              placeholder="Search coin..."
              className="bg-[#1E1E1E] text-white px-3 py-1 rounded-lg focus:outline-none"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        {loading ? (
          <CoinTable />
        ) : (
          <div className="mt-5">
            {/* Table */}
            <div className="mt-5 overflow-x-auto">
              <table className="bg-[#0D0D0D] w-full text-sm md:text-base text-left border-collapse rounded-lg">
                <thead className="bg-[#0D0D0D] text-white">
                  <tr>
                    <th className="p-2 md:p-3">NO</th>
                    <th className="p-2 md:p-3">NAME</th>
                    <th className="p-2 md:p-3">LAST PRICE (USD)</th>
                    <th className="p-2 md:p-3">CHANGE (24H)</th>
                    <th className="p-2 md:p-3 hidden md:table-cell">
                      MARKET CAP (USD)
                    </th>
                    <th className="p-2 md:p-3 hidden md:table-cell">TRADE</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedCoins.map((coin, index) => (
                    <tr key={coin.code} className="border-b border-gray-700"
                     data-aos="zoom-in-up"  data-aos-once="true">
                      <td className="p-2 md:p-3">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>
                      <td className="p-2 md:p-3 flex items-center gap-2">
                        <img
                          src={coin.png64 || ""}
                          alt={coin.name}
                          className="w-6 h-6"
                        />
                        {coin.name} ({coin.code})
                      </td>
                      <td className="p-2 md:p-3">${coin.rate.toFixed(2)}</td>
                      <td
                        className={`p-2 md:p-3 font-semibold ${
                          coin.delta.day > 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {(coin.delta.day * 100 - 100).toFixed(2)}%
                      </td>
                      <td className="p-2 md:p-3 hidden md:table-cell">
                        ${coin.cap.toLocaleString()}
                      </td>
                      <td className="p-2 md:p-3 hidden md:table-cell">
                        <Link
                          to={`https://www.livecoinwatch.com/price/${coin.name}-${coin.code}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#00F5FF] hover:bg-transparent border border-[#00F5FF] text-[#0D0D0D] duration-300 hover:text-[#00F5FF] px-3 py-1 rounded-md font-semibold"
                        >
                          Trade
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {filteredCoins.length > itemsPerPage && (
              <div className="flex justify-center mt-6">
                <Pagination
                  initialPage={1}
                  total={totalPages}
                  page={currentPage}
                  onChange={setCurrentPage}
                  color="danger"
                />
              </div>
            )}
          </div>
        )}

        <p className="text-center text-white">{displayedCoins.length < 0 ? "No coins found" : ""}</p>
      </div>
    </div>
  );
}
