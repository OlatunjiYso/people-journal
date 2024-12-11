interface ErrorMessageProps {
    message: string;
    onRetry?: () => void;
  }
  
  export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
    return (
      <div className="rounded-lg bg-red-50 p-4">
        <div className="flex">
          <div className="flex-1">
            <p className="text-sm text-red-700">{message}</p>
          </div>
          {onRetry && (
            <button
              onClick={onRetry}
              className="ml-3 whitespace-nowrap text-sm font-medium text-red-700 hover:text-red-600"
            >
              Try again
            </button>
          )}
        </div>
      </div>
    );
  }