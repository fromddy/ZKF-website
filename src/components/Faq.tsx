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
      </div>
    </div>
  );
};
