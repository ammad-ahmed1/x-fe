import React from "react";
import { MessageCircle, Repeat, Heart, Send } from "lucide-react";

const PostCard = ({ post }) => {
  return (
    <div className="border-b py-2 md:py-4">
      <div className="flex px-6">
        <img
          src={post.user.profile_image}
          alt={`${post.user.name} profile`}
          className="rounded-full w-12 h-12 mr-4"
        />
        <div>
          <div>
            <span className="font-bold">{post.user.name}</span>
            <span className="text-gray-500 text-sm ml-2">
              {post.user.username}
            </span>
            <span className="text-gray-500 text-sm ml-2">
              • {post.post.date}
            </span>
          </div>
          <p className="mt-2 text-sm">{post.post.content}</p>
        </div>
      </div>

      {post.post.image && (
        <div className=" my-3 px-8 md:px-22">
          <img
            src={post.post.image}
            alt="Tweet image"
            className="max-w-full rounded-lg"
          />
        </div>
      )}

      <div className="pl-16 flex space-x-4 text-gray-500">
        <div className="flex items-center">
          <MessageCircle size={20} className="mr-2" />
          <span>{post.engagement.comments}</span>
        </div>
        <div className="flex items-center">
          <Repeat size={20} className="mr-2" />
          <span>{post.engagement.retweets}</span>
        </div>
        <div className="flex items-center">
          <Heart size={20} className="mr-2" />
          <span>{post.engagement.likes}</span>
        </div>
        <div className="flex items-center">
          <Send size={20} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
