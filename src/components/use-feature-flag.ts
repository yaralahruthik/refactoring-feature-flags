export default function useFeatureFlag({
  enableCondition,
}: {
  enableCondition?: boolean;
}) {
  if (enableCondition) {
    return true;
  }

  return false;
}
