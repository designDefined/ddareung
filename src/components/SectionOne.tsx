import Quote from "./Quote";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../store/IntersectionObserver";
import classNames from "classnames";
import notion from "./../image/notion.png";
import github from "./../image/github.png";
import Image from "./Image";

const SectionOne = () => {
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
      id="section1"
      className={classNames("Section", {
        isObserved: observedIds.includes("section1"),
      })}
      ref={ref1}
    >
      <div className="Heading" ref={ref1}>
        STEP 1. 깃허브, 노션 셋업
      </div>
      <p>
        저희는 4명이서 함께 작업을 진행하기도 했고, 또 대회와 과제전의 시간이
        여유롭지 않다보니 동시에 작업을 해야할 경우가 매우 많았습니다. 그렇기에
        효율적인 협업에 적합한 각종 툴을 세팅하는 작업을 제일 먼저 진행했습니다.
      </p>
      <p>
        노션의 경우에는 초반부의 회의를 기록하고 각종 튜토리얼의 링크를 모으는
        용도로 사용했습니다. 또한 기초 데이터를 모으는 과정에서 일을 분배하고
        각자의 진행상황을 확인하는 데에도 유용했습니다.
      </p>
      <Image
        src={notion}
        alt={"notion"}
        add={"노션을 이용한 초기 데이터 수집과 관리"}
      />
      <p>
        깃허브는 코드 기반의 협업에 가장 적합한 플랫폼으로, Git이라는 버전 관리
        시스템을 이용하고 있습니다. 현재 대부분의 개발 작업에서 널리 사용되고
        있는 툴이기도 합니다. 깃허브는 정보구조 수업시에도 한 번 이용해본 적이
        있었는데요, 이번에는 레포지토리를 직접 셋업하고 각자의 코드와 데이터를
        공유하는 작업을 진행해보았습니다. 아무래도 Github 웹사이트만을 이용하는
        것은 이러한 작업에 충분하지 않았기에 CLI나 Github Desktop을
        이용했습니다.
      </p>
      <Image
        src={github}
        alt={"github"}
        add={"깃허브를 이용한 코드의 관리와 공유"}
      />
    </section>
  );
};

export default SectionOne;
