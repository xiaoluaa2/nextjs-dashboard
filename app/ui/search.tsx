"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((value: string) => {
    console.log(value);
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    setA(value);
  }, 300);
  
  const [a, setA] = useState("");

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e)=>{handleSearch(e.target.value)}}
        value={a}
      />
    </div>
  );
}
