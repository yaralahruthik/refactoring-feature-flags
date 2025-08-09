import useFeatureFlag from './use-feature-flag';

export default function FeatureFlag({
  enableCondition,
  children,
}: {
  enableCondition?: boolean;
  children?: React.ReactNode;
}) {
  const isEnabled = useFeatureFlag({ enableCondition });

  if (isEnabled) {
    return <>{children || null}</>;
  }

  return null;
}
