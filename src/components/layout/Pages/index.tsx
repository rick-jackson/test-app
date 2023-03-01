import React, { FC } from "react";

import * as Styled from "./index.styled";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Styled.Layout>{children}</Styled.Layout>;
};

export default Layout;
