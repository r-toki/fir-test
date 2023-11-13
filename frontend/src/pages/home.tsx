import { useQuery } from "@tanstack/react-query";

import { Fallback } from "~/components/fallback";
import { healthCheck } from "~/firebase/functions";

export default function Home() {
  const q1 = useQuery({
    queryKey: ["healthCheck", "1"],
    queryFn: healthCheck,
  });

  const q2 = useQuery({
    queryKey: ["healthCheck", "2"],
    queryFn: healthCheck,
  });

  return (
    <div>
      <h1>Home</h1>

      <div className="space-y-2">
        <Fallback isLoading={q1.isLoading} isError={q1.isError} error={q1.error}>
          {q1.data && (
            <div>
              <div>Fetched q1.</div>
              <div>{q1.data.message}</div>
            </div>
          )}
        </Fallback>

        <Fallback isLoading={q2.isLoading} isError={q2.isError} error={q2.error}>
          {q2.data && (
            <div>
              <div>Fetched q2.</div>
              <div>{q2.data.message}</div>
            </div>
          )}
        </Fallback>
      </div>
    </div>
  );
}
