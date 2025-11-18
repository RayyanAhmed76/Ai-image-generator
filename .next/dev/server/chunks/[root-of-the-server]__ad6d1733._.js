module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/my-flux-saas/app/api/fetch_result/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/fetch_result/route.ts
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(req) {
    try {
        const { pollingUrl } = await req.json();
        if (!pollingUrl) return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Missing pollingUrl"
        }, {
            status: 400
        });
        const apiKey = process.env.BFL_API_KEY;
        if (!apiKey) return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Server misconfiguration"
        }, {
            status: 500
        });
        const resp = await fetch(pollingUrl, {
            headers: {
                "x-key": apiKey,
                "Content-Type": "application/json"
            }
        });
        if (resp.status === 204) return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ready: false
        }, {
            status: 200
        });
        const json = await resp.json().catch(()=>null);
        if (!json) return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to parse polling response"
        }, {
            status: 502
        });
        const imageUrl = json?.result?.sample || json?.result?.outputs?.[0]?.url || json?.image_url || json?.data?.url || (typeof json?.output_base64 === "string" ? `data:image/png;base64,${json.output_base64}` : null);
        if (imageUrl) return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            imageUrl
        }, {
            status: 200
        });
        const status = (json?.status || json?.state || "").toString().toLowerCase();
        if (status && (status.includes("ready") || status.includes("succeeded") || status.includes("completed"))) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ready: true,
                imageUrl: null,
                raw: json
            }, {
                status: 200
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ready: false,
            raw: json
        }, {
            status: 200
        });
    } catch (err) {
        console.error("Error in /api/fetch_result:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ad6d1733._.js.map