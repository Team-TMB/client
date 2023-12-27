"use client";

import Text from "../common/Text";
import TeamTag from "../tag/TeamTag";
import { CommentData } from "./Comment";
import "./CommentListItem.scss";

import { ChangeEvent, useCallback, useState } from "react";

function CommentListItem({ username, team, comment }: CommentData) {
  const [visibleReply, setVisibleReply] = useState(false);
  const [reply, setReply] = useState("");

  const onVisible = useCallback(() => {
    setVisibleReply(!visibleReply);
  }, [visibleReply]);

  const onChange = useCallback((event: ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setReply(value);
  }, []);

  return (
    <>
      <li className="item-block">
        <div className="item-block__comment">
          <div className="profile-image"></div>
          <div className="content">
            <div className="content__profile">
              <Text medium>{username}</Text>
              <TeamTag team={team} />
            </div>
            <Text medium>{comment}</Text>
            <div className="content__reply">
              <span>답글 20</span>
              <span onClick={onVisible}>답글쓰기</span>
            </div>
          </div>
        </div>
        <div className="item-block__button">
          <button>좋아요</button>
          <Text small>36</Text>
          <button>신고</button>
        </div>
      </li>
      {visibleReply && (
        <div className="reply-block">
          <input
            className="reply-input"
            type="text"
            onChange={onChange}
            value={reply}
            placeholder="답글을 입력하세요."
          />
        </div>
      )}
    </>
  );
}

export default CommentListItem;