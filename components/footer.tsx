export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="text-muted-foreground text-sm">© {currentYear} Nguyễn Thế Dũng. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://github.com/DungNguyenGL23" className="text-muted-foreground hover:text-accent transition-colors text-sm">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/d%E1%BB%A9ng-nguy%E1%BB%85n-24993a2a0/"
            className="text-muted-foreground hover:text-accent transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
