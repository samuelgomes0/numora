import HomeFooter from "./components/Footer";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 -z-10 flex h-full min-h-screen w-full flex-col items-center bg-white [background:radial-gradient(circle_at_center,#2a1860_0%,#000000_80%)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      {children}
      <HomeFooter />
    </div>
  );
}

export default PublicLayout;
