import type { NotReadyDefaultConfig } from "@opennextjs/cloudflare";

const config: NotReadyDefaultConfig = {
    default: {
        runtime: "edge",
        wrapper: "cloudflare-node",
        converter: "edge",
        proxyExternalRequest: "fetch",
    },
    middleware: {
        external: true,
    },
};

export default config;
