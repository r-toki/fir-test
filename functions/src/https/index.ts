import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";

setGlobalOptions({
  region: "asia-northeast1",
});

export const healthCheck = onRequest((_req, res) => {
  res.send("Good evening from firebase!");
});
