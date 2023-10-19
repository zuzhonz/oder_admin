import EnvlopLayout from "@/components/envelop/EnvlopLayout";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <EnvlopLayout>{children}</EnvlopLayout>;
};
export default Layout;
