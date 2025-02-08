import { RiErrorWarningFill } from "react-icons/ri";
import { MessageProps } from "../../app.type";

export function ErrorMessage({ message }: MessageProps) {
  return (
    <div className="w-full bg-white dark:bg-gray-900 border border-red-400 dark:border-red-600 text-red-600 dark:text-red-400 rounded-lg shadow-md p-4 mx-auto flex items-center space-x-3">
      <RiErrorWarningFill className="text-red-500 dark:text-red-400 text-2xl" />
      <span className="font-medium">{message || "Something Went Wrong"}</span>
    </div>
  );
}
