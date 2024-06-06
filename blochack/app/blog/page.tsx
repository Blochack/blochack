import { Footer } from '@/components/Footer';
import { BlogHero } from '@/components/blog/blogHero';
import { Topics } from '@/components/blog/topics';

export default function Home() {
  return (
    <div>
      <BlogHero />
      <Topics />
      <Footer />
    </div>
  )
}
