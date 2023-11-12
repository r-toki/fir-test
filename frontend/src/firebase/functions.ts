import { getHttpsFunctionUrl } from "./config";

type JsonBase = {
  message: string;
};

function toJson(v: Response) {
  return v.json() as Promise<JsonBase>;
}

export function healthCheck() {
  return fetch(getHttpsFunctionUrl("healthCheck")).then(toJson);
}
