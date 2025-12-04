// src/pages/Home.tsx
import React, { useEffect, useState } from "react";
import CompartmentCard from "../components/CompartmentCard";
import { apiGET } from "../api/api";
import {
  scheduleNotifications,
  clearScheduledNotifications,
  ensureNotificationPermission,
} from "../utils/notify";

export default function Home() {
  const [data, setData] = useState<any | null>(null);

  // To prevent repeated notification scheduling
  if (!(window as any).notificationsScheduled) {
    (window as any).notificationsScheduled = false;
  }

  const refresh = async () => {
    try {
      const res = await apiGET("/api/status");
      setData(res);

      // 🔥 FIX: Schedule notifications ONLY once
      if (!(window as any).notificationsScheduled) {
        scheduleNotifications(res.comps);
        (window as any).notificationsScheduled = true;
      }

    } catch (err) {
      console.warn("Fetch error, using fallback UI:", err);
      setData({
        comps: [
          { doses: [] },
          { doses: [] },
          { doses: [] },
          { doses: [] },
        ],
      });

      clearScheduledNotifications();
      (window as any).notificationsScheduled = false;
    }
  };

  useEffect(() => {
    ensureNotificationPermission();
    refresh();

    const timer = setInterval(refresh, 5000);

    return () => {
      clearInterval(timer);
      clearScheduledNotifications();
      (window as any).notificationsScheduled = false;
    };
  }, []);

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading...
      </div>
    );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="mb-8">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          PillBox
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Your medication helper
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.comps?.map((c: any, i: number) => (
          <CompartmentCard
            key={i}
            index={i}
            doses={c.doses}
            refresh={refresh}
          />
        ))}
      </div>
    </div>
  );
}
