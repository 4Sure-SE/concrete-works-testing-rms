"use client";

import { usePathname, useRouter } from "next/navigation";
import {
    createContext,
    type ReactNode,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

interface RefreshContextType {
    lastEventTimestamp: number;
    pathToRefresh: string | null;
    triggerRefresh: (path?: string) => void;
}

const RefreshContext = createContext<RefreshContextType | undefined>(undefined);

// for triggering a refresh of the of a specific path

// i use this to refresh Page A when prematurely
// navigating away from Page B where a server action
// that updates the data used on Page A is emitted

export const RefreshProvider = ({ children }: { children: ReactNode }) => {
    const [lastEventTimestamp, setLastEventTimestamp] = useState(0);
    const [pathToRefresh, setPathToRefresh] = useState<string | null>(null);
    const router = useRouter();
    const currentPathname = usePathname();

    const triggerRefresh = useCallback((path?: string) => {
        console.log(`Refresh: ${path ?? "current"}`);
        setPathToRefresh(path ?? null);
        setLastEventTimestamp(Date.now());
    }, []);

    const previousTimestampRef = useRef(lastEventTimestamp);
    useEffect(() => {
        if (lastEventTimestamp !== previousTimestampRef.current) {
            // if you are currently on the path to refresh, refresh the page
            if (pathToRefresh === null || pathToRefresh === currentPathname) {
                router.refresh();

                // setPathToRefresh(null);
            }
            previousTimestampRef.current = lastEventTimestamp;
        }
    }, [lastEventTimestamp, pathToRefresh, currentPathname, router]);

    return (
        <RefreshContext.Provider
            value={{ lastEventTimestamp, pathToRefresh, triggerRefresh }}
        >
            {children}
        </RefreshContext.Provider>
    );
};

export const useRefreshContext = () => {
    const context = useContext(RefreshContext);
    if (context === undefined) {
        throw new Error(
            "useRefreshContext must be used within a RefreshProvider",
        );
    }
    return context;
};
