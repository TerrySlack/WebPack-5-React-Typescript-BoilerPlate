import {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { useBeforeUnload, useLocation } from "react-router-dom";

export const PageRefreshContext = createContext({});

interface PageRefreshProviderProps {
  children: ReactNode | ReactNode[] | ReactElement | ReactElement[];
}

export type PageRefreshContextType = {
  isLoggedIn: boolean;
  getUrl: () => string;
  setUrl: (url: string) => void;
};

export function PageRefreshProvider({ children }: PageRefreshProviderProps) {
  const urlRef = useRef<string>(sessionStorage.getItem("refreshUrl")); // Default to empty

  // Write CODE TO SET This to a default.  Ie, if it's not the default route, then set the user to loggedIn
  const isLoggedInRef = useRef<boolean>(false);
  const setUrl = (url: string) => {
    // set the url to the ref
    urlRef.current = url;

    // store it in session storage.
    sessionStorage.setItem("refreshUrl", url);
  };
  // const refreshUrl = sessionStorage.getItem("refreshUrl");
  const { pathname } = useLocation();
  useBeforeUnload(
    useCallback(() => {
      if (pathname !== "/" && pathname !== urlRef.current) {
        setUrl(pathname);
      }
    }, [urlRef.current, pathname])
  );

  // Let's memoize value and prevent unccessary re-rendering
  const value = useMemo(
    () => ({ isLoggedIn: isLoggedInRef.current, url: urlRef.current, setUrl }),
    [isLoggedInRef.current, urlRef.current, setUrl]
  );

  return (
    <PageRefreshContext.Provider value={value}>
      {children}
    </PageRefreshContext.Provider>
  );
}
