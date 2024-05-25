export const Container = ({ children }) => {
  return (
    <div className="min-h-screen max-w-[1280px] m-auto flex flex-col">
      {children}
    </div>
  );
};
