export default function CoinTable() {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="bg-[#0D0D0D] w-full border-collapse rounded-lg border border-gray-700">
        <thead>
          <tr className="bg-[#0D0D0D] text-white">
            <th className="p-3 border border-gray-700">NO</th>
            <th className="p-3 border border-gray-700">NAME</th>
            <th className="p-3 border border-gray-700">LAST PRICE (USD)</th>
            <th className="p-3 border border-gray-700">CHANGE (24H)</th>
            <th className="p-3 border border-gray-700">MARKET CAP (USD)</th>
            <th className="p-3 border border-gray-700">TRADE</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr key={index} className="bg-[#0D0D0D] border border-gray-700">
              <td className="p-3 border border-gray-700">
                <div className="w-20 h-5 bg-gray-700 animate-pulse" />
              </td>
              <td className="p-3 border border-gray-700">
                <div className="w-16 h-5 bg-gray-700 animate-pulse" />
              </td>
              <td className="p-3 border border-gray-700">
                <div className="w-20 h-5 bg-gray-700 animate-pulse" />
              </td>
              <td className="p-3 border border-gray-700">
                <div className="w-20 h-5 bg-gray-700 animate-pulse" />
              </td>
              <td className="p-3 border border-gray-700">
                <div className="w-20 h-5 bg-gray-700 animate-pulse" />
              </td>
              <td className="p-3 border border-gray-700">
                <div className="w-20 h-5 bg-gray-700 animate-pulse" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
