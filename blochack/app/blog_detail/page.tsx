import { FooterFoot } from '@/components/FooterFoot';
import { BlogPageHero } from '@/components/blog/blogPageHero';
import { BlogDetail } from '@/components/blog/blogDetail';

export default function Home() {
  return (
    <div>
      <BlogPageHero />
      <BlogDetail />
      <FooterFoot />
    </div>
  )
}
