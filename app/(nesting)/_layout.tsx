import { Stack, usePathname, useSegments } from "expo-router";
import React from "react";

export default () => {
  console.log("outer", { segments: useSegments(), pathname: usePathname() });

  return <Stack />;
};
