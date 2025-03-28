
import React, { useState } from 'react';

interface CommentType {
  id: string;
  author: string;
  avatar: string;
  content: string;
  date: string;
  replies?: CommentType[];
}

interface CommentSectionProps {
  comments: CommentType[];
}

const Comment: React.FC<{ comment: CommentType, level?: number }> = ({ comment, level = 0 }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  
  const handleReply = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would submit the reply to an API
    setReplyContent('');
    setIsReplying(false);
    alert('Reply submitted! (This is just a mock implementation)');
  };
  
  return (
    <div className={`mb-6 ${level > 0 ? 'ml-8 pl-4 border-l-4 border-neobrutalism-blue' : ''}`}>
      <div className="brutal-card p-4">
        <div className="flex items-start space-x-3">
          <img 
            src={comment.avatar} 
            alt={comment.author}
            className="w-10 h-10 rounded-none border-2 border-black"
          />
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-mono font-bold">{comment.author}</h4>
              <span className="text-sm text-gray-600">{comment.date}</span>
            </div>
            
            <p className="mb-3">{comment.content}</p>
            
            <button 
              onClick={() => setIsReplying(!isReplying)}
              className="text-sm font-bold hover:text-neobrutalism-blue"
            >
              {isReplying ? 'CANCEL' : 'REPLY'}
            </button>
          </div>
        </div>
      </div>
      
      {isReplying && (
        <div className="mt-4 ml-8">
          <form onSubmit={handleReply} className="brutal-card p-4">
            <textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Write your reply..."
              className="w-full border-4 border-black p-3 mb-3 focus:outline-none resize-none"
              rows={3}
              required
            />
            
            <button 
              type="submit"
              className="brutal-btn"
            >
              SUBMIT REPLY
            </button>
          </form>
        </div>
      )}
      
      {comment.replies && comment.replies.map(reply => (
        <Comment key={reply.id} comment={reply} level={level + 1} />
      ))}
    </div>
  );
};

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const [newComment, setNewComment] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would submit the comment to an API
    setNewComment('');
    alert('Comment submitted! (This is just a mock implementation)');
  };
  
  return (
    <section className="my-12">
      <h2 className="font-mono font-bold text-2xl mb-6">COMMENTS ({comments.length})</h2>
      
      <form onSubmit={handleSubmit} className="brutal-card p-6 mb-8">
        <h3 className="font-mono font-bold text-xl mb-4">Add a comment</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="w-full border-4 border-black p-4 mb-4 focus:outline-none resize-none"
          rows={4}
          required
        />
        
        <button 
          type="submit"
          className="brutal-btn"
        >
          POST COMMENT
        </button>
      </form>
      
      <div className="space-y-6">
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
