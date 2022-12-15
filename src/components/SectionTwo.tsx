import Quote from "./Quote";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../store/IntersectionObserver";
import classNames from "classnames";
import csvNew from "../image/csv_new.png";
import Image from "./Image";

const SectionTwo = () => {
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
      id="section2"
      className={classNames("Section", {
        isObserved: observedIds.includes("section2"),
      })}
      ref={ref1}
    >
      <div className="Heading">
        STEP 2. 관련 <span className="green">데이터</span> 수집
      </div>
      <p>
        이전의 따릉이 사용량만을 가지고 미래의 따릉이 사용량을 예측하는 것도
        물론 가능하지만, 더 나은 예측을 위해서는 따릉이 사용량과 관련된 변수를
        수집하여 모델에 넣어보아야 합니다. 우리는{" "}
        <span className="green thick">공공 API</span>를 이용하여 연관성이 있어
        보이는 데이터를 최대한 모아보았습니다.
      </p>
      <div className="MiniHeading">데이터 클리닝</div>
      <p>
        <span className="green thick">“데이터를 다룬다”</span>라고 했을 때는
        엄청나게 멋있고 삐까번쩍한 작업을 기대하는데, 종종 첫 단계 – 데이터를
        구하는 과정을 간과하는 경우가 있습니다! 심지어 데이터가 없을 경우,
        데이터를 만들어야 하는데, 저희 또한 코로나 단계를 날짜 별로 정리한
        파일을 찾지 못하여…. 결국… 일일이… 스스로… 정리했습니다….
      </p>
      <Image
        src={csvNew}
        alt={"새로 만든 csv"}
        add="나무위키를 보고 손수 정리한 거리두기 단계 CSV"
      />
      <p>
        또, 어떤 경우에는 불완전한 데이터를 합치거나 가공해야 했습니다. 아래의
        유동인구 데이터 같은 경우에는 지하철 역 별로 데이터가 기록되어 있어,
        저희가 예측하고자 하는 광진구, 동대문구, 성동구, 그리고 중랑구의
        유동인구로 환산되어야 했습니다. 총 3년치 이상의 데이터였기 때문에 이를
        손수 작업하기에는 막막했는데, 여기에 서울시에서 마련한 공공 API를 활용할
        수 있었습니다.
      </p>
      <div className="MiniHeading">데이터 스케일링</div>
      <p>
        이렇게 모아진 각각의 데이터는 그대로 사용될 수도 있지만, 서로 다른
        단위를 정규화해주는 <span className="green thick">스케일링</span>을
        거쳐야 더욱 정확한 효과를 볼 수 있습니다. 어떤 데이터는 몇 만 단위, 어떤
        데이터는 0.000... 단위로 표현되어 있으면, 실제 데이터의 경향성과 다르게
        모델에 반영될 수 있기 때문이죠. 따라서 균일한 척도 하에 적절한 방식으로
        데이터의 값을 변환하는 스케일링이 필요합니다.
      </p>
      <p>스케일링에는 다양한 방법이 있는데, 저희는 ~~~~</p>
    </section>
  );
};

export default SectionTwo;
