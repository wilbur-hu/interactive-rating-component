"use client";

import ResultCard from "@/app/result/ResultCard";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const params = useSearchParams();

  return (
    <main>
      <ResultCard rate={Number(params.get("rate"))} />
    </main>
  );
}
