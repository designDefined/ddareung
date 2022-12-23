import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../store/IntersectionObserver";
import classNames from "classnames";
import data from "./../data/gw_real.json";
import dataNp from "./../data/gw_np.json";
import dataLstm from "./../data/lstm.json";

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const allData = data.map((column, index) => ({
  idx: index,
  real: column.real * 1000,
  np: dataNp[index].NeuralProphet * 1000,
  lstm:
    index < dataLstm.length
      ? dataLstm[index].gw * 1000
      : dataLstm[dataLstm.length - 1].gw * 1000,
}));

const Example = () => {
  console.log(allData.length);
  console.log(dataLstm.length);
  return (
    <ResponsiveContainer width="120%" height="100%">
      <ComposedChart
        width={500}
        height={300}
        data={allData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <Tooltip />
        <Line
          type="monotone"
          dataKey="np"
          stroke="#8884d8"
          dot={false}
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="real"
          stroke="#82ca9d"
          dot={false}
          strokeWidth={2}
        />
        <XAxis dataKey={"idx"} />
        <YAxis dataKey={"np"} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

const Example2 = () => {
  console.log(allData.length);
  console.log(dataLstm.length);
  return (
    <ResponsiveContainer width="120%" height="100%">
      <ComposedChart
        width={500}
        height={300}
        data={allData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <Tooltip />
        <Line
          type="monotone"
          dataKey="lstm"
          stroke="#F78104"
          dot={false}
          strokeWidth={2}
        />
        <XAxis dataKey={"idx"} />
        <YAxis dataKey={"lstm"} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

const SectionFive = () => {
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
      id="section5"
      className={classNames("Section", {
        isObserved: observedIds.includes("section5"),
      })}
      ref={ref1}
    >
      <div className="Heading">
        5. <span className="green"> 예측 </span>결과
      </div>
      <p>
        다음 그래프는 NeuralProphet으로 학습시킨 모델이 예측한 광진구의 2021년
        따릉이 수요량과 실제 따릉이 수요량을 비교한 것입니다. 모델은 2018년 ~
        2020년의 수요량 데이터와 다른 변수등을 이용하여 학습되었습니다. 어때요,
        괜찮게 예측하고 있는 것 같나요?
      </p>
      <div className="MiniHeading">2021년 광진구 따릉이 수요량 (일별)</div>
      <div className="chartWrapper">
        <Example />
      </div>
      <p>
        녹색은 실제 따릉이 수요량, 파란색은 Neural Prophet으로 예측한 따릉이의
        수요입니다. 전반적으로 추세는 따라가지만 날씨 등의 환경적 변수로 인해
        나타나는 실제 데이터의 변동성을 재현하지는 못했습니다. 예측할 때 각
        날짜의 호우 여부 등을 알 수 있으면 훨씬 잘 예측할 수 있겠지만, 결국
        미래를 예측하는 것이 목표이기 때문에 그러한 데이터 없이도 근사값을 내는
        것이 중요했습니다.
      </p>
      <p>
        다만 2022년 데이터를 예측하는 것에는 문제가 많았습니다. 특히 기존 며칠
        간의 데이터를 기반으로 미래를 예측하는 LSTM의 경우, 새로운 데이터 몇
        개의 예측은 그럴듯하게 해내지만 2022년도 전체와 같이 긴 구간을 새롭게
        예측시키면 부정확한 값을 내는 경우가 있었습니다. 그 경우 아래의
        그래프처럼 일정 시점부터 값이 하나로 수렴하게 됩니다. 예측 모델 구현에
        문제가 있거나 학습이 불충분하게 이루어진 것으로 판단되었지만, 정확히
        해결하지는 못하여 앞으로 더 공부할 부분으로 남겨두고자 합니다.
      </p>
      <div className="MiniHeading">
        2022년 광진구 따릉이 수요량 예측치 (LSTM)
      </div>
      <div className="chartWrapper">
        <Example2 />
      </div>
      <div className="MiniHeading">후기</div>
      <p>
        약 한 달. 딥러닝이라는 거대한 분야를 맛보기에는 짧다면 짧은
        시간이었지만, 그래도 배경지식이 전혀 없는 4명이서 맨 땅에 헤딩을 한 것
        치고는 꽤나 재미있고 유익한 경험이었습니다. 모든 코드를 이해하고, 원하는
        대로 결과물을 도출하지는 못하였지만, 그래도 모델을 어설프게라도 구현하고
        학습시켜보며 많은 배움과 성취감을 느낄 수 있었습니다. 앞으로도 저희는
        이번의 시행착오와 흥미를 바탕으로 다양한 공부를 이어 나가고자 합니다.
        많은 응원 부탁드립니다!
      </p>
      <p></p>
      <p>
        윤호: 이번 수업이 살면서 처음으로 “코딩”을 배운 수업인데, 어쩌다보니
        딥러닝 찍먹까지 왔네요. 강하게 키우려는 사람은 없는데 왜 혼자 강하게
        크려고 했는지… 실제로 라이브러리 활용을 하기 전에는 코드를 보고 “이게 다
        뭐야”라는 생각이 들고, 하는 과정에서는 “이해가 힘들었는데, 끝나고
        돌아보니 정말 개발자들이 이보다 간단하게 정리할 수는 없겠다는 생각이
        드네요. 에이 뭐야~ 진짜 별거 없네 – (물론 제 수준 얘기입니다) n.b.
        박기범 교수님! 지금 돌아보니 조금 황당할 만큼 기본적인 실수를 해놓고
        SOS를 요청했는데, 짚어주셔서 감사합니다!
      </p>
      <p>
        준영: 모두들 벅찬 학기였을텐데, 다들 앞서서 일을 분배해가고 공부한
        지식을 공유해준 덕에 프로젝트를 무사히 마무리할 수 있었습니다. 정말 고생
        많았던 우리 팀원 윤호와 예원, 그리고 이번 학기 정보구조 수강생이
        아님에도 열과 성을 다해준 창인에게 무한한 감사를 표합니다.
      </p>
    </section>
  );
};

export default SectionFive;
