"use server";

import { redirect } from "next/navigation";

export async function handleRating(rate: number) {
  redirect("/result?rate=" + rate);
}
