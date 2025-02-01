import React from 'react';
import { MessageCircle, Repeat, Heart, Send } from 'lucide-react';

// Sample post data - this would likely come from an API
const posts = [
  {
    id: 1,
    author: {
      name: "Steve Schoger",
      handle: "Steve_Schoger",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Steve"
    },
    date: "Jun 27",
    content: "🔥 If you're tired of using outline styles for secondary buttons, a soft solid background based on the text color can be a great alternative.",
    image: "https://source.unsplash.com/800x450?ui",
    stats: {
      comments: 33,
      retweets: 397,
      likes: "2.6k"
    }
  },
  {
    id: 2,
    author: {
      name: "Sarah Designer",
      handle: "sarahdesigner",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    date: "Jun 28",
    content: "💡 Pro tip: Use consistent spacing to create visual hierarchy in your designs. It's a simple but effective way to improve readability.",
    image: "https://picsum.photos/800/450?random=1",
    stats: {
      comments: 24,
      retweets: 256,
      likes: "1.8k"
    }
  }
];

// Separate Post component for better organization
const Post = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-start space-x-4">
        <img 
          src={post.author.avatar}
          alt={`${post.author.name} profile`}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold">{post.author.name}</span>
            <span className="text-gray-500">@{post.author.handle}</span>
            <span className="text-gray-500">· {post.date}</span>
          </div>
          
          <p className="my-2">{post.content}</p>
          
          {post.image && (
            <div className="mt-3 mb-4">
              <img 
                src={post.image}
                alt="Post attachment"
                className="rounded-lg w-full"
              />
            </div>
          )}
          
          <div className="flex justify-between items-center mt-4 text-gray-500">
            <button 
              className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
              aria-label={`Comment on ${post.author.name}'s post`}
            >
              <MessageCircle size={20} />
              <span>{post.stats.comments}</span>
            </button>
            
            <button 
              className="flex items-center space-x-2 hover:text-green-500 transition-colors"
              aria-label="Retweet"
            >
              <Repeat size={20} />
              <span>{post.stats.retweets}</span>
            </button>
            
            <button 
              className="flex items-center space-x-2 hover:text-red-500 transition-colors"
              aria-label="Like"
            >
              <Heart size={20} />
              <span>{post.stats.likes}</span>
            </button>
            
            <button 
              className="flex items-center hover:text-blue-500 transition-colors"
              aria-label="Share"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostSection = () => {
  return (
    <div className="container mx-auto p-4 text-gray-800">
      <nav className="mb-4">
        <h1 className="text-xl font-bold">Twitter Feed</h1>
      </nav>
      
      <section className="max-w-2xl mx-auto">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default PostSection;