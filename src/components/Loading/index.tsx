import { ImSpinner8 } from "react-icons/im";

type MessageProps = {
  message: string;
};

export function Loading({ message }: MessageProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-md p-6 w-full mx-auto flex flex-col items-center space-y-3">
      <ImSpinner8 className="text-3xl text-blue-500 dark:text-blue-400 animate-spin" />
      <span className="font-medium text-gray-600 dark:text-gray-400">
        {message || "Loading, please wait..."}
      </span>
    </div>
  );
}
