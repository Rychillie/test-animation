import { CustomLink, Heading } from '@/components';

export default function Home() {
  return (
    <>
      <Heading>Hello World</Heading>
      <CustomLink href="/second">Go to second page</CustomLink>
    </>
  );
}
