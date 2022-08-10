
// import {Button } from '@/components/button';

export interface Wonder {
    name: string | 'name';
    order: string | 'power';
    id: string | '1';
    url: string;
  }
  
  export const wonders: Wonder[] = [
    { name: 'The Glowing Geyser', order: 'anger', id: '538', url:'https://zkga.me' },
    { name: 'The Pale Pillar', order: 'detection', id: '1518' , url:'https://zkga.me' },
    { name: 'The Cerulean Chamber', order: 'fury', id: '7083' , url:'https://zkga.me' },
    { name: 'The Pagoda of Fortune', order: 'rage', id: '4749' , url:'https://zkga.me' },
    { name: 'Pantheon Of Chaos', order: 'reflection', id: '1275' , url:'https://zkga.me' },
    { name: 'Altar Of The Void', order: 'the fox', id: '4581', url:'https://zkga.me'  },
    { name: 'Sanctum Of The Oracle', order: 'the twins', id: '2658' , url:'https://zkga.me' },
    { name: 'The Perpetual Fjord', order: 'vitriol', id: '5335', url:'https://zkga.me'  },
    { name: 'Infinity Spire', order: 'brilliance', id: '6196' , url:'https://zkga.me' },
    { name: 'The Ancestral Trees', order: 'enlightenment', id: '6725' , url:'https://zkga.me' },
    { name: 'The Amaranthine Rock', order: 'giants', id: '1461' , url:'https://zkga.me' },
    { name: 'Sanctum Of Purpose', order: 'perfection', id: '4575' , url:'https://zkga.me' },
    { name: 'The Origin Oasis', order: 'power', id: '4363', url:'https://zkga.me'  },
    { name: 'The Mirror Grotto', order: 'protection', id: '3903', url:'https://zkga.me'  },
    { name: 'The Weeping Willow', order: 'skill', id: '4934' , url:'https://zkga.me' },
    { name: 'The Solemn Catacombs', order: 'titans', id: '7179', url:'https://zkga.me'  },
  ];
  

export const WonderBlock = (props: Wonder) => {
  return (
    <div className="flex flex-col border rounded-2xl border-yellow-100/20 p-2 sm:p-6 text-center hover:bg-gray-800/40 transition-all duration-300 transform hover:-translate-y-1">
      {/* <OrderIcon className="mx-auto" order={props.order} size="lg" /> */}



      <div className='flex justify-center w-full py-8 space-x-6 bg-archon nftbox'>
            <div className="nft-image circle w-24">
              <img
                src="darkforestLogo.png"
                className="center-logo"
                onClick={() => { window.open("https://zkga.me"); }}
              />
            </div>
          </div>


      <h4 className="text-gray-500">Order of {props.order}</h4>
      <h2>{props.name}</h2>
      <div className="flex space-x-2 pt-6 justify-around w-full mt-auto">
        {/* <Button
          href={
            'https://opensea.io/assets/0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d/' +
            props.id
          }
          className="w-full"
          variant="primary"
          size="xs"
        >
          opensea
        </Button>
        <Button
          href={'https://atlas.bibliothecadao.xyz/?realm=' + props.id}
          className="w-full"
          variant="primary"
          size="xs"
        >
          atlas
        </Button> */}
{/* 
        <button className="bg-gray hover:bg-white"> this </button>
        <button className="bg-gray hover:bg-white "> two </button>  */}

        <div className="flex gap-5 rounded pt-5 mt-auto">
              <div className="flex flex-wrap w-full">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={props.url as string}
                    
                      className="bg-gray-800 hover:bg-gray-600 py-2 rounded-xl px-5 my-1 text-lg  text-gray-200 border border-gray-700 w-full text-center"
                    >
                      {props.name}
                    </a>
                    <a
                    
                      href={props.url as string}
                    
                      className="bg-gray-800 hover:bg-gray-600 py-2 rounded-xl px-5 my-1 text-lg  text-gray-200 border border-gray-700 w-full text-center"
                    >
                      {props.name}
                    </a>
             
              </div>
            </div>

      </div>
    </div>
  );
};
