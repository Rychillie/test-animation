import { Container, CustomLink } from '@/components';

export default function Nav() {
  return (
    <nav className="mx-auto max-w-3xl -mb-16 py-6">
      <Container className="gap-2 w-full" isRow>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/second">Second</CustomLink>
      </Container>
    </nav>
  );
}
