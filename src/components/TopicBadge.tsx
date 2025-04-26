export function TopicBadge({ topic }: { topic: string }) {
  return (
    <span className="mr-2 mb-2 inline-block min-w-12 rounded-full bg-blue-100 px-2 py-1 text-center text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300">
      {topic}
    </span>
  );
}
