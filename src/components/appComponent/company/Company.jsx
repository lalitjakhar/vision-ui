import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Company = () => {
  const invoices = [
    {
      id: "INV001",
      status: "Paid",
      paymentMethod: "Debit Card",
      amount: "$250.00",
    },
    {
      id: "INV002",
      status: "Paid",
      paymentMethod: "Credit Card",
      amount: "$250.00",
    },
    {
      id: "INV003",
      status: "Paid",
      paymentMethod: "Debit Card",
      amount: "$250.00",
    },
    {
      id: "INV004",
      status: "Paid",
      paymentMethod: "Credit Card",
      amount: "$250.00",
    },
  ];

  return (
    <>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow className="hover:bg-none">
            <TableHead className="w-[100px]">AUTHOR</TableHead>
            <TableHead>FUNCTION</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead className="text-right">EMPLOYED</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Company;
