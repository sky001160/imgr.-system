
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/login');
  }, []);
  return <p>正在跳轉到登入畫面...</p>;
}
