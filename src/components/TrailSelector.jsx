import { useEffect, useRef } from "react";
import Icon from "./icons/Icon";

export default function TrailSelector({ trails, value, onChange }) {
  const detailsRef = useRef(null);
  const summaryRef = useRef(null);

  const selectedTrail = trails.find((trail) => trail.id === value);

  useEffect(() => {
    function handleOutsideClick(event) {
      const details = detailsRef.current;

      if (details && !details.contains(event.target)) {
        details.open = false;
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);

  function handleSelect(trailId) {
    onChange(trailId);
    detailsRef.current.open = false;
    summaryRef.current.focus();
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      detailsRef.current.open = false;
      summaryRef.current.focus();
    }
  }

  return (
    <details
      className="trail-selector"
      ref={detailsRef}
      onKeyDown={handleKeyDown}
    >
      <summary
        className="trail-selector__trigger"
        ref={summaryRef}
      >
        <span>Trilha:</span>

        <span className="trail-selector__current">
          {selectedTrail?.title ?? "Selecione uma trilha"}
        </span>

        <Icon name="chevron-down" size={16} />
      </summary>

      <ul className="trail-selector__options" aria-label="Trilhas disponíveis">
        {trails.map((trail) => (
          <li key={trail.id}>
            <button
              type="button"
              className="trail-selector__option"
              aria-pressed={trail.id === value}
              onClick={() => handleSelect(trail.id)}
            >
              <span>{trail.title}</span>

              {trail.id === value && (
                <Icon name="check-dark" size={16} />
              )}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
}