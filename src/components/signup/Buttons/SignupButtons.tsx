"use client";

import "@/components/signup/Buttons/SignupButtons.scss";

interface TextProps {
  title: string;
  onClick: (_e?: React.MouseEvent<HTMLElement>) => void;
}

function SignupButtons({ title, onClick }: TextProps) {
  return (
    <button className="button-block" onClick={onClick}>
      {title}
    </button>
  );
}

export default SignupButtons;
