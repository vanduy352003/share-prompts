import Feed from '@components/Feed';

// Implement Search
  // Search by prompt
  // Search by tag
  // Search by username
// Implement Click on tag
  // Search by tag when click appear in search bar
// Implement View other profiles

const Home = () => {
  return (
    <section className="w-full flex-center
    flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient 
            text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptopia is an open-source AI
            prompting tool for modern world 
            to discover, create and share creative 
            prompts
        </p>
    
        <Feed/>
    </section>
  )
}

export default Home