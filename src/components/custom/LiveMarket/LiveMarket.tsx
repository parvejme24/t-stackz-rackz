import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Pagination } from "@heroui/pagination";
import { IoSearchOutline } from "react-icons/io5";
import CoinTable from "@/components/Skeleton/CoinTable";

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
    <div className="bg-[#131313] py-20 text-white">
      <div className="container mx-auto max-w-7xl px-6">
        <h3 className="text-[#C0C0C0] font-bold text-2xl text-center">
          Live Market
        </h3>
        <p className="text-[#C0C0C0] font-semibold text-xl mb-6">
          Cryptocurrency Prices
        </p>

        {/* Categories and Search */}
        <div className="flex justify-between items-center mb-4">
          <ul className="flex items-center flex-wrap gap-2 space-x-3">
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

          <div className="flex items-center border border-[#00F5FF] rounded-lg pl-2 py-1">
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
            <Table aria-label="Live Cryptocurrency Prices">
              <TableHeader>
                <TableColumn>NO</TableColumn>
                <TableColumn>NAME</TableColumn>
                <TableColumn>LAST PRICE (USD)</TableColumn>
                <TableColumn>CHANGE (24H)</TableColumn>
                <TableColumn>MARKET CAP (USD)</TableColumn>
                <TableColumn>TRADE</TableColumn>
              </TableHeader>
              <TableBody>
                {displayedCoins.map((coin, index) => (
                  <TableRow key={coin.code}>
                    <TableCell>
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </TableCell>
                    <TableCell className="flex items-center gap-3">
                      <img
                        src={coin.png64 || ""}
                        alt={coin.name}
                        className="w-6 h-6"
                      />
                      {coin.name} ({coin.code})
                    </TableCell>
                    <TableCell>${coin.rate.toFixed(2)}</TableCell>
                    <TableCell
                      className={
                        coin.delta.day > 0 ? "text-green-500" : "text-red-500"
                      }
                    >
                      {(coin.delta.day * 100 - 100).toFixed(2)}%
                    </TableCell>
                    <TableCell>${coin.cap.toLocaleString()}</TableCell>
                    <TableCell>
                      <a
                        href={`https://www.livecoinwatch.com/price/${coin.code}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        Trade
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            {filteredCoins.length > itemsPerPage && (
              <div className="flex justify-center mt-6">
                <Pagination
                  initialPage={1}
                  total={totalPages}
                  currentPage={currentPage}
                  onChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
