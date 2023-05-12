import React, { useState } from 'react';
import Button from '../components/ui/Button';

export default function NewNotice() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const handleTitleChange = event => {
    setTitle(event.target.value);
  };
  
  const handleContentChange = event => {
    setContent(event.target.value);
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission
  };
  
  return (
    <section className='mx-auto'> 
      <h2 className='p-4 text-2xl text-center font-bold'>게시판 등록</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2 font-bold">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} className="w-full px-3 py-2 border rounded-md" />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block mb-2 font-bold">Content:</label>
        <textarea id="content" value={content} onChange={handleContentChange} rows={4} cols={50} className="w-full px-3 py-2 border rounded-md"></textarea>
      </div>
      <Button text='게시글 작성' type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700" />
    </form>

    </section>
  );
}

