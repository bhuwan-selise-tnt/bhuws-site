import { useLayoutEffect, useRef } from "react";

/* sets its text at whatever size makes it span the container exactly */
export default function FitText({ as: Tag = "span", className = "", children }) {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const text = textRef.current;
    const fit = () => {
      text.style.fontSize = "100px";
      const cs = getComputedStyle(box);
      const avail =
        box.clientWidth -
        parseFloat(cs.paddingLeft) -
        parseFloat(cs.paddingRight);
      const ratio = avail / text.getBoundingClientRect().width;
      text.style.fontSize = `${Math.floor(100 * ratio * 100) / 100}px`;
    };
    fit();
    document.fonts.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    return () => ro.disconnect();
  }, []);

  return (
    <Tag className={`fit ${className}`} ref={boxRef}>
      <span className="fit-text" ref={textRef}>
        {children}
      </span>
    </Tag>
  );
}
