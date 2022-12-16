import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../store/IntersectionObserver";
import classNames from "classnames";
import np2 from "./../image/np2.png";
import Image from "./Image";

const SectionThree = () => {
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
      id="section3"
      className={classNames("Section", {
        isObserved: observedIds.includes("section3"),
      })}
      ref={ref1}
    >
      <div className="Heading">
        3. <span className="green"> 딥러닝 모델</span> 공부
      </div>

      <div className="MiniHeading">딥러닝의 원리</div>
      <p>
        딥러닝이라는 단어는 구글 딥마인드의 알파고가 이세돌과 대국을 하던
        2016년부터 널리 알려지기 시작했습니다. 그러나 딥러닝의 원리가 무엇이고,
        머신러닝과는 무슨 차이가 있는 지 구분하기는 쉽지 않습니다. 기본적으로
        딥러닝은 머신러닝의 일종입니다. 머신러닝이란 특정한 문제를 해결함에
        있어서 프로그래머가 해결 방법을 명시적으로 작성하는 게 아니라, 데이터를
        바탕으로 컴퓨터가 이를 직접 학습하여 해결을 위한 모델을 도출하게끔 하는
        컴퓨터 과학의 한 분야입니다. 머신러닝 모델의 대표적인 예시 중 하나가
        바로 신경망 모델인데, 이 신경망 중에서도, 은닉층이 2개 이상인 심층
        신경망을 이용한 머신러닝을 딥러닝이라고 합니다.
      </p>
      <div className="MiniHeading">LSTM</div>

      <div className="MiniHeading">Neural Prophet</div>
      <p>
        미래 예측, 회귀분석을 위한 라이브러리의 유명한 예시가 바로 Prophet!{" "}
        <span className="green thick">Prophet</span>은 메타(전 페이스북)에서
        개발한 시계열 예측를 위한 라이브러리입니다. Prophet은 변수 하나만을
        이용해서 미래를 예측하는데,{" "}
        <span className="green thick">NeuralProphet</span> 은{" "}
        <span className="green ">딥러닝 알고리즘</span>을 활용하여, 변수 간
        관계도까지 구축하여 미래 예측을 하기 위해 개발된 라이브러리에요! 이를
        발전시키면서, 스탠포드 대학교의 고오급 인력들이 활용되었다는 잡지식까지
        +1
      </p>
      <p>
        NeuralProphet은 파이썬이나 R로 사용할 수 있는데, 사용 방법이 매우
        간단합니다. 아래는 파이썬으로 NeuralProphet의 모델을 만드는 예시
        코드입니다.
      </p>
      <Image
        src={np2}
        alt={"NeuralProphet"}
        add={
          "NeuralProphet의 예시 코드. 다양한 하이퍼파라미터를 간단하게 조작할 수 있다."
        }
      />
      <p>
        코드를 보시면 알겠지만, NeuralProphet을 이용하면 Epoch와 같은 기본적인
        사항들 외에도 연 / 주 / 일과 같은 시계열 데이터의 주기성이나, 예측하려는
        데이터 이외의 Regressor 등을 간단하게 추가할 수 있습니다. 또한
        NeuralProphet의 결과물은 시각적으로 쉽게 표현되어 초보자들도 분석 결과를
        직관적으로 파악할 수 있습니다.
      </p>
    </section>
  );
};

export default SectionThree;
