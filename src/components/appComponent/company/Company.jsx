import React from "react";
import { Box, Typography } from "@mui/material";
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
      paymentMethod: "Debit Card",
      amount: "$250.00",
    },
    {
      id: "INV004",
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
      <Box
        sx={{
          color: "white",
          padding:"2rem",
          borderRadius: "16px",
          background:
            "linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%)",
        }}
      >
        <Typography>Authors Table</Typography>
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
      </Box>
    </>
  );
};

export default Company;
