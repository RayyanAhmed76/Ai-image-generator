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
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/my-flux-saas/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}),
"[project]/my-flux-saas/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentUser",
    ()=>getCurrentUser,
    "getUserUsageCount",
    ()=>getUserUsageCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/lib/prisma.ts [app-route] (ecmascript)");
;
async function getCurrentUser(req) {
    const token = req.cookies.get("flux_auth")?.value;
    if (!token) {
        return null;
    }
    try {
        // Find token in database
        const tokenRecord = await __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].token.findUnique({
            where: {
                token
            },
            include: {
                user: true
            }
        });
        if (!tokenRecord) {
            return null;
        }
        // Check if token is expired
        if (new Date() > tokenRecord.expiresAt) {
            // Delete expired token
            await __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].token.delete({
                where: {
                    id: tokenRecord.id
                }
            });
            return null;
        }
        return tokenRecord.user;
    } catch (error) {
        console.error("Error getting current user:", error);
        return null;
    }
}
async function getUserUsageCount(userId) {
    try {
        const count = await __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].usage.count({
            where: {
                userId
            }
        });
        return count;
    } catch (error) {
        console.error("Error getting usage count:", error);
        return 0;
    }
}
}),
"[project]/my-flux-saas/app/api/check-usage/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/lib/auth.ts [app-route] (ecmascript)");
;
;
const FREE_TRIES_LIMIT = 2;
async function GET(req) {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])(req);
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                authenticated: false
            }, {
                status: 401
            });
        }
        const usageCount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserUsageCount"])(user.id);
        const canUse = user.isSubscribed || usageCount < FREE_TRIES_LIMIT;
        return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            authenticated: true,
            isSubscribed: user.isSubscribed,
            usageCount,
            canUse,
            limitReached: !user.isSubscribed && usageCount >= FREE_TRIES_LIMIT,
            username: user.username,
            email: user.email
        });
    } catch (error) {
        console.error("Error checking usage:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a01d24c4._.js.map