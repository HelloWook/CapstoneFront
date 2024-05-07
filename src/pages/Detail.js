import React from "react";
import Header from "../components/Header";
import "../styles/Detail.css";
import Banner from "../components/Banner";
import usePayload from "../hooks/usePayload";
function Detail() {
  usePayload();
  return (
    <div className="detail">
      <Header />
      <Banner />
      <div className="detail-title">
        스마트 플로워그램은 온,습도 정보를 제공하여 안전한 꽃 키우기를 목표로
        하는 사이트입니다.
      </div>
      <div className="detail-subtitle">1.존중과 예의</div>
      <div className="detail-text">
        타 사용자에게 존중을 기반으로 하는 예의를 지켜주세요.
      </div>
      <div className="detail-subtitle">2.욕설 및 모욕 금지</div>
      <div className="detail-text">
        비속어, 모욕적인 언어, 혐오 발언은 삼가주세요.
      </div>
      <div className="detail-text">
        다른 사용자를 비방하거나 공격하는 행동은 금지됩니다.
      </div>
      <div className="detail-subtitle">3.반려식물(다육이)을 대하는 자세</div>
      <div className="detail-text">
        책임감을 가지고 반려식물을 키울수 있도록 노력합니다.
      </div>
      <div className="detail-subtitle">4. 커뮤니티 관리자의 지침 따르기</div>
      <div className="detail-text">
        커뮤니티 관리자의 지침과 결정을 존중해주세요.
      </div>
      <div className="detail-text">
        커뮤니티 운영에 대한 건의나 피드백은 언제나 환영합니다.
      </div>
    </div>
  );
}

export default Detail;
