"use client";
import FiturBar from "@/components/common/FiturBar";
import TableList from "./TableList";
import { PaginationCorporate } from "./Pagination";

const Page = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <FiturBar />
      <TableList />
      <PaginationCorporate />
    </div>
  );
};

export default Page;
