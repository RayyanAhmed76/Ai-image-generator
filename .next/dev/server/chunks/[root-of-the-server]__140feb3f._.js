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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentUser",
    ()=>getCurrentUser,
    "getUserUsageCount",
    ()=>getUserUsageCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
;
async function getCurrentUser(req) {
    const token = req.cookies.get("flux_auth")?.value;
    if (!token) {
        return null;
    }
    try {
        // Find token in database
        const tokenRecord = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].token.findUnique({
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].token.delete({
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
        const count = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].usage.count({
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
"[project]/app/api/check-usage/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/check-usage/route.ts
__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stripe/esm/stripe.esm.node.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
;
;
;
;
const FREE_TRIES_LIMIT = 2;
const stripe = process.env.STRIPE_SECRET_KEY && process.env.STRIPE_SECRET_KEY.length > 0 ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15"
}) : null;
async function GET(req) {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])(req);
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                authenticated: false
            }, {
                status: 401
            });
        }
        const usageCount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserUsageCount"])(user.id);
        // default isSubscribed is from user flag, but we'll reconcile with Stripe/subscription below
        let isSubscribed = !!user.isSubscribed;
        // finding latest payment row of current user (contains stripeCustomerId, subscriptionId, etc.)
        let lastPayment = null;
        try {
            lastPayment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].payment.findFirst({
                where: {
                    userId: user.id
                },
                orderBy: {
                    createdAt: "desc"
                }
            });
        } catch (err) {
            console.warn("prisma.payment lookup failed — check model name and migration", err);
            lastPayment = null;
        }
        const dbSubscriptionId = lastPayment?.subscriptionId || lastPayment?.subscription_id || user.subscriptionId || user.subscription_id || null;
        const dbCustomerId = lastPayment?.stripeCustomerId || lastPayment?.stripe_customer_id || user.stripeCustomerId || user.stripe_customer_id || null;
        let subscription = null;
        // If we have a db subscription id and stripe configured, try to retrieve that subscription directly
        if (stripe && dbSubscriptionId) {
            try {
                // retrieve subscription from stripe
                const stripeSub = await stripe.subscriptions.retrieve(dbSubscriptionId, {
                    expand: [
                        "items.data.price"
                    ]
                });
                const anySub = stripeSub;
                const status = anySub.status ?? null;
                const subscribedFlag = status === "active" || status === "trialing";
                const price = anySub.items?.data?.[0]?.price;
                subscription = {
                    status: status,
                    current_period_end: typeof anySub.current_period_end === "number" ? anySub.current_period_end : anySub.current_period_end ?? null,
                    trial_end: anySub.trial_end ?? null,
                    plan_name: subscribedFlag ? price?.nickname || "PRO" : "Free"
                };
                // mark subscribed if subscription is active or trialing
                isSubscribed = subscribedFlag;
            } catch (err) {
                console.warn("stripe.subscriptions.retrieve failed for dbSubscriptionId", dbSubscriptionId, err);
                subscription = null;
            }
        }
        // If still no subscription and we have a customer id and stripe configured, list subscriptions for customer
        if (!subscription && stripe && dbCustomerId) {
            try {
                const subs = await stripe.subscriptions.list({
                    customer: dbCustomerId,
                    status: "all",
                    expand: [
                        "data.items.data.price"
                    ],
                    limit: 10
                });
                const pick = subs.data.find((s)=>s.status === "active" || s.status === "trialing") || subs.data[0] || null;
                if (pick) {
                    const anyPick = pick;
                    const status = anyPick.status ?? null;
                    const subscribedFlag = status === "active" || status === "trialing";
                    const price = anyPick.items?.data?.[0]?.price;
                    subscription = {
                        status: status,
                        current_period_end: typeof anyPick.current_period_end === "number" ? anyPick.current_period_end : anyPick.current_period_end ?? null,
                        trial_end: anyPick.trial_end ?? null,
                        plan_name: subscribedFlag ? price?.nickname || "PRO" : "Free"
                    };
                    isSubscribed = subscribedFlag;
                }
            } catch (err) {
                console.warn("stripe.subscriptions.list failed for customer", dbCustomerId, err);
            }
        }
        if (!subscription) {
            if (user.subscription) {
                const stored = user.subscription;
                const status = stored?.status ?? null;
                const subscribedFlag = status === "active" || status === "trialing";
                subscription = {
                    status: status,
                    current_period_end: stored?.current_period_end ?? null,
                    trial_end: stored?.trial_end ?? null,
                    plan_name: subscribedFlag ? stored?.plan_name || "PRO" : "Free"
                };
                isSubscribed = subscribedFlag || !!user.isSubscribed;
            } else {
                subscription = user.isSubscribed ? {
                    status: "active",
                    current_period_end: null,
                    trial_end: null,
                    plan_name: "PRO"
                } : {
                    status: "none",
                    current_period_end: null,
                    trial_end: null,
                    plan_name: "Free"
                };
                isSubscribed = !!user.isSubscribed;
            }
        }
        const canUse = isSubscribed || usageCount < FREE_TRIES_LIMIT;
        const limitReached = !isSubscribed && usageCount >= FREE_TRIES_LIMIT;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            authenticated: true,
            isSubscribed,
            usageCount,
            canUse,
            limitReached,
            username: user.username,
            email: user.email,
            subscription,
            _debug: {
                dbSubscriptionId,
                dbCustomerId,
                lastPaymentId: lastPayment?.id ?? null
            }
        });
    } catch (error) {
        console.error("Error checking usage:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__140feb3f._.js.map