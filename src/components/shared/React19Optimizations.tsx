"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";

// Safely access React 19 experimental features
// @ts-ignore
const Activity = React.unstable_Activity || React.Fragment;
// @ts-ignore
const useEffectEvent = React.experimental_useEffectEvent || ((fn) => fn);

/**
 * Optimized method using React 19 Activity
 * Keeps the "heavy" tab state alive in the background (hidden) rather than unmounting.
 */
export function ActivityTabs() {
    const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1");

    return (
        <div className="space-y-4 rounded-lg border p-4">
            <h3 className="text-lg font-semibold">React 19: &lt;Activity /&gt; Demo</h3>
            <div className="flex space-x-2">
                <button
                    onClick={() => setActiveTab("tab1")}
                    className={`px-4 py-2 rounded ${activeTab === "tab1" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
                >
                    Heavy Tab 1
                </button>
                <button
                    onClick={() => setActiveTab("tab2")}
                    className={`px-4 py-2 rounded ${activeTab === "tab2" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
                >
                    Heavy Tab 2
                </button>
            </div>

            <div className="mt-4">
                {/* Activity keeps the mode="hidden" tree preserved in memory */}
                <Activity mode={activeTab === "tab1" ? "visible" : "hidden"}>
                    <HeavyComponent name="Tab 1 (State Preserved)" />
                </Activity>
                <Activity mode={activeTab === "tab2" ? "visible" : "hidden"}>
                    <HeavyComponent name="Tab 2 (State Preserved)" />
                </Activity>
            </div>
        </div>
    );
}

/**
 * Optimized method using React 19 useEffectEvent
 * Separates reactive events from the effect dependency chain.
 */
export function EffectEventDemo({ onLog }: { onLog: (msg: string) => void }) {
    const [count, setCount] = useState(0);

    // OPTIMIZATION: This function can access latest props/state 
    // without forcing the effect to re-run when they change.
    const onTick = useEffectEvent(() => {
        onLog(`Tick: ${count}`);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((c) => c + 1);
            onTick();
        }, 1000);
        return () => clearInterval(interval);
    }, []); // Empty dependency array! Effect never re-runs, but onTick accesses latest `count`.

    return (
        <div className="rounded-lg border p-4">
            <h3 className="text-lg font-semibold">React 19: useEffectEvent() Demo</h3>
            <p>Count: {count}</p>
            <p className="text-sm text-muted-foreground">Check console/log for ticks.</p>
        </div>
    );
}

function HeavyComponent({ name }: { name: string }) {
    // Simulate heavy init state
    const [data, setData] = useState("");

    useEffect(() => {
        console.log(`${name} mounted`);
        return () => console.log(`${name} unmounted/hidden`);
    }, [name]);

    return (
        <div className="p-4 border border-dashed rounded bg-card/50">
            <h4 className="font-bold">{name}</h4>
            <input
                type="text"
                placeholder="Type here to test state preservation..."
                className="mt-2 w-full p-2 rounded border bg-background"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
        </div>
    );
}
