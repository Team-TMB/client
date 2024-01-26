import "@/components/signup/SignupStepTwo.scss";

import Title from "@/components/common/Title";
import Text from "@/components/common/Text";

import SignupTeamCards from "@/components/signup/SignupTeamCards";
import { TEAMS_INFO } from "./TeamsInfo";

function SignupStepTwo() {
  return (
    <div>
      <Title largest className="content">
        프로필 설정하기
      </Title>
      <Title small className="content">
        나만의 프로필을 만들어봐!
      </Title>
      <div className="teamcards-block">
        <SignupTeamCards {...TEAMS_INFO[1]} />
      </div>
      <div>
        <Text>닉네임</Text>
        <input type="text" />
        <button>중복확인</button>
      </div>
      <div>
        <Text>한마디</Text>
        <textarea></textarea>
      </div>
    </div>
  );
}

export default SignupStepTwo;
