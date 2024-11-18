'use client'
import { useEffect } from "react";

export default function ClassPage() {
  useEffect(() => {
    window.location.href = 'https://mohammed-tahair-s-school1.teachable.com/courses/enrolled/2680502';
  }, []);

  return <p>Redirecting to your course...</p>;
}