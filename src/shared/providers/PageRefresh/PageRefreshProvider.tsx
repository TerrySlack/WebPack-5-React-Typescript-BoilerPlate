import {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useBeforeUnload, useLocation } from "react-router-dom";

export const PageRefreshContext = createContext({});

interface PageRefreshProviderProps {
  children: ReactNode | ReactNode[] | ReactElement | ReactElement[];
}

export function PageRefreshProvider({ children }: PageRefreshProviderProps) {
  const { pathname } = useLocation();

  // Changed from setUrlState to setInternalUrl to fix the ESLint warning
  const [url, setUrl] = useState<string>(
    () => sessionStorage.getItem("refreshUrl") || ""
  );

  const isLoggedIn = pathname !== "/";

  const setUrlInternalUrl = useCallback((newUrl: string) => {
    setUrl(newUrl); // Uses the updated setter name
    sessionStorage.setItem("refreshUrl", newUrl);
  }, []);

  useBeforeUnload(
    useCallback(() => {
      if (pathname !== "/" && pathname !== url) {
        sessionStorage.setItem("refreshUrl", pathname);
      }
    }, [pathname, url])
  );

  const value = useMemo(
    () => ({ isLoggedIn, url, setUrlInternalUrl }),
    [isLoggedIn, url, setUrlInternalUrl]
  );

  return <PageRefreshContext value={value}>{children}</PageRefreshContext>;
}
