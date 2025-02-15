import { Skeleton } from "@heroui/skeleton";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";

export default function CoinTable() {
  return (
    <div>
      <div className="mt-5">
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
            {[...Array(10)].map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="w-20 h-5" />
                </TableCell>
                <TableCell className="flex items-center gap-3">
                  <Skeleton className="w-16 h-5" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-20 h-5" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-20 h-5" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-20 h-5" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-20 h-5" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
