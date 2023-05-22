import { Loader } from "@mantine/core";
import React from "react";

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Loader color="indigo" size="lg" variant="bars" />
    </div>
  );
};

export default Loading;
