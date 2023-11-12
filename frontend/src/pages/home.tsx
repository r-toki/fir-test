import { useQuery } from "@tanstack/react-query";

import { Fallback } from "~/components/fallback";
import { healthCheck } from "~/firebase/functions";

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["healthCheck"],
    queryFn: healthCheck,
  });

  return (
    <div>
      <h1>Home</h1>

      <Fallback isLoading={isLoading} isError={isError} error={error}>
        {data && (
          <div>
            <div>Fetched.</div>
            <div>{data.message}</div>
          </div>
        )}
      </Fallback>
    </div>
  );
}
