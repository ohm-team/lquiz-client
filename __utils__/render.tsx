import { render, RenderOptions, RenderResult } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";

export const BlankWrapper: React.StatelessComponent<{}> = ({
  children,
}: {
  children?: React.ReactNode;
}) => <>{children}</>;

const AllContextProviders = (
  Wrapper: React.ComponentType = BlankWrapper
  // eslint-disable-next-line react/display-name
) => ({ children }: { children?: React.ReactNode }) => {
  return (
    <Wrapper>
      {/** StrictMode is useful for `this.setState` functions to be called twice and to prevent side-effects */}
      <React.StrictMode>{children}</React.StrictMode>
    </Wrapper>
  );
};

/** A global place to insert all the required for tests Context Providers */
const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
): RenderResult => {
  return render(ui, {
    ...options,
    wrapper: AllContextProviders(options?.wrapper),
  });
};

export * from "@testing-library/react";
export { customRender as render };
