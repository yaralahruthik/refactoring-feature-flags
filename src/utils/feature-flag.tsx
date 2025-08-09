import React from 'react';
import { useSearchParams } from 'react-router';

type StorageType = 'localStorage' | 'sessionStorage' | undefined;

type FeatureFlag = {
  enableCondition?: boolean;
  featureName?: string;
  persistTo?: StorageType;
};

// Check this issue: https://github.com/ArnaudBarre/eslint-plugin-react-refresh/issues/84
// eslint-disable-next-line react-refresh/only-export-components
export function useFeatureFlag({
  enableCondition,
  featureName,
  persistTo,
}: FeatureFlag) {
  const [searchParams] = useSearchParams();

  const storedValue =
    persistTo && featureName
      ? window[persistTo].getItem(`featureFlag:${featureName}`)
      : null;
  const isStoredEnabled = storedValue === 'true';

  const rawParam = featureName ? searchParams.get(featureName) : null;
  const isFeatureParamEnabled =
    rawParam !== null ? rawParam === 'true' : undefined;

  React.useEffect(() => {
    if (persistTo && featureName && isFeatureParamEnabled !== undefined) {
      window[persistTo].setItem(
        `featureFlag:${featureName}`,
        String(isFeatureParamEnabled),
      );
    }
  }, [persistTo, featureName, isFeatureParamEnabled]);

  if (enableCondition || isFeatureParamEnabled || isStoredEnabled) {
    return true;
  }

  return false;
}

export default function FeatureFlag({
  enableCondition,
  featureName,
  children,
  persistTo,
}: FeatureFlag & { children?: React.ReactNode }) {
  const isEnabled = useFeatureFlag({ enableCondition, featureName, persistTo });

  if (isEnabled) {
    return <>{children || null}</>;
  }

  return null;
}
