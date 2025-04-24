function HomeFooter() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="p-4 text-sm text-muted-foreground font-medium">
      © {thisYear} —{" "}
      <span className="font-semibold text-foreground">Numora</span>. Todos os
      direitos reservados.
    </footer>
  );
}

export default HomeFooter;
