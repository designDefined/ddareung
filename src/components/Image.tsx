import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../store/IntersectionObserver";
import classNames from "classnames";

const Image = ({
  src,
  alt,
  add,
}: {
  src: string;
  alt: string;
  add: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const io = useIntersectionObserver((state) => state.current);
  const observedIds = useIntersectionObserver((state) => state.observedIds);
  useEffect(() => {
    if (ref.current && io) {
      io.observe(ref.current);
    }
  }, [ref.current, io]);
  return (
    <div
      id={alt}
      className={classNames("Image", { isObserved: observedIds.includes(alt) })}
      ref={ref}
    >
      <img src={src} alt={alt} />
      <div className="add">{add}</div>
    </div>
  );
};

export default Image;
