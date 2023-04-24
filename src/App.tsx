import React, { useCallback, useEffect, useState } from 'react';
import Button from './Button';
const App = (): JSX.Element => {
  const baseUrl = 'https://api.quotable.io/random';
  const [textContent, setTextContent] = useState('');
  const [author, setAuthor] = useState('');

  const getContentAndSet = useCallback(async () => {
    try {
      const data = await fetch(baseUrl);
      const response = await data.json();
      setTextContent(response.content);
      setAuthor(response.author);
    } catch (error) {}
  }, [setTextContent, setAuthor]);

  useEffect(() => {
    getContentAndSet();
  }, [getContentAndSet]);

  return (
    <>
      <div className="App">
        {/* <button type="button" onClick={getContentAndSet}>
          Click Me
        </button> */}
        <Button
          style="{color:red}"
          onClick={getContentAndSet}
          label="Click Me"
        />
        <h1>Hello CodeSandbox</h1>
        <p>{textContent}</p>
      </div>
      <div className="pull-right">
        <span>{author}</span>
      </div>
    </>
  );
};

export default App;
