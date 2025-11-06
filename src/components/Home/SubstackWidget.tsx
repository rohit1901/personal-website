"use client";
import React, { useEffect, useRef } from "react";
import { useScript } from "usehooks-ts";
/**
 * Supascribe Embed Widget
    <!-- Subscribe embed code -->
    <div data-supascribe-embed-id="449499337144" data-supascribe-subscribe></div>


    <!-- Supascribe Script -->
    <script src="https://js.supascribe.com/v1/loader/ZRx5S40b53OdCHsvruh3WhbhPez2.js" async></script>
 */

export const SubstackWidget = () => {
  const status = useScript(
    `https://js.supascribe.com/v1/loader/ZRx5S40b53OdCHsvruh3WhbhPez2.js`,
    {
      removeOnUnmount: true,
      id: "custom-substack-script",
    },
  );
  const customSubstackRef = useRef<HTMLDivElement>(null);

  return (
    <div
      data-supascribe-embed-id="449499337144"
      data-supascribe-subscribe
      className="w-full"
      ref={customSubstackRef}
    ></div>
  );
};
