import React from 'react';
import { MessageCircle, Repeat, Heart, Send } from 'lucide-react';

const posts = [
  {
    user: {
      name: "Steve Schoger",
      username: "@SteveSchoger",
      profile_image: "https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg"
    },
    post: {
      date: "Jun 27",
      content: "🔥 If you're tired of using outline styles for secondary buttons, a soft solid background based on the text color can be a great alternative.",
      image: "https://pbs.twimg.com/media/Dgti2h0WkAEUPmT.png"
    },
    engagement: {
      comments: 33,
      retweets: 397,
      likes: 2600,
      shares: 0
    }
  },
  {
    user: {
      name: "Justin Doe",
      username: "@Justin",
      profile_image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    post: {
      date: "Aug 5",
      content: "Learning React is fun! 🚀 Just finished my first React project, and I'm excited to build more.",
      image: "https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg"
    },
    engagement: {
      comments: 2,
      retweets: 39,
      likes: 50,
      shares: 4
    }
  },
  {
    user: {
      name: "Steve Schoger",
      username: "@SteveSchoger",
      profile_image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    post: {
      date: "Jun 27",
      content: "🔥 If you're tired of using outline styles for secondary buttons, a soft solid background based on the text color can be a great alternative.",
      image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"
    },
    engagement: {
      comments: 33,
      retweets: 197,
      likes: 600,
      shares: 20
    }
  },
  {
    user: {
      name: "Peggy Doe",
      username: "@peggydoe",
      profile_image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    post: {
      date: "Jun 27",
      content: "🔥 If you're tired of using outline styles for secondary buttons, a soft solid background based on the text color can be a great alternative.",
      image: "https://images.pexels.com/photos/2078263/pexels-photo-2078263.jpeg"
    },
    engagement: {
      comments: 93,
      retweets: 7,
      likes: 20,
      shares: 3
    }
  },
];

const Post = () => {
  return (
    <div className="mx-auto shadow-sm">
      {posts.map((post, index) => (
        <div key={index} className="p-6 border-b border-bottom">
          <div className="flex items-start mb-3">
            <img 
              src={post.user.profile_image} 
              alt={`${post.user.name} profile`}
              className="rounded-full w-12 h-12 mr-4" 
            />
            <div>
              <div>
                <span className="font-bold">{post.user.name}</span>
                <span className="text-gray-500 text-sm ml-2">{post.user.username}</span>
                <span className="text-gray-500 text-sm ml-2">• {post.post.date}</span>
              </div>
              <p className="mt-2 text-sm">
                {post.post.content}
              </p>
            </div>
          </div>

          {post.post.image && (
            <div className="pl-16 mb-3">
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
      ))}
    </div>
  );
};

export default Post;
