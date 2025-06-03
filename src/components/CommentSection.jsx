// CommentSection.jsx
import { useState } from "react";
import { BsFillSendCheckFill } from "react-icons/bs";

import img from "../assets/previewblog2.jpg"
import img2 from "../assets/previewblog3.jpg";

const Comment = ({ user, text, showActions = false, replies = [] }) => {
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="p-4 bg-[#F3F7F9] rounded-md mb-4">
      <div className="flex items-start gap-3">
        <img src={img2} alt={user} className="w-10 h-10 rounded-full" />
        <div>
          <div className="flex items-center gap-3">
            <p className="font-normal text-[#1D2026]">{user}</p>
            {showActions && (
              <div className="flex items-center gap-2">
                <button className="text-[#2D9CDB] text-sm font-medium cursor-pointer">
                  Approve
                </button>
                <button className="text-[#FF6E6E] text-sm font-medium cursor-pointer">
                  Remove
                </button>
              </div>
            )}
          </div>
          <p className="text-[#242424BF] text-sm">{text}</p>

          <div className="mt-1 text-sm text-[#1D2026] flex items-start gap-4">
            <button onClick={() => setShowReply(!showReply)} className="cursor-pointer">Reply</button>
            {replies.length > 0 && <span>{replies.length} Replies</span>}
          </div>

          {showReply && (
            <div className="mt-5 ml-4">
              {replies.map(() => (
                <div className="flex items-start gap-3">
                  <img
                    src={img}
                    alt={user}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-normal text-[#1D2026]">{user}</p>
                      {showActions && (
                        <div className="flex items-center gap-2">
                          <button className="text-[#2D9CDB] text-sm font-medium cursor-pointer">
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-[#242424BF] text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CommentInput = () => {
  return (
    <div className="p-4 bg-[#F3F7F9] rounded-md mb-4 flex items-center justify-between">
      <div className="flex items-start gap-3">
        <div>
          <img
            src={img}
            alt="Rosa"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[#1D2026]">Rosa H. Kelly</h1>
          <input
            type="text"
            placeholder="Type Your Comment"
            className="text-[#1D202680] text-sm font-normal py-1 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <BsFillSendCheckFill className="text-[#F1A350]" />
      </div>
    </div>
  );
};

export default function CommentSection() {
  const comments = [
    {
      user: "Alva L. Hagen",
      text: "test comment",
      showActions: true,
      replies: [
        {
          user: "Alva L. Hagen",
          text: "test comment",
          showActions: true,
        },
      ],
    },
    {
      user: "Alva L. Hagen",
      text: "test comment",
      showActions: false,
    },
  ];

  return (
    <div className="mt-8">
      <CommentInput />
      {comments.map((cmt, idx) => (
        <Comment key={idx} {...cmt} />
      ))}
    </div>
  );
}
