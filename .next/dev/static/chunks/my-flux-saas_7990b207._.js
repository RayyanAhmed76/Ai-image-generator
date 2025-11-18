(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-flux-saas/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Nav() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // avatar dropdown
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // mobile sidebar state
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("User");
    const [userInitial, setUserInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("U");
    // subscription state
    const [subscription, setSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [subLoading, setSubLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const fetchUserInfo = {
                "Nav.useEffect.fetchUserInfo": async ()=>{
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
                }
            }["Nav.useEffect.fetchUserInfo"];
            fetchUserInfo();
        }
    }["Nav.useEffect"], []);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            function handleDocumentClick(e) {
                if (!dropdownRef.current) return;
                if (!dropdownRef.current.contains(e.target)) {
                    setOpen(false);
                }
            }
            document.addEventListener("click", handleDocumentClick);
            return ({
                "Nav.useEffect": ()=>document.removeEventListener("click", handleDocumentClick)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            setMobileOpen(false);
        }
    }["Nav.useEffect"], [
        pathname
    ]);
    // Add/remove a class on body and inject CSS to center content while mobile nav is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
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
            return ({
                "Nav.useEffect": ()=>{
                    document.body.classList.remove(CLASS);
                }
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], [
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-purple-100",
                        children: "Free trial"
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-purple-200",
                        children: days === null ? "Trial active" : days > 0 ? `${days} day${days > 1 ? "s" : ""} left` : "Trial ending soon"
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-purple-100",
                        children: "Subscribed"
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/components/Nav.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-medium text-purple-100",
                    children: "Not subscribed"
                }, void 0, false, {
                    fileName: "[project]/my-flux-saas/components/Nav.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-purple-200",
                    children: "Start a 7-day trial or subscribe for full access."
                }, void 0, false, {
                    fileName: "[project]/my-flux-saas/components/Nav.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": mobileOpen ? "Close navigation" : "Open navigation",
                onClick: ()=>setMobileOpen((s)=>!s),
                className: `${mobileOpen ? "" : "sm:hidden fixed top-4 right-4 z-50 bg-purple-800/90 text-white p-2 rounded-md shadow-lg focus:outline-none"}`,
                children: mobileOpen ? "" : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": !mobileOpen,
                onClick: ()=>setMobileOpen(false),
                className: `sm:hidden fixed inset-0 bg-black/40 z-30 transition-opacity ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`
            }, void 0, false, {
                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 sm:mb-8 w-full flex items-center justify-center sm:justify-center px-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 sm:w-16 sm:h-16 rounded-xl p-1.5 sm:p-2 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 w-full px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: `flex items-center gap-3 p-2 rounded-lg transition-all w-full
              ${pathname === "/" ? "bg-purple-600/50 text-white shadow-lg" : "text-purple-200 hover:bg-purple-700/30 hover:text-white"}
              ${mobileOpen ? "justify-start pl-3" : "justify-center"}`,
                                title: "Dashboard",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/subscribe"),
                                className: `flex items-center gap-3 p-2 rounded-lg transition-all w-full
              ${pathname === "/subscribe" ? "bg-purple-600/50 text-white shadow-lg" : "text-purple-200 hover:bg-purple-700/30 hover:text-white"}
              ${mobileOpen ? "justify-start pl-3" : "justify-center"}`,
                                title: "Plans",
                                type: "button",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/about",
                                className: `flex items-center gap-3 p-2 rounded-lg transition-all w-full
              ${pathname === "/about" ? "bg-purple-600/50 text-white shadow-lg" : "text-purple-200 hover:bg-purple-700/30 hover:text-white"}
              ${mobileOpen ? "justify-start pl-3" : "justify-center"}`,
                                title: "Homepage",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto w-full px-2 pb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: dropdownRef,
                            className: "relative w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpen((s)=>!s),
                                    "aria-haspopup": "true",
                                    "aria-expanded": open,
                                    className: `w-full flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer
                text-purple-200 hover:bg-purple-700/30 hover:text-white
                ${mobileOpen ? "justify-start pl-3" : "justify-center"}`,
                                    title: username,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-semibold text-white text-xs sm:text-sm shadow-lg flex-shrink-0",
                                            children: userInitial
                                        }, void 0, false, {
                                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute right-full mr-2 bottom-0 w-44 sm:w-48 bg-purple-800/95 backdrop-blur-md border border-purple-600/50 rounded-lg shadow-xl z-50 sm:left-full sm:ml-2 sm:right-auto ${open ? "block" : "hidden"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-2 py-1.5 text-sm text-purple-100 font-semibold",
                                                children: username
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2",
                                                children: renderSubscriptionRow()
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 border-t border-purple-700/50 pt-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleLogout,
                                                    className: "w-full flex items-center gap-2 px-2 py-2 text-sm text-purple-200 hover:bg-purple-700/50 rounded cursor-pointer transition-colors",
                                                    "aria-label": "Logout",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-flux-saas/components/Nav.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(Nav, "iGNjdZhZjw94W1j+QsBm6mdYnZc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-flux-saas/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-flux-saas/components/Nav.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Page() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [base64Image, setBase64Image] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resultUrl, setResultUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showLoader, setShowLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sliderPosition, setSliderPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const confettiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pollIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const checkUsage = {
                "Page.useEffect.checkUsage": async ()=>{
                    try {
                        const res = await fetch("/api/check-usage");
                        const data = await res.json();
                        if (data.limitReached && !data.isSubscribed) {
                            router.replace("/subscribe");
                        }
                    } catch (err) {
                        console.error("Error checking usage:", err);
                    }
                }
            }["Page.useEffect.checkUsage"];
            checkUsage();
        }
    }["Page.useEffect"], [
        router
    ]);
    // Cleanup polling interval on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            return ({
                "Page.useEffect": ()=>{
                    if (pollIntervalRef.current) {
                        clearInterval(pollIntervalRef.current);
                        pollIntervalRef.current = null;
                    }
                }
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    // toast
    const [toastMsg, setToastMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toastTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const handler = {
                "Page.useEffect.handler": (e)=>{
                    const detail = e?.detail;
                    showToast(detail?.message ?? "Notification");
                }
            }["Page.useEffect.handler"];
            window.addEventListener("app:notify", handler);
            return ({
                "Page.useEffect": ()=>window.removeEventListener("app:notify", handler)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    const showToast = (text, ms = 3000)=>{
        setToastMsg(text);
        if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
        toastTimerRef.current = window.setTimeout(()=>setToastMsg(null), ms);
    };
    // confetti (same simple impl)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!resultUrl) return;
            const container = confettiRef.current;
            if (!container) return;
            container.innerHTML = "";
            const colors = [
                "#60A5FA",
                "#F97316",
                "#34D399",
                "#F472B6",
                "#F59E0B",
                "#A78BFA"
            ];
            for(let i = 0; i < 14; i++){
                const el = document.createElement("span");
                el.className = "confetti-piece absolute rounded-sm";
                el.style.left = `${20 + Math.random() * 60}%`;
                el.style.top = `${10 + Math.random() * 30}%`;
                el.style.width = `${6 + Math.random() * 8}px`;
                el.style.height = `${10 + Math.random() * 10}px`;
                el.style.background = colors[Math.floor(Math.random() * colors.length)];
                el.style.transform = `translateY(-10px) rotate(${Math.random() * 360}deg)`;
                el.style.opacity = "0";
                el.style.animation = `confetti ${900 + Math.random() * 400}ms cubic-bezier(.2,.8,.2,1) forwards ${Math.random() * 200}ms`;
                container.appendChild(el);
            }
            const t = setTimeout({
                "Page.useEffect.t": ()=>container.innerHTML = ""
            }["Page.useEffect.t"], 1600);
            return ({
                "Page.useEffect": ()=>clearTimeout(t)
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        resultUrl
    ]);
    // file select
    const handleFileSelect = (file)=>{
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = ()=>{
            const r = reader.result;
            if (!r) {
                showToast("Failed to read file");
                return;
            }
            setImagePreview(r);
            const comma = r.indexOf(",");
            const plain = comma >= 0 ? r.slice(comma + 1) : r;
            setBase64Image(plain);
            showToast("Image ready -> now enter a prompt");
        };
        reader.readAsDataURL(file);
    };
    const onDrop = (e)=>{
        e.preventDefault();
        handleFileSelect(e.dataTransfer?.files?.[0] ?? null);
    };
    const onDragOver = (e)=>e.preventDefault();
    const handleGenerate = async ()=>{
        if (!base64Image) return showToast("Upload an image first");
        if (!prompt.trim()) return showToast("Enter a prompt");
        setShowLoader(true);
        setLoading(true);
        try {
            const res = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt,
                    base64Image
                })
            });
            const json = await res.json();
            if (res.status === 403 && json?.limitReached) {
                showToast("Free trial limit reached. Redirecting to subscription...");
                setTimeout(()=>{
                    window.location.href = "/subscribe";
                }, 2000);
                return;
            }
            if (res.status === 401) {
                showToast("Please log in to continue");
                setTimeout(()=>{
                    window.location.href = "/login";
                }, 2000);
                return;
            }
            if (json?.image) {
                setResultUrl(json.image);
                setShowLoader(false);
                showToast("Generated!");
                return;
            }
            if (json?.polling_url) {
                // Start polling for async results
                showToast("Submitted —> now processing...");
                const pollingUrl = json.polling_url;
                let pollAttempts = 0;
                const maxAttempts = 60; // 5 minutes max (5s intervals)
                // Clear any existing polling interval
                if (pollIntervalRef.current) {
                    clearInterval(pollIntervalRef.current);
                }
                pollIntervalRef.current = setInterval(async ()=>{
                    pollAttempts++;
                    try {
                        const pollRes = await fetch("/api/fetch_result", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                pollingUrl
                            })
                        });
                        const pollData = await pollRes.json();
                        if (pollData?.imageUrl) {
                            if (pollIntervalRef.current) {
                                clearInterval(pollIntervalRef.current);
                                pollIntervalRef.current = null;
                            }
                            setResultUrl(pollData.imageUrl);
                            setShowLoader(false);
                            setLoading(false);
                            showToast("Generated!");
                        } else if (pollAttempts >= maxAttempts) {
                            if (pollIntervalRef.current) {
                                clearInterval(pollIntervalRef.current);
                                pollIntervalRef.current = null;
                            }
                            setShowLoader(false);
                            setLoading(false);
                            showToast("Generation timeout. Please try again.");
                        }
                    // If ready: false, continue polling
                    } catch (pollErr) {
                        console.error("Polling error:", pollErr);
                        if (pollAttempts >= maxAttempts) {
                            if (pollIntervalRef.current) {
                                clearInterval(pollIntervalRef.current);
                                pollIntervalRef.current = null;
                            }
                            setShowLoader(false);
                            setLoading(false);
                            showToast("Error fetching result. Please try again.");
                        }
                    }
                }, 5000); // Poll every 5 seconds
                return;
            }
            if (json?.error) {
                setShowLoader(false);
                showToast(json.error);
            }
        } catch (err) {
            setShowLoader(false);
            showToast("Network error");
        } finally{
            setLoading(false);
        }
    };
    const handleDownload = async ()=>{
        if (!resultUrl) return;
        try {
            let blob;
            // Check if it's a data URL
            if (resultUrl.startsWith("data:")) {
                // Convert data URL to blob
                const response = await fetch(resultUrl);
                blob = await response.blob();
            } else {
                // Use backend API to fetch image (avoids CORS issues)
                showToast("Preparing download...");
                const response = await fetch("/api/fetch-image", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        imageUrl: resultUrl
                    })
                });
                const data = await response.json();
                if (!response.ok || data.error) {
                    showToast(data.error || "Failed to prepare download");
                    return;
                }
                // Convert data URL to blob
                const blobResponse = await fetch(data.dataUrl);
                blob = await blobResponse.blob();
            }
            // Create a temporary URL for the blob
            const url = window.URL.createObjectURL(blob);
            // Create a temporary anchor element and trigger download
            const link = document.createElement("a");
            link.href = url;
            link.download = `generated-image-${Date.now()}.png`;
            document.body.appendChild(link);
            link.click();
            // Cleanup
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            showToast("Image downloaded!");
        } catch (err) {
            console.error("Error downloading image:", err);
            showToast("Failed to download image");
        }
    };
    // Slider handlers for before/after comparison
    const handleSliderStart = (e)=>{
        e.preventDefault();
        setIsDragging(true);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (!isDragging) return;
            const handleMouseMove = {
                "Page.useEffect.handleMouseMove": (e)=>{
                    if (!imagePreview || !resultUrl) return;
                    const sliderContainer = document.querySelector("[data-slider-container]");
                    if (!sliderContainer) return;
                    const rect = sliderContainer.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const percentage = Math.max(0, Math.min(100, x / rect.width * 100));
                    setSliderPosition(percentage);
                }
            }["Page.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "Page.useEffect.handleMouseUp": ()=>{
                    setIsDragging(false);
                }
            }["Page.useEffect.handleMouseUp"];
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            return ({
                "Page.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                }
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        isDragging,
        imagePreview,
        resultUrl
    ]);
    const handleUseGeneratedImage = async ()=>{
        if (!resultUrl) return;
        try {
            // Check if resultUrl is already a data URL
            if (resultUrl.startsWith("data:")) {
                // Extract base64 part from data URL
                const commaIndex = resultUrl.indexOf(",");
                const base64Data = commaIndex >= 0 ? resultUrl.slice(commaIndex + 1) : resultUrl;
                // Set the full data URL as preview
                setImagePreview(resultUrl);
                setBase64Image(base64Data);
                showToast("Image loaded! Enter a new prompt to modify it.");
            } else {
                // Use backend API to fetch image (avoids CORS issues)
                showToast("Loading image...");
                const response = await fetch("/api/fetch-image", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        imageUrl: resultUrl
                    })
                });
                const data = await response.json();
                if (!response.ok || data.error) {
                    showToast(data.error || "Failed to load image");
                    return;
                }
                // Set the image preview and base64 data
                setImagePreview(data.dataUrl);
                setBase64Image(data.base64);
                showToast("Image loaded! Enter a new prompt to modify it.");
            }
        } catch (err) {
            console.error("Error using generated image:", err);
            showToast("Failed to load image");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$components$2f$Nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/my-flux-saas/app/page.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 lg:pl-28 lg:pr-8 p-4 sm:p-6 pt-20 sm:pt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: confettiRef,
                        className: "pointer-events-none fixed inset-0 z-50"
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/app/page.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-live": "polite",
                        className: "fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:items-start z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex flex-col items-center space-y-2 sm:items-end",
                            children: toastMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-auto max-w-md w-full bg-gray-800/95 backdrop-blur-md text-gray-100 border border-gray-600/50 rounded-lg shadow-lg overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 text-sm",
                                    children: toastMsg
                                }, void 0, false, {
                                    fileName: "[project]/my-flux-saas/app/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                lineNumber: 366,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-flux-saas/app/page.tsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-flux-saas/app/page.tsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-6 sm:mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-100 via-purple-200 to-indigo-200 bg-clip-text text-transparent pb-3 ",
                                children: "Imagine your Bunyad"
                            }, void 0, false, {
                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                lineNumber: 374,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-purple-300 text-base sm:text-lg font-medium mt-2 flex items-center gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-purple-400",
                                        children: "Upload"
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-purple-500",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-purple-400",
                                        children: "Prompt"
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-purple-500",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-purple-400",
                                        children: "Generate"
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-flux-saas/app/page.tsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "lg:col-span-2 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onDrop: onDrop,
                                        onDragOver: onDragOver,
                                        className: "rounded-2xl p-4 sm:p-6 border border-purple-700/30 bg-gray-800/40 backdrop-blur-sm shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4 sm:gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full sm:w-56 h-48 sm:h-56 bg-gray-700/60 hover:bg-gray-700/80 rounded-xl flex items-center justify-center cursor-pointer border border-gray-600/30",
                                                    onClick: ()=>{
                                                        const input = document.createElement("input");
                                                        input.type = "file";
                                                        input.accept = "image/*";
                                                        input.onchange = (e)=>handleFileSelect(e.target.files?.[0] ?? null);
                                                        input.click();
                                                    },
                                                    children: imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: imagePreview,
                                                        className: "w-full h-full object-cover rounded-xl"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center transition-transform duration-200 hover:scale-110",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-12 h-12 text-gray-400 mx-auto mb-2",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M12 4v8",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                        lineNumber: 405,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M20 12l-8-8-8 8",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                        lineNumber: 406,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        x: "3",
                                                                        y: "12",
                                                                        width: "18",
                                                                        height: "8",
                                                                        rx: "2",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                        lineNumber: 407,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-300",
                                                                children: "Upload Image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-flux-saas/app/page.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-sm font-medium text-purple-200",
                                                            children: "Prompt"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-flux-saas/app/page.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            value: prompt,
                                                            onChange: (e)=>setPrompt(e.target.value),
                                                            className: "w-full mt-2 p-3 border border-gray-600/30 rounded-xl min-h-[140px] bg-gray-700/60 text-gray-100 placeholder-gray-400/50 focus:outline-none focus:ring-2 focus:ring-purple-500",
                                                            placeholder: "e.g. Change background to Tokyo at night"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-flux-saas/app/page.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 sm:gap-3 mt-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleGenerate,
                                                                    disabled: loading,
                                                                    className: "flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white rounded-lg shadow-lg text-xs sm:text-sm cursor-pointer font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                                                    children: loading ? "Working..." : "Generate"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setImagePreview(null);
                                                                        setBase64Image(null);
                                                                        setPrompt("");
                                                                        setResultUrl(null);
                                                                    },
                                                                    className: "px-3 sm:px-4 py-2 border border-purple-700/50 rounded-lg hover:bg-purple-800/50 text-purple-200 text-xs sm:text-sm cursor-pointer transition-colors",
                                                                    children: "Clear"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                    lineNumber: 432,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/my-flux-saas/app/page.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-flux-saas/app/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-flux-saas/app/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-purple-700/30 p-4 sm:p-6 shadow-lg",
                                        children: [
                                            showLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-purple-900/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl z-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-12 h-12 text-purple-400 animate-spin mb-2",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                stroke: "currentColor",
                                                                strokeWidth: "3",
                                                                className: "opacity-20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                lineNumber: 452,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M22 12a10 10 0 0 0-10-10",
                                                                stroke: "currentColor",
                                                                strokeWidth: "3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "animate-pulse text-purple-200",
                                                        children: "Generating..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-lg mb-4 text-purple-100",
                                                children: "Result"
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                lineNumber: 459,
                                                columnNumber: 15
                                            }, this),
                                            resultUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center gap-4",
                                                children: [
                                                    imagePreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full max-w-[520px] relative rounded-xl overflow-hidden border border-purple-700/50 bg-purple-900/50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative w-full",
                                                                style: {
                                                                    aspectRatio: "1/1",
                                                                    maxHeight: "520px"
                                                                },
                                                                "data-slider-container": true,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: imagePreview,
                                                                        className: "absolute inset-0 w-full h-full object-contain",
                                                                        alt: "Original"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                        lineNumber: 468,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 overflow-hidden",
                                                                        style: {
                                                                            clipPath: `inset(0 ${100 - (sliderPosition || 50)}% 0 0)`
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: resultUrl,
                                                                            className: "w-full h-full object-contain",
                                                                            alt: "Generated"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                            lineNumber: 471,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                        lineNumber: 470,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10",
                                                                        style: {
                                                                            left: `${sliderPosition || 50}%`
                                                                        },
                                                                        onMouseDown: handleSliderStart,
                                                                        // also allow touch dragging
                                                                        onTouchStart: ()=>setIsDragging(true),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-4 h-4 text-purple-600",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M8 9l4-4 4 4m0 6l-4 4-4-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                                    lineNumber: 483,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                                lineNumber: 482,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                            lineNumber: 481,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                        lineNumber: 474,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                lineNumber: 466,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute bottom-2 left-2 px-2 py-1 bg-purple-900/80 rounded text-xs text-purple-200",
                                                                children: "After"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute bottom-2 right-2 px-2 py-1 bg-purple-900/80 rounded text-xs text-purple-200",
                                                                children: "Before"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 21
                                                    }, this),
                                                    !imagePreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full max-w-[520px] bg-purple-900/50 rounded-xl overflow-hidden border border-purple-700/50 flex justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: resultUrl,
                                                            className: "w-full max-h-[520px] object-contain",
                                                            alt: "Result"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-flux-saas/app/page.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex w-full max-w-[520px] gap-2 sm:gap-4 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>window.open(resultUrl, "_blank"),
                                                                className: "flex-1 min-w-[80px] px-2 sm:px-3 py-2 cursor-pointer border border-purple-700/50 rounded-lg hover:bg-purple-800/50 text-purple-200 text-xs sm:text-sm transition-colors",
                                                                children: "Open"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                lineNumber: 501,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleDownload,
                                                                className: "flex-1 min-w-[80px] px-2 sm:px-3 py-2 cursor-pointer bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg hover:from-sky-600 hover:to-indigo-600 text-xs sm:text-sm font-medium shadow-lg transition-all",
                                                                children: "Download"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                lineNumber: 507,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleUseGeneratedImage,
                                                                className: "flex-1 min-w-[120px] px-2 sm:px-3 py-2 cursor-pointer border border-purple-700/50 rounded-lg hover:bg-purple-800/50 text-purple-200 text-xs sm:text-sm transition-colors",
                                                                children: "Use Image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                        lineNumber: 500,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                lineNumber: 462,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-purple-400",
                                                children: "No result yet"
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                lineNumber: 522,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "space-y-4 sm:space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-purple-700/30 p-4 sm:p-5 shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold mb-3 text-purple-100 text-sm sm:text-base",
                                                children: "Quick Tools"
                                            }, void 0, false, {
                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                lineNumber: 529,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setPrompt("remove background"),
                                                        className: "px-3 py-2 cursor-pointer rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-white font-medium shadow-sm transform transition hover:-translate-y-0.5 hover:shadow-lg",
                                                        children: "Remove BG"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setPrompt("enhance lighting and clarity"),
                                                        className: "px-3 py-2 cursor-pointer rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-white font-medium shadow-sm transform transition hover:-translate-y-0.5 hover:shadow-lg",
                                                        children: "Enhance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setPrompt("turn into painting"),
                                                        className: "px-3 py-2 cursor-pointer rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-white font-medium shadow-sm transform transition hover:-translate-y-0.5 hover:shadow-lg",
                                                        children: "Painting"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setPrompt("remove watermark"),
                                                        className: "px-3 py-2 cursor-pointer rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500 text-white font-medium shadow-sm transform transition hover:-translate-y-0.5 hover:shadow-lg",
                                                        children: "Remove Watermark"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                                        lineNumber: 552,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-purple-700/30 p-4 sm:p-5 shadow-lg flex items-center justify-center h-[100px] sm:h-[120px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs sm:text-sm text-purple-400 text-center",
                                            children: " More tools coming soon..."
                                        }, void 0, false, {
                                            fileName: "[project]/my-flux-saas/app/page.tsx",
                                            lineNumber: 562,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-flux-saas/app/page.tsx",
                                        lineNumber: 561,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-flux-saas/app/page.tsx",
                                lineNumber: 527,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-flux-saas/app/page.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-flux-saas/app/page.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes confetti { 0% { transform: translateY(-10px) rotate(0deg); opacity: 1; } 100% { transform: translateY(220px) rotate(360deg); opacity: 0; } }
        .confetti-piece { will-change: transform, opacity; pointer-events:none; }
      `
            }, void 0, false, {
                fileName: "[project]/my-flux-saas/app/page.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-flux-saas/app/page.tsx",
        lineNumber: 356,
        columnNumber: 5
    }, this);
}
_s(Page, "pFLzvTIhmOJee2PnPyN/PQaIv/o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$flux$2d$saas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-flux-saas_7990b207._.js.map