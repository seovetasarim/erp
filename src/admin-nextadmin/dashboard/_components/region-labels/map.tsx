"use client";

import jsVectorMap from "jsvectormap";
import { useEffect, useRef } from "react";

import "@na/js/us-aea-en";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<InstanceType<typeof jsVectorMap> | null>(null);

  useEffect(() => {
    const container = mapRef.current;
    if (!container) return;

    let map: InstanceType<typeof jsVectorMap> | null = null;

    map = new jsVectorMap({
      selector: container,
      map: "us_aea_en",
      zoomButtons: true,
      showTooltip: false,
      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },
      regionLabelStyle: {
        initial: {
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },
      labels: {
        regions: {
          render(code: string) {
            return code.split("-")[1];
          },
        },
      },
    });

    mapInstanceRef.current = map;

    return () => {
      mapInstanceRef.current = null;
      container.innerHTML = "";
      container.className = "mapOne map-btn h-full w-full";
    };
  }, []);

  return (
    <div className="relative h-[422px] overflow-hidden">
      <div ref={mapRef} className="mapOne map-btn h-full w-full" />
    </div>
  );
}
