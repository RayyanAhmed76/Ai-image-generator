module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/my-flux-saas/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/6c4d3_08b744fa._.js",
  "chunks/[root-of-the-server]__30deadbf._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/my-flux-saas/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];