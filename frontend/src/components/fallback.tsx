import { PropsWithChildren } from "react";

export function Fallback(
  props: PropsWithChildren<{
    isLoading: boolean;
    isError: boolean;
    error: unknown;
  }>,
) {
  if (props.isLoading)
    return (
      <div>
        <div>Loading...</div>
      </div>
    );

  if (props.isError)
    if (props.error instanceof Error)
      return (
        <div>
          <div>{props.error.message}</div>
        </div>
      );
    else
      return (
        <div>
          <div>Unknown error happened.</div>
        </div>
      );

  return props.children;
}
