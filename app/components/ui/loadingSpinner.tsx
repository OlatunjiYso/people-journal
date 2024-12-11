export function LoadingSpinner() {
    return (
      <div className="flex justify-center items-center text-gray-400">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }