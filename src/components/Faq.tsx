import { Disclosure } from '@headlessui/react';

const faqs = [
  {
    title: 'What is Dark Forest?',
    text: 'Dark Forest is an MMO strategy game built with zkSNARKs on Gnosis Chain (formerly xDai). Players explore an infinite, procedurally-generated universe, conquering planets and growing a space empire.',
  },

];



export const FaqBlock = () => {
  return (
    <div className="container justify-center flex mx-auto my-20 ">
      <div className="sm:w-1/2">
        <h2 className="mb-8 text-center">FAQs</h2>

        {faqs.map((a, index) => {
          return (
            <Disclosure key={index}>
              <Disclosure.Button className="w-full my-2 py-2 bg-gray-1000 bg-green rounded px-8 hover:bg-gray-900 transition-all duration-300">
                {a.title}
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-200 py-4 px-4">
                {a.text}
              </Disclosure.Panel>
            </Disclosure>
          );
        })}


        {/* about how can i get play? */}

        <Disclosure >
          <Disclosure.Button className="w-full my-2 py-2 bg-gray-1000 bg-green rounded px-8 hover:bg-gray-900 transition-all duration-300">
          How can I get play?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-200 py-4 px-4">
          You can visit  <a  className="opensource" href="https://zkga.me/"> the official site</a> to 
          play a lobby on Mainnet Gnosis Chain, 
          or <a className="opensource" href="https://arena.dfdao.xyz/">DFDAO's Arena</a> to play an Arena match 
          on Optimistic Gnosis Chain. In both, you can create your own round, 
          setting rules the way you want, and can share the url with friends (or foes) to battle together. 
          Occassionally, there are also Official Rounds - 
          these are hosted by the official Dark Forest team and 
          often get thousands of players (whitelist keys are required) - 
          & Community Rounds or by other Guilds/DAO's 
          and will generally attract a few hundred players.
          </Disclosure.Panel>
        </Disclosure>

        {/* How can I join ZK Forest? */}
        <Disclosure >
          <Disclosure.Button className="w-full my-2 py-2 bg-gray-1000 bg-green rounded px-8 hover:bg-gray-900 transition-all duration-300">
          How can I join ZK Forest?
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-200 py-4 px-4">
          You can join our <a className="opensource" href="">Discord</a> and start from there. 
          Be active, contribute where you can and we would love to have you as one of our players/builders.
  
          </Disclosure.Panel>
        </Disclosure>




      </div>
    </div>
  );
};
