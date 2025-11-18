module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/my-flux-saas/components/Nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Nav() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // avatar dropdown
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // mobile sidebar state
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("User");
    const [userInitial, setUserInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("U");
    // subscription state
    const [subscription, setSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [subLoading, setSubLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const mobileNavWidthRem = 11; //used in css for rem
    function toDate(value) {
        if (!value) return null;
        if (typeof value === "number") {
            return value > 1e12 ? new Date(value) : new Date(value * 1000);
        }
        // string: try ISO
        const d = new Date(value);
        return isNaN(d.getTime()) ? null : d;
    }
    function daysLeft(until) {
        const d = toDate(until);
        if (!d) return null;
        const now = new Date();
        const ms = d.getTime() - now.getTime();
        return Math.ceil(ms / (1000 * 60 * 60 * 24));
    }
    // Fetch user & subscription info on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchUserInfo = async ()=>{
            try {
                const res = await fetch("/api/check-usage");
                const data = await res.json();
                if (data?.authenticated && data?.username) {
                    setUsername(data.username);
                    setUserInitial(data.username.charAt(0).toUpperCase());
                }
                // Try to read subscription info from this endpoint if provided
                if (data?.subscription) {
                    setSubscription(data.subscription);
                    setSubLoading(false);
                    return;
                }
                // fallback: hit a dedicated subscription endpoint
                try {
                    const res2 = await fetch("/api/subscription-status");
                    if (res2.ok) {
                        const sdata = await res2.json();
                        setSubscription(sdata || null);
                    } else {
                        setSubscription(null);
                    }
                } catch (err) {
                    console.warn("subscription-status fetch failed", err);
                    setSubscription(null);
                }
            } catch (err) {
                console.error("Error fetching user info:", err);
                setSubscription(null);
            } finally{
                setSubLoading(false);
            }
        };
        fetchUserInfo();
    }, []);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function handleDocumentClick(e) {
            if (!dropdownRef.current) return;
            if (!dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("click", handleDocumentClick);
        return ()=>document.removeEventListener("click", handleDocumentClick);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMobileOpen(false);
    }, [
        pathname
    ]);
    // Add/remove a class on body and inject CSS to center content while mobile nav is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const CLASS = "mobile-nav-open";
        const STYLE_ID = "mobile-nav-open-style";
        function addStyle() {
            if (document.getElementById(STYLE_ID)) return;
            const style = document.createElement("style");
            style.id = STYLE_ID;
            style.innerHTML = `
        /* Centers the main app content when mobile nav is open.
           Adjust the selector (#__next > *) if your app structure differs. */
        body.${CLASS} #__next > * {
          margin-left: auto !important;
          margin-right: auto !important;
          max-width: calc(100% - ${mobileNavWidthRem}rem) !important; /* account for nav width + gap */
        }

        @media (max-width: 420px) {
          body.${CLASS} #__next > * {
            max-width: calc(100% - ${mobileNavWidthRem - 0.5}rem) !important;
          }
        }
      `;
            document.head.appendChild(style);
        }
        if (mobileOpen) {
            document.body.classList.add(CLASS);
            addStyle();
        } else {
            document.body.classList.remove(CLASS);
        }
        return ()=>{
            document.body.classList.remove(CLASS);
        };
    }, [
        mobileOpen
    ]);
    const handleLogout = async ()=>{
        try {
            await fetch("/api/logout", {
                method: "POST"
            });
            window.dispatchEvent(new CustomEvent("app:notify", {
                detail: {
                    message: "Logged out"
                }
            }));
            setTimeout(()=>router.push("/login"), 600);
        } catch (err) {
            window.dispatchEvent(new CustomEvent("app:notify", {
                detail: {
                    message: "Logout failed"
                }
            }));
        }
    };
    // mobile closed transform: slide out to the right. On sm+ we always show (sm:translate-x-0)
    const mobileClosedTransform = mobileOpen ? "translate-x-0" : "translate-x-full";
    // border: default (mobile) use left border because nav sits on right; on sm+ (desktop) use right border (nav on left)
    const borderResponsive = "border-l border-purple-700/50 sm:border-r sm:border-l-0";
    // helpers for rendering subscription UI
    const renderSubscriptionRow = ()=>{
        if (subLoading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-2 text-xs text-purple-200",
                children: "Loading subscription…"
            }, void 0, false, {
                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this);
        }
        const s = subscription || {
            status: "none"
        };
        if (s.status === "trialing" || s.status === "trial") {
            const days = daysLeft(s.trial_end);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-purple-100",
                        children: "Free trial"
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-purple-200",
                        children: days === null ? "Trial active" : days > 0 ? `${days} day${days > 1 ? "s" : ""} left` : "Trial ending soon"
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push("/subscribe"),
                            className: "block w-full text-center px-2 py-1 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm font-medium",
                            type: "button",
                            children: "Upgrade"
                        }, void 0, false, {
                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this);
        }
        if (s.status === "active" || s.status === "paid" || s.status === "subscribed") {
            const nextDate = toDate(s.current_period_end);
            const formatted = nextDate ? new Intl.DateTimeFormat(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric"
            }).format(nextDate) : "Next billing available";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-purple-100",
                        children: "Subscribed"
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-purple-200",
                        children: [
                            "Next billing: ",
                            formatted
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push("/account"),
                            className: "block w-full cursor-pointer text-center px-2 py-1 rounded-md border hover:bg-purple-500 border-purple-600 text-purple-100 text-sm font-medium",
                            type: "button",
                            children: "Manage"
                        }, void 0, false, {
                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this);
        }
        // canceled or none
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-medium text-purple-100",
                    children: "Not subscribed"
                }, void 0, false, {
                    fileName: "[project]/my-flux-saas/components/Nav.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-purple-200",
                    children: "Start a 7-day trial or subscribe for full access."
                }, void 0, false, {
                    fileName: "[project]/my-flux-saas/components/Nav.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/account"),
                        className: "block w-full text-center px-2 py-1 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-sm font-medium",
                        type: "button",
                        children: "Subscribe"
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-flux-saas/components/Nav.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-flux-saas/components/Nav.tsx",
            lineNumber: 230,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": mobileOpen ? "Close navigation" : "Open navigation",
                onClick: ()=>setMobileOpen((s)=>!s),
                className: `${mobileOpen ? "" : "sm:hidden fixed top-4 right-4 z-50 bg-purple-800/90 text-white p-2 rounded-md shadow-lg focus:outline-none"}`,
                children: mobileOpen ? "" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4 6h16M4 12h16M4 18h16"
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 256,
                        columnNumber: 125
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-flux-saas/components/Nav.tsx",
                    lineNumber: 256,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": !mobileOpen,
                onClick: ()=>setMobileOpen(false),
                className: `sm:hidden fixed inset-0 bg-black/40 z-30 transition-opacity ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`
            }, void 0, false, {
                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-0 h-full z-40 flex flex-col py-4 sm:py-6
          bg-gradient-to-b from-purple-900/90 via-purple-800/90 to-indigo-900/90 backdrop-blur-md
          transition-transform duration-300 ease-in-out transform
          ${mobileClosedTransform} sm:translate-x-0
          right-0 sm:left-0 sm:right-auto
          w-44 sm:w-16 ${borderResponsive}`,
                style: {
                    willChange: "transform"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 sm:mb-8 w-full flex items-center justify-center sm:justify-center px-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 sm:w-16 sm:h-16 rounded-xl p-1.5 sm:p-2 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/logo.png",
                                        alt: "Logo",
                                        className: "w-full h-full object-contain",
                                        onError: (e)=>{
                                            const target = e.target;
                                            target.style.display = "none";
                                            if (target.parentElement) {
                                                target.parentElement.innerHTML = '<div class="w-full h-full rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm sm:text-xl">AI</div>';
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `${mobileOpen ? "inline-block" : "hidden"} sm:hidden text-white font-semibold text-lg ml-2 truncate`,
                                    children: "Bunyad"
                                }, void 0, false, {
                                    fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 w-full px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: `flex items-center gap-3 p-2 rounded-lg transition-all w-full
              ${pathname === "/" ? "bg-purple-600/50 text-white shadow-lg" : "text-purple-200 hover:bg-purple-700/30 hover:text-white"}
              ${mobileOpen ? "justify-start pl-3" : "justify-center"}`,
                                title: "Dashboard",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${mobileOpen ? "inline-block" : "hidden"} sm:hidden text-sm font-medium`,
                                        children: "Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/subscribe"),
                                className: `flex items-center gap-3 p-2 rounded-lg transition-all w-full
              ${pathname === "/subscribe" ? "bg-purple-600/50 text-white shadow-lg" : "text-purple-200 hover:bg-purple-700/30 hover:text-white"}
              ${mobileOpen ? "justify-start pl-3" : "justify-center"}`,
                                title: "Plans",
                                type: "button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${mobileOpen ? "inline-block" : "hidden"} sm:hidden text-sm font-medium`,
                                        children: "Plans"
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about",
                                className: `flex items-center gap-3 p-2 rounded-lg transition-all w-full
              ${pathname === "/about" ? "bg-purple-600/50 text-white shadow-lg" : "text-purple-200 hover:bg-purple-700/30 hover:text-white"}
              ${mobileOpen ? "justify-start pl-3" : "justify-center"}`,
                                title: "Homepage",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                        lineNumber: 342,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${mobileOpen ? "inline-block" : "hidden"} sm:hidden text-sm font-medium`,
                                        children: "Homepage"
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto w-full px-2 pb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: dropdownRef,
                            className: "relative w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpen((s)=>!s),
                                    "aria-haspopup": "true",
                                    "aria-expanded": open,
                                    className: `w-full flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer
                text-purple-200 hover:bg-purple-700/30 hover:text-white
                ${mobileOpen ? "justify-start pl-3" : "justify-center"}`,
                                    title: username,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-semibold text-white text-xs sm:text-sm shadow-lg flex-shrink-0",
                                            children: userInitial
                                        }, void 0, false, {
                                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${mobileOpen ? "inline-block" : "hidden"} sm:hidden ml-1 text-sm font-medium`,
                                            children: username
                                        }, void 0, false, {
                                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute right-full mr-2 bottom-0 w-44 sm:w-48 bg-purple-800/95 backdrop-blur-md border border-purple-600/50 rounded-lg shadow-xl z-50 sm:left-full sm:ml-2 sm:right-auto ${open ? "block" : "hidden"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-2 py-1.5 text-sm text-purple-100 font-semibold",
                                                children: username
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2",
                                                children: renderSubscriptionRow()
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 border-t border-purple-700/50 pt-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleLogout,
                                                    className: "w-full flex items-center gap-2 px-2 py-2 text-sm text-purple-200 hover:bg-purple-700/50 rounded cursor-pointer transition-colors",
                                                    "aria-label": "Logout",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Logout"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                            lineNumber: 351,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/my-flux-saas/app/account/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$components$2f$Nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/components/Nav.tsx [app-ssr] (ecmascript)"); // adjust path
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AccountPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [subLoading, setSubLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            try {
                const res = await fetch("/api/check-usage");
                if (!res.ok) throw new Error("Failed");
                const json = await res.json();
                setData(json);
            } catch (e) {
                setErr("Failed to load account data.");
                console.error(e);
            } finally{
                setLoading(false);
            }
        })();
    }, []);
    function formatDate(val) {
        if (!val) return "—";
        const d = typeof val === "number" ? new Date(val * 1000) : new Date(val);
        return d.toLocaleDateString();
    }
    async function openPortal() {
        setSubLoading(true);
        await new Promise((resolve)=>requestAnimationFrame(()=>resolve(null)));
        try {
            const res = await fetch("/api/create-portal-session", {
                method: "POST"
            });
            const json = await res.json();
            if (json?.url) {
                window.location.href = json.url;
            } else {
                setErr("Could not open billing portal.");
            }
        } catch (e) {
            console.error(e);
            setErr("Could not open billing portal.");
        } finally{
            setSubLoading(false);
        }
    }
    const sub = data?.subscription ?? null;
    const username = data?.username ?? "User";
    const isSubscribed = data?.isSubscribed ?? false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$components$2f$Nav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-3xl mx-auto px-6 lg:pl-28 lg:pr-8 p-6 pt-20 sm:pt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-purple-100 mb-2",
                        children: "Account & Billing"
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/app/account/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-purple-200 mb-6",
                        children: "Manage your subscription, payment methods and invoices."
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/app/account/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 p-3 rounded-lg bg-red-50 text-red-800 border border-red-200",
                        children: err
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/app/account/page.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/40 border border-purple-700/30 rounded-2xl p-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-purple-200",
                                                children: "User"
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-semibold text-purple-100",
                                                children: username
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-purple-200",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-lg font-semibold text-purple-100",
                                                children: sub ? sub.status ?? "Unknown" : isSubscribed ? "Active" : "Not subscribed"
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-purple-200",
                                                children: "Plan"
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-purple-100",
                                                children: sub?.plan_name ?? (isSubscribed ? "PRO" : "Free")
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-purple-200",
                                                children: "Next billing"
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-purple-100",
                                                children: formatDate(sub?.current_period_end)
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-purple-200",
                                                children: "Trial ends"
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-purple-100",
                                                children: formatDate(sub?.trial_end)
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: openPortal,
                                        disabled: subLoading,
                                        className: "px-4 py-2 cursor-pointer rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold hover:brightness-105 disabled:opacity-50",
                                        children: subLoading ? "Opening portal…" : "Manage subscription"
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/subscribe"),
                                        className: "px-4 py-2 cursor-pointer rounded-xl border border-purple-600 text-purple-100 hover:bg-purple-700/20",
                                        children: "View plans"
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-flux-saas/app/account/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/30 border border-purple-700/20 rounded-2xl p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-purple-100 mb-3",
                                children: "Invoices & Payments"
                            }, void 0, false, {
                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-purple-200",
                                children: "You can view your invoices and payment history in the Stripe Customer Portal."
                            }, void 0, false, {
                                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-flux-saas/app/account/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-auto bg-white/6 rounded-lg p-6 flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 bg-blue-400 rounded-full animate-bounce"
                                }, void 0, false, {
                                    fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 bg-blue-400 rounded-full animate-bounce",
                                    style: {
                                        animationDelay: "0.15s"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 bg-blue-400 rounded-full animate-bounce",
                                    style: {
                                        animationDelay: "0.3s"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/my-flux-saas/app/account/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-flux-saas/app/account/page.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white",
                            children: "Loading account…"
                        }, void 0, false, {
                            fileName: "[project]/my-flux-saas/app/account/page.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-flux-saas/app/account/page.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this),
            subLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-60 flex items-center justify-center bg-black/60",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 border-4 border-gray-300 border-t-blue-400 rounded-full animate-spin mb-4"
                        }, void 0, false, {
                            fileName: "[project]/my-flux-saas/app/account/page.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white",
                            children: "Opening billing portal…"
                        }, void 0, false, {
                            fileName: "[project]/my-flux-saas/app/account/page.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-flux-saas/app/account/page.tsx",
                    lineNumber: 156,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-flux-saas/app/account/page.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-flux-saas/app/account/page.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0977364d._.js.map