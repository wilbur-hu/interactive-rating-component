"use client";

import ResultCard from "@/app/result/ResultCard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Main />
    </Suspense>
  );
}

function Main() {
  const params = useSearchParams();

  return (
    <main>
      <ResultCard rate={Number(params.get("rate"))} />
    </main>
  );
}
