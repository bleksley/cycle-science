import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <h1 className="font-display text-5xl font-bold uppercase text-charcoal">
          404
        </h1>
        <p className="mt-4 text-lg text-muted">This trail doesn&apos;t exist.</p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Back home
          </Button>
        </div>
      </Container>
    </section>
  );
}
