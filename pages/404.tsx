import { ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function NotFound(): ReactElement {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  });

  return <p>404</p>;
}
