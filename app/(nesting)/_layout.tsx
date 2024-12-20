import { Stack, usePathname, useSegments } from "expo-router";
import React, { useState } from "react";
import { Button, Text } from "react-native";

export default () => {
  const [isReady, setIsReady] = useState(false);

  console.log({ segments: useSegments(), pathname: usePathname() });
  if (!isReady) {
    return (
      <>
        <Text>
          Waiting to render the &lt;Stack&gt; from
          /(nesting)/(second)/_layout.tsx until pressing this button
        </Text>
        <Button title="Press me" onPress={() => setIsReady(true)} />
      </>
    );
  }

  return <Stack />;
};
