import React from "react";

interface DoseProps {
  d: { id: number; ts: number; name: string };
  comp: number;
  refresh: () => void;
}

export default function DoseRow({ d }: DoseProps) {
  return (
    <div className="p-3 border-b text-sm">
      <p className="font-semibold text-gray-700">{d.name}</p>
      <p className="text-gray-500">
        {new Date(d.ts * 1000).toLocaleString()}
      </p>
    </div>
  );
}
