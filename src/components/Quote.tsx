const Quote = ({ content }: { content: string }) => {
  return (
    <div className="Quote">
      <div className="content">{'"' + content + '"'}</div>
    </div>
  );
};
export default Quote;
