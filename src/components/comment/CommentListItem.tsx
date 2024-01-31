"use client";

import { ChangeEvent, useCallback, useState } from "react";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import Text from "@/components/common/Text";
import TeamTag from "@/components/tag/TeamTag";
import { CommentData } from "@/components/comment/Comment";
import "@/components/comment/CommentListItem.scss";
import Reply from "@/components/reply/Reply";
import classNames from "classnames";

function CommentListItem({ username, team, comment }: CommentData) {
  const [visibleReply, setVisibleReply] = useState(false);
  const [visibleReplyList, setVisibleReplyList] = useState(false);
  const [like, setLike] = useState(false);
  const [reply, setReply] = useState("");

  const onVisible = () => {
    setVisibleReply(!visibleReply);
    setVisibleReplyList(!visibleReplyList);
  };

  const onLike = () => {
    setLike(!like);
  };

  const onChange = useCallback((event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setReply(value);
  }, []);

  return (
    <>
      <li className="item-block">
        <div className="item-block__comment">
          <div className="profile-image" />
          <div className="content">
            <div className="content__profile">
              <Text medium>{username}</Text>
              <TeamTag team={team} />
            </div>
            <Text medium>{comment}</Text>
            <div className="content__reply">
              <span onClick={onVisible}>답글 20</span>
              <span onClick={onVisible}>답글쓰기</span>
            </div>
          </div>
        </div>
        <div className="item-block__button">
          <div className="item-block__button__date">
            <span>2023.12.15</span>
            <span>신고</span>
          </div>
          <div className="item-block__button__like">
            <Text>좋아요</Text>
            <span>15</span>
            <div
              className={classNames(
                `${like ? "active-like-btn" : "inactive-like-btn"}`,
              )}
              onClick={onLike}
            >
              {like ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </div>
          </div>
        </div>
      </li>
      {visibleReplyList && <span>테스트</span>}
      {visibleReply && <Reply reply={reply} onChange={onChange} />}
    </>
  );
}

export default CommentListItem;
