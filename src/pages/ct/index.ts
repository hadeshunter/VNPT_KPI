import React from "react";
import Router, { useRouter } from "next/router";

export default function CartonQRPage() {
  const router = useRouter();
  React.useEffect(() => {
    router.replace("/");
  }, []);
  return null;
}
