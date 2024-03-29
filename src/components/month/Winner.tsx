"use client";

import "@/components/month/Winner.scss";
import Title from "@/components/common/Title";
import Text from "@/components/common/Text";
import Image from "next/image";

function Winner() {
  return (
    <div className="winner-block">
      <Title large>승리요정</Title>
      <ul className="month-list">
        <li className="month-list__item">
          <div className="first-floor">
            <div className="dummy-image" />
            <span>91%</span>
          </div>
          <Title large>닉네임</Title>
          <div className="last-floor">
            <div className="last-floor__content">
              <Text>승리요정 1회 / 패배요정 2회</Text>
              <Text>&quot;내가 이겼지?&quot;</Text>
            </div>
            <Image src="/images/lions.svg" width={60} height={60} alt="" />
          </div>
        </li>
        <li className="month-list__second">
          <Text>이등은 아이디만 보임</Text>
          <Image src="/images/lions.svg" width={60} height={60} alt="" />
        </li>
        <li className="month-list__second">
          <Text>아이디!!!!</Text>
          <Image src="/images/lions.svg" width={60} height={60} alt="" />
        </li>
        <li className="month-list__second">
          <Text>아아아아이디!!!</Text>
          <Image src="/images/lions.svg" width={60} height={60} alt="" />
        </li>
        <li className="month-list__second">
          <Text>으아아아아이디!!</Text>
          <Image src="/images/lions.svg" width={60} height={60} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Winner;
