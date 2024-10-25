import { Children } from "react";

interface EachUtilInterface<T> {
  of: T[];
  render: (item: T, index: number) => React.ReactNode;
}

const EachUtils = <T>(props: EachUtilInterface<T>) => {
  const { of, render } = props;
  return Children.toArray(
    of.map((item: T, index: number) => render(item, index))
  );
};

export default EachUtils;
