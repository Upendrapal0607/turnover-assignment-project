"use client";
import React from "react";

export const Pagination = ({ page, setPage, total }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        style={{ borderRadius: "4px" }}
        className="px-4 py-1 font-bold text-lg bg-black text-white cursor-pointer"
        disabled={page == 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        {"<"}
      </button>
      <button>{page}</button>
      <button
        style={{ borderRadius: "4px" }}
        className="px-4 py-1 font-bold text-lg bg-black text-white cursor-pointer"
        disabled={page == total}
        onClick={() => setPage((prev) => prev + 1)}
      >
        {">"}
      </button>
    </div>
  );
};
