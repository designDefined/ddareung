import Quote from "./Quote";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../store/IntersectionObserver";
import classNames from "classnames";
import analyze1 from "./../image/analyze_var_1.png";
import analyze2 from "./../image/analyze_var_2.png";
import analyze3 from "./../image/analyze_var_3.png";
import analyze4 from "./../image/analyze_var_4.png";
import mae1 from "./../image/mae1.png";
import mae2 from "./../image/mae2.png";

import Image from "./Image";

const SectionFour = () => {
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
      id="section4"
      className={classNames("Section", {
        isObserved: observedIds.includes("section4"),
      })}
      ref={ref1}
    >
      <div className="Heading">
        4. <span className="green"> 모델</span> 테스트와
        <span className="green"> 변수</span> 선별
      </div>

      <div className="MiniHeading">모델 테스트 과정의 시행착오들</div>
      <p>
        저희는 PyTorch를 이용한 LSTM과 NerualProphet의 베이스라인 코드를 작성한
        후, 미리 수집한 여러 데이터를 이용하여 모델과 변수의 효율성을
        검증해보았습니다. 그 과정에서 수많은 시행착오가 있었는데, 이를 해결하는
        것 또한 찍먹의 묘미라 할 수 있죠!
      </p>
      <div className="MiniHeading">변수 오류 발견</div>
      <p>
        완성된 베이스라인 코드로 드디어 수집한 데이터를 돌려봤는데, 이게 무슨
        일인가… 예측값(yhat)과 실제값(actual y)의 차이를 보고자 했는데, 데이터
        속에서 두 지점에서 예측값이 지나치게 높게 나온 것! 슨생님… 저희 데이터에
        cell 수가 89,000개를 넘어가는데 어떻게 찾아요…
      </p>
      <Image
        src={analyze1}
        alt={"변수오류1"}
        add={"두 지점에서 예측값을 비정상적으로 높게 산출한 NeuralProphet"}
      />
      <Quote content={"우리 중에 스파이가 있어!"} />
      <p>
        다행이도 우리는 NeuralProphet의 자체 기능을 이용하여 각 변수의 트렌드와
        관게를 볼 수 있었습니다.
      </p>
      <Image
        src={analyze2}
        alt={"변수오류2"}
        add={"NeuralProphet으로 분석한 여러가지 변수의 트렌드"}
      />
      <Image
        src={analyze3}
        alt={"변수오류3"}
        add={"이상한 트렌드를 보이는 변수가 두 개 있다"}
      />
      <p>
        두 변수를 제거하고 돌려보니, 오! 뭔가 그럴싸한 그림이 나오네요! 이
        그래프들 속에서 추측할 수 있는 것은 - 첫번째 스파이크는 2019년 초
        언저리에 air_GW 변수에 비정상적으로 높은 값이 입력되었을 것이라는 것
        (확인해보니 클리닝 과정의 실수였습니다), 그리고 알고리즘이 신규 확진자
        수 – 따릉이 이용률의 관계를 포착했다는 것! 하지만 단계적 일상 회복 이후,
        코로나 확진자 수가 엄청나게 올라도 사람들은 야외활동을 멈추지 않았어요.
        이는 결국, 데이터는 숫자 밖의 상황을 모른다는 것을 저희가 알아야 한다는
        점을 시사합니다
      </p>
      <Image
        src={analyze4}
        alt={"변수오류4"}
        add={"문제가 된 변수를 제거하고 산출한 예측 값과 실제 값 비교"}
      />
      <div className="MiniHeading">커팅 문제</div>
      <p>
        데이터를 굴리면서 발생했던 가장 큰 문제는, 데이터에 날짜를
        dd/mm/yyyy형태로 입력해놓고, 코딩에서 날짜를 지칭할 때는 yyyy-mm-dd로
        하는 초보적인 실수를 했다는 것! 이로 인해서 알고리즘이 날짜로 인식하지
        못한 구간들의 값들은 비어있는데, 이 문제를 해결하지 못해서 결국 끙끙
        앓다가 교수님한테 SOS까지 했습니다…! 지금 보니까 진짜 사소한 실수로 많은
        고생을 했다는 생각이 스쳐갑니다… 여러분은 실수하지 마세요…
      </p>

      <div className="MiniHeading">변수가 너무 많음</div>
      <p>
        머신러닝의 한계이자 단점은, 바로 변수들 간 관계가 어떻게 형성되는 지
        모른다는 것이죠! 변수 간 관계가 형성된 것을 확인할 수 없으니, 무엇이
        문제가 되었는지 유추만 될 뿐입니다. 실제로 저희도 갖고 있는 변수를 다
        넣었는데, 이 때는 값들이 overshooting이 되어서, MAE값조차 계산이 안되는
        상황이 벌어졌습니다. 이를 해결하지 못한 채, 딥러닝 어린이들은 결국 개별
        회귀분석에서 따릉이 이용량과 유관하다고 판단되는 변수들을 추려서 딥러닝
        변수로 넣었습니다.
      </p>
      <p>
        또, 어떠한 경우 딥러닝에서는 과적합 문제가 발생하기도 합니다. 따라서
        유관해보이는 변수일지라도 전부 넣어서 학습시키는 것만이 능사는 아닐 수
        있습니다.
      </p>
      <Image
        src={mae2}
        alt={"mae2"}
        add={"1~3개의 변수를 샘플링해가며 MAE를 비교해보았다"}
      />
    </section>
  );
};

export default SectionFour;
