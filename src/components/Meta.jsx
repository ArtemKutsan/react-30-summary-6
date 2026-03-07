import { useEffect } from 'react';

const Meta = ({ title }) => {
  useEffect(() => {
    const baseTitle = 'Travel Planner';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
  }, [title]);

  return null;
};

export default Meta;
