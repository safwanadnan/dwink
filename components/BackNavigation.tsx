'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BackNavigation() {
  const [backUrl, setBackUrl] = useState('/products');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lastFilter = localStorage.getItem('lastProductFilter');
      if (lastFilter && lastFilter !== 'Show All') {
        setBackUrl(`/products?filter=${encodeURIComponent(lastFilter)}`);
      }
    }
  }, []);

  return (
    <Link href={backUrl} className="text-gray-500 hover:text-red-600">
      Products
    </Link>
  );
}