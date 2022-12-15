import Quote from "./Quote";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../store/IntersectionObserver";
import classNames from "classnames";

const SectionZero = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const io = useIntersectionObserver((state) => state.current);
  const observedIds = useIntersectionObserver((state) => state.observedIds);
  useEffect(() => {
    if (ref1.current && io) {
      io.observe(ref1.current);
    }
  }, [ref1.current, io]);
  return (
    <section
      id="section0"
      className={classNames("Section", {
        isObserved: observedIds.includes("section0"),
      })}
      ref={ref1}
    >
      <p>
        관악 최고의 명강 중 하나인 정보구조를 수강하고 나니, 여기서 배운 지식을
        바탕으로 실제 데이터를 다뤄보고 싶다는 생각이 들었습니다. 그런데 막상
        데이터로 무엇을 할 수 있을까 고민하니 쉽게 떠오르지 않았습니다. 그러던
        중, 저희의 머리를 스치는 생각이 하나 있었습니다.
      </p>
      <Quote content={"우리도 딥러닝을 할 수 있을까?"} />
      <p>
        딥러닝, 머신러닝, 빅데이터와 알고리즘 등... 이야기는 많이 들어봤지만
        쉽게 배우거나 시도해보지 못하는 분야들이 있습니다. 통계와 수학으로
        머리가 아플 것 같고, 컴퓨터도 꽤나 좋아야 할 것 같고, 막상 공부해보려고
        해도 어디서 시작해야할 지 갈피를 잡기가 쉽지 않습니다.
      </p>
      <p>
        그러나 저희는 무적의 <span className="green thick">정보구조</span>{" "}
        수강생! 마침 <span className="green thick">Dacon</span>이라는 인공지는
        경진대회 플랫폼에 비교적 간단해보이는 대회가 하나 올라왔기에, 저희는
        가벼운 마음으로 이에 참여해보기로 했습니다. 대회의 주제는 이러합니다.
      </p>
      <Quote
        content={
          "2018년 ~ 2021년의 따릉이 수요량을 바탕으로 2022년도의 따릉이 수요량을 예측하라!"
        }
      />
    </section>
  );
};

export default SectionZero;
