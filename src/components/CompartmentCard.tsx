import React, { useState } from "react";
import { apiPOST } from "../api/api";
import DoseRow from "./DoseRow";

interface Props {
  index: number;
  doses: { id: number; ts: number; name: string }[];
  refresh: () => void;
}

export default function CompartmentCard({ index, doses, refresh }: Props) {
  const [dt, setDt] = useState("");
  const [name, setName] = useState("");

  const addDose = async () => {
    if (!dt) return alert("Pick a valid date/time");
    if (!name.trim()) return alert("Enter medicine name");

    const epoch = Math.floor(new Date(dt).getTime() / 1000);

    await apiPOST("/api/set", {
      comp: index,
      ts: epoch,
      name: name.trim(),
    });

    setDt("");
    setName("");
    refresh();
  };

  const resetComp = async () => {
    if (!confirm("Clear all doses?")) return;
    await apiPOST("/api/resetComp", { comp: index });
    refresh();
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-full border border-gray-200">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Compartment {index + 1}</h2>
        <button
          onClick={resetComp}
          className="px-3 py-1 text-sm rounded-lg bg-red-500 text-white"
        >
          Reset
        </button>
      </div>

      {/* Medicine Name */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Medicine name"
        className="border p-2 rounded-lg w-full mb-3"
      />

      {/* DateTime */}
      <div className="flex gap-3 mb-4">
        <input
          type="datetime-local"
          value={dt}
          onChange={(e) => setDt(e.target.value)}
          className="border p-2 rounded-lg flex-1"
        />
        <button
          onClick={addDose}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Add
        </button>
      </div>

      <h3 className="font-semibold text-gray-700 mb-2">Upcoming Doses</h3>

      <div className="border rounded-xl bg-gray-50">
        {doses.length === 0 ? (
          <p className="p-3 text-gray-500">No doses</p>
        ) : (
          doses.map((d) => (
            <DoseRow key={d.id} d={d} comp={index} refresh={refresh} />
          ))
        )}
      </div>
    </div>
  );
}
