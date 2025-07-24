import Footer from '../../components/Footer';
import Button from '../../components/Button'; // your theme toggle button
import FeaturedPostCard from '../../components/FeaturedPostCard';
import PostList from '../../components/PostList';

function HomePage() {


  return (
    <>
      <main className=" 
                       bg-white text-gray-900 
                       dark:bg-gray-900 dark:text-gray-100
                       transition-colors duration-300 ease-in-out"
      >
        <div className='container mx-auto px-4 py-8'>
          
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Inspiration. Stories. Insights.</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Welcome to <span className="font-semibold">YourBlog</span> — a modern platform to discover stories, share insights, and inspire change.
          </p>
          <Button text="Get Started" to="/about" />
        </section>

        {/* Featured Posts */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedPostCard
              image="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="A Deep Dive into React Hooks"
              excerpt="Master React hooks and turbocharge your functional components with these practical patterns..."
              author={{ name: 'Alex Carter', avatar: '/avatars/alex.png' }}
              date="July 24, 2025"
              postUrl="/blog/deep-dive-react-hooks"
            />
            <FeaturedPostCard
              image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="A Deep Dive into React Hooks"
              excerpt="Master React hooks and turbocharge your functional components with these practical patterns..."
              author={{ name: 'Alex Carter', avatar: '/avatars/alex.png' }}
              date="July 24, 2025"
              postUrl="/blog/deep-dive-react-hooks"
            />
            <FeaturedPostCard
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="A Deep Dive into React Hooks"
              excerpt="Master React hooks and turbocharge your functional components with these practical patterns..."
              author={{ name: 'Alex Carter', avatar: '/avatars/alex.png' }}
              date="July 24, 2025"
              postUrl="/blog/deep-dive-react-hooks"
            />
          </div>
        </section>

        {/* Recent Posts */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
          <PostList />
        </section>

        {/* Call to Action (CTA) */}
        <section className="bg-primary-100 rounded-lg p-8 text-center my-16
                           dark:bg-primary-900 dark:text-primary-100
                           transition-colors duration-300 ease-in-out"
        >
          <h3 className="text-xl font-semibold mb-3">Want to write your own story?</h3>
          <Button text="Start Blogging" to="/create" />
        </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
