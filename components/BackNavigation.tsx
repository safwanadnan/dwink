'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BackNavigation() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="text-gray-500 hover:text-red-600 bg-none border-none cursor-pointer">
      Products
    </button>
  );
}