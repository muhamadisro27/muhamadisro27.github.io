import Navbar from "../elements/Navbar";

interface AppShellInterface {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellInterface) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AppShell;
