import React, { useRef, useState, useEffect } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import { useLocation } from 'react-router-dom';
import TOC from './TOC';

interface DocumentContentsProps {
  contents: string;
}

const DocumentContents = ({ contents }: DocumentContentsProps) => {
  const viewerRef = useRef<Viewer>(null);
  const [headTags, setHeadTags] = useState<Element[]>([]);
  const getHeadTags = (viewer: any) => {
    const viewerText = viewer.options.el as HTMLElement;
    setHeadTags(Array.from(viewerText.querySelectorAll('h1, h2, h3, h4, h5, h6')));
  };

  const location = useLocation();

  useEffect(() => {
    const instance = viewerRef.current?.getInstance();
    instance?.setMarkdown(contents);
    getHeadTags(instance);
  }, [location.pathname]);

  return (
    <>
      <TOC headTags={headTags} />
      <Viewer ref={viewerRef} initialValue={contents} onLoad={getHeadTags} />
    </>
  );
};

export default DocumentContents;
