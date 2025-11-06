
import { TypingText } from "../components/ui/typingtext";

export default function Home() {
  return (
    <section className="min-h-[72vh] flex items-center">
      <div className="container">
        <div className="max-w-3xl">
          <TypingText
            text="Hello — I’m Bondoc. This is my Personal Website Portfolio."
            speed={60}
            className="text-4xl sm:text-5xl font-extrabold leading-tight text-accent"
          />
          <p className="mt-4 text-lg text-muted">
            I create fast, accessible, and beautiful interfaces. This is a placeholder hero that you can replace.
          </p>
        </div>
      </div>
    </section>
  );
}