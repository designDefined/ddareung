import create from "zustand";

interface IIntersectionObserverStore {
  current: IntersectionObserver | null;
  observedIds: string[];
}

export const useIntersectionObserver = create<IIntersectionObserverStore>()(
  () => ({
    current: null,
    observedIds: [],
  }),
);

const whenObserved = (id: string) => {
  useIntersectionObserver.setState((state) => ({
    observedIds: [...state.observedIds.filter((item) => item !== id), id],
  }));
};
const whenUnObserved = (id: string) => {
  useIntersectionObserver.setState((state) => ({
    observedIds: state.observedIds.filter((item) => item !== id),
  }));
};

export const observeAtom = (ref: Element, id: string) => {
  const io = useIntersectionObserver.getState().current;
  if (io) {
    io.observe(ref);
  }
};
export const resetObserver = () => {
  const io = useIntersectionObserver.getState().current;
  if (io) {
    io.disconnect();
  }
  useIntersectionObserver.setState({ observedIds: [] });
};

export const loadObserver = () => {
  resetObserver();
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        whenObserved(entry.target.id);
      } else {
        whenUnObserved(entry.target.id);
      }
    },
    { rootMargin: "-100px 0px" },
  );
  useIntersectionObserver.setState({ current: io });
};
