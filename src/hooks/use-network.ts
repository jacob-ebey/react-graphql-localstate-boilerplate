import * as React from 'react';

export interface UseNetworkState {
  whenOnline: string;
  whenOffline: string;
}

export interface UseNetwork  {
  status: string;
  isOnline: boolean;
  isOffline: boolean;
}

let state: UseNetworkState = {
  whenOnline: "online",
  whenOffline: "offline"
};

export default function useNetwork({ whenOnline, whenOffline }: UseNetworkState = state): UseNetwork {
  let [value, setValue] = React.useState(window.navigator.onLine);

  React.useEffect(() => {
    const handleOnlineStatus = () => {
      setValue(window.navigator.onLine);
    }

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  return React.useMemo(() => {
    let isOnline = value === true;
    let isOffline = value === false;
    let status = isOnline ? whenOnline : whenOffline;

    return { status, isOnline, isOffline };
  }, [value, whenOnline, whenOffline]);
}
