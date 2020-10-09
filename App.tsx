import React from "react";
import AppLayout from "./src/components/AppLayout";
import Pages from "./src/pages";

const App: React.FC = () => {
  return (
    <AppLayout>
      <Pages />
    </AppLayout>
  );
};

export default App;
