/** @type {import('@opennextjs/cloudflare').NotReadyDefaultConfig} */
const config = {
    buildCommand: "npm run build:next",
    default: {
        override: {
            wrapper: "cloudflare-node",
            converter: "edge",
            proxyExternalRequest: "fetch",
        },
    },
    middleware: {
        external: true,
        override: {
            wrapper: "cloudflare-edge",
            converter: "edge",
            proxyExternalRequest: "fetch",
        },
    },
};

export default config;
