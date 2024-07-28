import { Type } from "@sinclair/typebox";

import type { IpEchoFunction } from "@cloudflare-ddns/ip-echo-parser";

export const schema = Type.Object(
  {
    trim: Type.Boolean({ default: false })
  },
  {
    $id: "https://joshuaavalon.github.io/docker-cloudflare/ip-echo-parser-text/options.schema.json",
    additionalProperties: false
  }
);

export const parser: IpEchoFunction<typeof schema> = async (echo, opts) => {
  const { trim } = opts;
  let echoTrimed = trim ? echo.trim() : echo;
  let echoIp = echoTrimed.match(/(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))/);
  return echoIp[0];
};
