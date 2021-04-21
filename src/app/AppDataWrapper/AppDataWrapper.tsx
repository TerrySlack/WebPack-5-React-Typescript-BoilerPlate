import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import DataWorker from 'worker-loader!./AppDataWrapper.worker';
import { areEqualShallow } from 'Utils/equalityChecks';
import { setNav } from 'Containers/Nav';
import { setFeatures } from 'Containers/Home';
import { setProfile } from 'Containers/ProfileView';
import Routes from '../../routes';

// This is kind of like a provider.
const AppDataWrapper = memo(() => {
  const dispatch = useDispatch();
  const worker = new DataWorker();
  useEffect(() => {
    // //Create the worker
    worker.onmessage = ({ data: apiData }: any) => {
      // Dispatch past space x launches to redux
      const {
        default: {
          site: { title, logoImage },
          profile,
          data: {
            metadata: { title: metaTitle },
            features,
          },
        },
      } = apiData;

      // Dispatch the data
      dispatch(setNav({ title, logoImage }));
      dispatch(setFeatures({ features, title: metaTitle }));
      dispatch(setProfile(profile));

      // Terminate the worker.  There is also a check in the unmount method.  The worker is not being correctly terminated
      // or the code is not executed before unmount
      worker.terminate();
    };
    worker.postMessage({ limit: 25 });
    return () => {
      if (worker) {
        worker.terminate();
      }
    };
  }, [worker]);
  return <Routes />;
}, areEqualShallow);

export default AppDataWrapper;
