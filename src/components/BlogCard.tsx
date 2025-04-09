
import React from "react";
import { Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const BlogCard = ({ id, title, excerpt, date, author, image, category }: BlogCardProps) => {
  return (
    <div className="glass rounded-xl overflow-hidden animate-on-scroll opacity-0 h-full flex flex-col hover-scale">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium glass">
          {category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        
        <p className="text-muted-foreground mb-4 flex-grow">{excerpt}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <span>{author}</span>
        </div>
        
        <Link 
          to={`/blog/${id}`} 
          className="mt-4 button-secondary w-full flex items-center justify-center"
        >
          Read Article
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
