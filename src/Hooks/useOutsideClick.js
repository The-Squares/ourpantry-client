const { useEffect } = require("react");

function useOutsideAlerter(ref, enabled, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      event.stopPropagation();
      if (ref.current && !ref.current.contains(event.target) && enabled) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, enabled, callback]);
}

export default useOutsideAlerter;
